const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.signup = async (req, res) => {
  const { username, email, password, university } = req.body;
  try {
    const serializedEmail = email.toLowerCase();
    let user = await User.findOne({ email: serializedEmail });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ username, email: serializedEmail, password, university });
    await user.save();

    const token = generateToken(user);
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const serializedEmail = email.toLowerCase();
    const user = await User.findOne({ email: serializedEmail });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const token = generateToken(user);
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.googleLogin = async (req, res) => {
  const { credential } = req.body;
  
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const { name, email, picture, sub } = ticket.getPayload();
    
    let user = await User.findOne({ email });
    
    if (user) {
      // Update googleId if not present (linking accounts)
      if (!user.googleId) {
        user.googleId = sub;
        await user.save();
      }
    } else {
      // Create new user
       user = await User.create({
        username: name,
        email,
        googleId: sub,
        avatar: picture
      });
    }

    const token = generateToken(user);
    res.json({ token, user: { id: user.id, username: user.username, email: user.email, avatar: user.avatar } });
    
  } catch (err) {
    console.error('Google Auth Error:', err);
    res.status(401).json({ msg: 'Google authentication failed' });
  }
};

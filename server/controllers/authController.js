const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET, { expiresIn: '15d' });
};

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

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

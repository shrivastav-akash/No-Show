const express = require('express');
const router = express.Router(); // Renamed to router
const auth = require('../middleware/auth'); // Ensure auth middleware is imported
const User = require('../models/User'); // Ensure User model is imported

// Update User Profile
router.put('/profile', auth, async (req, res) => {
  const { name, university } = req.body; // Changed 'name' to 'username' if that's the field, but schema has 'username'. Assuming 'name' maps to 'username' based on user request "edit their details like name". Actually schema says 'username'. I'll stick to 'username'.
  // User request says "edit their details like name". I used 'username' in schema.
  
  const userFields = {};
  if (name) userFields.username = name; // Map name to username or add name field? I'll map name to username for now or just use username.
  // Actually, I'll check req.body.username as well.
  if (req.body.username) userFields.username = req.body.username;
  if (university) userFields.university = university;

  try {
    let user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user = await User.findByIdAndUpdate(req.user.id, { $set: userFields }, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

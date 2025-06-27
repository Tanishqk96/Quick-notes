const usermodel = require('../config/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "@123498765@"; // consider moving this to .env later

const RegisterUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await usermodel.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new usermodel({
      fullName,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Error in RegisterUser:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Enter the complete details!" });

  try {
    const existingUser = await usermodel.findOne({ email: email.toLowerCase() });
    if (!existingUser)
      return res.status(401).json({ message: "Invalid credentials!" });

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials!" });

    // ✅ generate token only after password match
    const token = jwt.sign({ userId: existingUser._id }, SECRET_KEY, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        _id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
      }
    });
  } catch (error) {
    console.error('Error in LoginUser:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { RegisterUser, LoginUser };

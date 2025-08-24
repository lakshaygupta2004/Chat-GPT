const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function setTokenCookie(res, token) {
  res.cookie("token", token);
}

async function registerUser(req, res) {
  try {
    const { fullName: { firstName, lastName }, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });
    if (isUserAlreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullName: { firstName, lastName },
      email,
      password: hashPassword
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    setTokenCookie(res, token);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        email: user.email,
        _id: user._id,
        fullName: user.fullName
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    setTokenCookie(res, token);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        email: user.email,
        _id: user._id,
        fullName: user.fullName
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

// ✅ New checkAuth function
async function checkAuth(req, res) {
  try {
    const token = req.cookies.token;  // read token from cookie

    if (!token) {
      return res.status(401).json({ authenticated: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // optional: fetch user details
    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ authenticated: false });
    }

    res.json({
      authenticated: true,
      user
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ authenticated: false });
  }
}

module.exports = {
  registerUser,
  loginUser,
  checkAuth
};
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ firstName, lastName, email, password });
    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user.id),
        });
    } else {
        res.status(400).json({ message: "Invalid user data" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user.id),
        });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
};

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
        res.json({ _id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

module.exports = { registerUser, loginUser, getUserProfile };

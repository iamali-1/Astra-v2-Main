const _userSchema = require("../database/models/UserSchema");
const errorHandler = require("../middleware/errorHandler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(errorHandler(400, "User not found!"));
  }

  const existUser = await _userSchema.findOne({ email });
  if (existUser) {
    return next(errorHandler(400, "You already registered"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new _userSchema({ name, email, password: hashedPassword });

  await newUser.save();
  res.status(201).json({ msg: "User created successfully!" });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await _userSchema.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User not found!"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandler(400, "Wrong credentials!"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const currentUser = async (req, res, next) => {
  try {
    const _user = await _userSchema.findOne({ _id: req.user.id });
    res.status(201).json({ msg: "hi", _user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  currentUser,
};

const HttpError = require("../models/http-error");
const mongoose = require('mongoose');
const User = require("../models/user");
const { validationResult } = require("express-validator");

const getUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    const error = new HttpError(
      "Could not find user which provided by id",
      404
    );
    return next(error);
  }
  res.status(200);
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const getUserById = async (req, res, next) => {
  const userId = req.params.uid;
  let users;

  try {
    users = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Fetching user was error, please try again",
      500
    );
    return next(error);
  }
  if (!users) {
    const error = new HttpError("Could not found user, provide by id", 404);
    return next(error);
  }

  res.json({ users: users.toObject({ getters: true }) });
};


//Sign Up Method
const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid input passed. please check your data", 422);
    return next(error);
  }

  const { username, email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signing Up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User already exist, please login instead",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    username,
    email,
    password,
    places: []
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Signing Up user error, please try again!",
      500
    );
    return next(error);
  }

  res.status(200).json({ user: createdUser.toObject({ getters: true }) });
};

//Log In Method
const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    console.log(err)
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }
  res.json({ message: "Logged in!" });
};

exports.getUser = getUser;
exports.getUserById = getUserById;
exports.logIn = logIn;
exports.signUp = signUp;


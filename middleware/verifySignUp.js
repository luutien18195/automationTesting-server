import { UserModel } from "../models/UserModel.js";

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  UserModel.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      res.status(400).send({
        message: "Username is already in use",
      });
      return;
    }
    // Email
    UserModel.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        return next(err);
      }
      if (user) {
        res.status(400).send({
          message: "Email is already in use",
        });
        return;
      }
      next();
    });
  });
};

const verifySignUp = {checkDuplicateUsernameOrEmail};

export default verifySignUp;

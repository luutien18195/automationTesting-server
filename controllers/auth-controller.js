import authConfig from '../config/auth.config.js';
import { UserModel } from "../models/UserModel.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs/dist/bcrypt.js";

const signup = (req, res) => {
  console.log(req);
  const user = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    user.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send({ message: "User was registered successfully!" });
    });
  });
};

const signin = (req, res) => {
  UserModel.findOne({
    username: req.body.username,
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jsonwebtoken.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 86400, // 24 hours
      });
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    });
};

const authController = {signin, signup};

export default authController;

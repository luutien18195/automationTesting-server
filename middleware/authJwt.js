import jsonwebtoken from "jsonwebtoken";
import authConfig from '../config/auth.config.js';
const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jsonwebtoken.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};
const authJwt = {
  verifyToken
};
export default authJwt;
import express from 'express';
const router = express.Router();
import verifySignUp from '../middleware/verifySignUp.js';
import authController from '../controllers/auth-controller.js';

router.post(
  "/api/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail],
  authController.signup
);
router.post("/api/auth/signin", authController.signin);

export default router;
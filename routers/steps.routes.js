import express from 'express';
import {createStep} from '../controllers/steps-controller.js';
import authJwt from '../middleware/authJwt.js';

const router = express.Router();

router.post('/createStep/',  [authJwt.verifyToken], createStep);

export default router;
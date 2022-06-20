import express from 'express';
import {getScenarios, createScenario} from '../controllers/scenarios-controller.js';
import authJwt from '../middleware/authJwt.js';

const router = express.Router();

router.get('/', [authJwt.verifyToken], getScenarios);
router.post('/create',  [authJwt.verifyToken], createScenario);

export default router;
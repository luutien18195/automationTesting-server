import express from 'express';
import {getScenarios, createScenario} from '../controllers/scenarios-controller.js';

const router = express.Router();

router.get('/', getScenarios);
router.post('/', createScenario)

export default router;
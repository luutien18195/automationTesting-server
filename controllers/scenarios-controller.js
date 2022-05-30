import {ScenarioModel} from '../models/ScenarioModel.js';
import {HTTP_STATUS} from '../utils/constant.js';

export const getScenarios = async (req, res) => {
    try {
        const scenarios = await ScenarioModel.find();
        console.log(`Get all scenarios\nFind success! ${scenarios.length} records`);
        res.status(HTTP_STATUS.OK).json(scenarios);
    } catch (err) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: err});
    }
}

export const createScenario = async (req, res) => {
    try {
        const newScenario = req.body;
        const scenario = new ScenarioModel(newScenario);
        await scenario.save();

        res.status(HTTP_STATUS.OK).json(scenario)
    } catch (error) {
        
    }
}
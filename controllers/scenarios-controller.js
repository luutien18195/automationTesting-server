import {ScenarioModel} from "../models/ScenarioModel.js";
import {HTTP_STATUS} from "../utils/constant.js";

export const getScenarios = async (req, res) => {
  try {
    let searchQuery = {};
    if (req.body.name !== "") {
      searchQuery.name = {$regex: req.body.name, $options: "i"};
    }

    if (req.body.title !== "") {
      searchQuery.title = {$regex: req.body.title, $options: "i"};
    }

    const scenarios = await ScenarioModel.find(searchQuery, null, {limit: req.body.size}).exec();
    
    const totalCount = await ScenarioModel.find(searchQuery).count();
    console.log(`Get all scenarios\nFind success! ${scenarios.length} records`);
    res
      .status(HTTP_STATUS.OK)
      .json({scenarios: scenarios, totalCount: totalCount});
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: err});
  }
};

export const createScenario = async (req, res) => {
  try {
    const newScenario = req.body;
    const scenario = new ScenarioModel(newScenario);
    await scenario.save();

    res.status(HTTP_STATUS.OK).json(scenario);
  } catch (error) {} 
};

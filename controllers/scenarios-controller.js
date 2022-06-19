import {ScenarioModel} from "../models/ScenarioModel.js";
import {HTTP_STATUS} from "../utils/constant.js";

export const getScenarios = async (req, res) => {
  try {
    let searchQuery = {};
    if (req.query.name !== "") {
      searchQuery.name = `/${req.query.name}/i`;
    }

    if (req.query.title !== "") {
      searchQuery.title = `/${req.query.title}/i`;
    }

    console.log("searchQuery", searchQuery);

    const scenarios = await ScenarioModel.find(searchQuery)
      .skip(req.query.page * req.query.size)
      .limit(req.query.size);
    console.log("query", req.query);
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

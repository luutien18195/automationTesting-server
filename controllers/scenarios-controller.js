import {ScenarioModel} from "../models/ScenarioModel.js";
import {HTTP_STATUS} from "../utils/constant.js";

export const getScenarios = async (req, res) => {
  try {
    let searchQuery = {};
    const searchName = req.query.name;
    const searchTitle = req.query.title;
    if (searchName !== "" && typeof searchName !== 'undefined') {
      searchQuery.name = {$regex: searchName, $options: "i"};
    }

    if (searchTitle !== "" && typeof searchTitle !== 'undefined') {
      searchQuery.title = {$regex: searchTitle, $options: "i"};
    }

    const scenarios = await ScenarioModel.find(
      searchQuery,
      null,
      {skip:req.query.page * req.query.size, limit: req.query.size}
    ).exec();
    
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
    console.log("test");
    const newScenario = req.body;
    const scenario = new ScenarioModel(newScenario);
    await scenario.save(function (err, scenario) {
      if (err) return console.error(err);
      console.log(scenario + " saved to collection.");
    })
    res.status(HTTP_STATUS.OK).json({scenario: scenario});
  } catch (err) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: err});
  }
    
};

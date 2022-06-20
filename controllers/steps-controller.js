import {stepsModel} from "../models/stepsModel.js";
import {HTTP_STATUS} from "../utils/constant.js";


export const createStep = async (req, res) => {
    try {
        const steps = new stepsModel(req.body);
        await steps.save();

        res.status(HTTP_STATUS.OK).json(steps);
    } catch (error) {}
};

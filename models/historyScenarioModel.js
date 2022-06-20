import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    status: String,
    creator: String,
    logContent: [
        {
            type: String,
            String
        }
    ],
    idScenario: String,

}, {timestamps: true});

export const historyScenarioModel = mongoose.model('historyScenario', schema);
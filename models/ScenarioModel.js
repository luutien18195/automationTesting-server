import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    functions: [String],
    description: {
        type: String
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    isDeleted: Boolean,
    creator: String,
    listSteps: [String],
    groupId: String,
    idCommon: String,
}, {timestamps: true});

export const ScenarioModel = mongoose.model('scenarios', schema);
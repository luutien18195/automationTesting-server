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
    }
}, {timestamps: true});

export const ScenarioModel = mongoose.model('Scenario', schema);
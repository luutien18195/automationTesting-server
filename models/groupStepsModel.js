import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    listSteps: [String]

}, {timestamps: true});

export const groupStepsModel = mongoose.model('groupSteps', schema);
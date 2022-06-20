import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title: String,
    accountSettingId:  String,
    screenId: String,
    action: String,
    targetElement: String,
    expectValue: String,
    isDeleted: Boolean,

}, {timestamps: true});

export const stepsModel = mongoose.model('steps', schema);
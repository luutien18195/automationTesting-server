import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    url: String,
    environmentName: String

}, {timestamps: true});

export const commonSettingModel = mongoose.model('commonSetting', schema);
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    ownerUserId: String,
    accountName: String,
    passWord: String,
    userRoleId: String,

}, {timestamps: true});

export const accountSettingsModel = mongoose.model('accountSettings', schema);
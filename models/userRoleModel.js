import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    isDeleted:  Boolean,


}, {timestamps: true});

export const userRoleModel = mongoose.model('userRole', schema);
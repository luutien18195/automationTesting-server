import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

}, {timestamps: true});

export const functionModel = mongoose.model('Function', schema);
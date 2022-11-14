const mongoose = require('mongoose');
const Joi = require('joi');

const algoSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true, 
        minlength: 3, 
        maxlength: 30 
    },
    author: { 
        type: String,
        required: true, 
        minlength: 3, 
        maxlength: 30 
    },
    date: {
        type: Date,
        default: Date.now()
    },
    about: {
        type: String,
        required: true,
        minlength: 4
    },
    body: {
        type: String,
        required: true,
        minlength: 10
    }
});

const Algorithm = mongoose.model("Algorithms",algoSchema,"algorithms");

function validate(resurs){
    const algoSchema = Joi.object({
        name: Joi.string().required().min(4).max(30),
        author: Joi.string().required().min(4).max(30),
        about: Joi.string().required().min(4),
        body: Joi.string().required().min(10)
    });
    return algoSchema.validate(resurs);
}

exports.Algorithm = Algorithm;
exports.validate = validate;
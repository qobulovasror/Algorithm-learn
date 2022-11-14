const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema  = new mongoose.Schema({
    name: { 
        type: String,
        required: true, 
        minlength: 3, 
        maxlength: 30 
    },
    email: {
        type: String,
        required: true,
        unique:  true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

const Users = mongoose.model("Users",userSchema,"users");

function validate(resurs){
    const userSchema = Joi.object({
        name: Joi.string().required().min(4).max(30),
        email: Joi.string().required().min(4).max(35),
        password: Joi.string().required().min(4)
    });
    return userSchema.validate(resurs);
}

exports.Users = Users;
exports.validate = validate;

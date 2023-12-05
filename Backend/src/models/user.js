import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTSECRETKEY, { expiresIn: '2d' });
    return token;
};

const User = mongoose.model('user', userSchema);

const validate = (data) => {
    const schema = {
        username: Joi.string().required().label('username'),
        email: Joi.string().email().required().label('email'),
        password: Joi.string().required().custom(passwordComplexity(), 'password'),
    };
    return schema.validate(data);
};

export default { User, validate };

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: '7d',
    });
    return token;
};

const User = mongoose.model('user', userSchema);

const validate = (data) => {
    console.log('====================================');
    console.log(data,"in validate");
    console.log('====================================');
    const schema = Joi.object({
        username: Joi.string().required().label('username'),
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password'),
    });
    return schema.validate(data);
};

export { User, validate };

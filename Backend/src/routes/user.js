import express from 'express';
import { User, validate } from '../models/user.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    try {
        const { error } = validate(req.body);
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(409).send({ message: 'User with given email already Exist!' });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

export default router;

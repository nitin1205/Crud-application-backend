import Joi, { ObjectSchema } from 'joi';

const signupSchema: ObjectSchema = Joi.object().keys({
    name: Joi.string().required().min(4).max(12).messages({
        'string.base': 'Name must be of string type',
        'string.min': 'Invalid Name',
        'string.max': 'Invalid Name',
        'string.empty': 'Name is a required field'
    }),
    email: Joi.string().required().email().messages({
        'string.base': 'Email must be of string type',
        'string.email': 'Email must be valid',
        'string:empty': 'Email is a required field',
    }),
    mobile: Joi.number().required().messages({
        'number.base': 'Mobile must be of number type',
        // 'number.min': 'Invalid mobile no.',
        // 'number.max': 'Invalid mobile no.',
        'number.empty': 'Mobile is a required field'
    }),
    // password: Joi.string().required().min(4).max(15).messages({
    //     'string.base': 'Password must be a string',
    //     'string.min': 'Invalid Password',
    //     'string:max': 'Invalid Password',
    //     'string.empty': 'Password is a required field.'
    // })
});

export { signupSchema };

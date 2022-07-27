const Joi = require("joi");

function HotelSchema(req,res,next){
    const schema = Joi.object({
        name:Joi.string().required(),
        type:Joi.string().required(),
        city:Joi.string().required(),
        title:Joi.string().required(),
        address:Joi.string().required(),
        distance:Joi.string().required(),
        photos:Joi.array().items(Joi.string()),
        desc:Joi.string().required(),
        rating:Joi.number().min(0).max(5),
        rooms:Joi.array().items(Joi.string()),
        cheapestPrice:Joi.number().required(),
        featured:Joi.boolean().default(false)
    })
    validateRequest(req,next,schema)
}

function HotelUpdateSchema(req,res,next){
    const schema = Joi.object({
        name:Joi.string(),
        type:Joi.string(),
        city:Joi.string(),
        title:Joi.string(),
        address:Joi.string(),
        distance:Joi.string(),
        photos:Joi.array().items(Joi.string()),
        desc:Joi.string(),
        rating:Joi.number().min(0).max(5),
        rooms:Joi.array().items(Joi.string()),
        cheapestPrice:Joi.number(),
        featured:Joi.boolean().default(false)
    })
    validateRequest(req,next,schema)
}


function UserSchema(req,res,next){
    const schema = Joi.object({
        username:Joi.string().required(),
        email:Joi.string().required().email(),
        password:Joi.string().required(),
        isAdmin:Joi.boolean().default(false),
        updatedat: Joi.date().default(new Date().toISOString())
    })
    validateRequest(req,next,schema)
}



function validateRequest(req,next,schema){
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }
    const{error, value} = schema.validate(req.body, options);
    if (error) {
        console.log(`Validation error: ${error.details.map(x => x.message).join(', ')}`)
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}   

module.exports = {
    HotelSchema,
    HotelUpdateSchema,
    UserSchema
}




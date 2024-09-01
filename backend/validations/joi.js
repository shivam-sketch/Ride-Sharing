import Joi from "joi";
import { isValidObjectId, isValidPassword } from "../utils/helper.js";

const registerUserValidation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().valid("User").required(),
  }),
};

const loginUserValidation = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};




export {
  registerUserValidation,
  loginUserValidation,
  
};

import express from "express";
const router = express.Router();
import * as controller from "../../../controllers/api/v1/passengerController.js";
import { validate } from "../../../middlewares/validate.js";
import {
  loginUserValidation,
  registerUserValidation,
} from "../../../validations/joi.js";

router.post("/", controller.addPassenger);



export default router;



import express from "express";
const router = express.Router();
import * as controller from "../../../controllers/api/v1/rideController.js";
import { validate } from "../../../middlewares/validate.js";
import auth from "../../../middlewares/verifyToken.js";
import { updateBlogValidation } from "../../../validations/joi.js";


router.get("/", controller.getRides);

export default router;

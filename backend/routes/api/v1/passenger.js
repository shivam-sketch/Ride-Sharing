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

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and Authorization
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - role
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: "sstest3@yopmail.com"
 *         password:
 *           type: string
 *           default: "12345"
 *         name:
 *           type: string
 *           default: "sometest"
 *         role:
 *           type: string
 *           default: "User"
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       422:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 default: "sstest1@yopmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 default: "12345"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       422:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

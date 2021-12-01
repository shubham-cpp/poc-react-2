"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admission_1 = __importDefault(require("../model/admission"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     Grades:
 *       type: object
 *       required:
 *         - category
 *         - options
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the admission
 *         category:
 *           type: string
 *           description: The category of school(pre-primary,primary or secondary)
 *         options:
 *           type: object
 *           description: Options includes fees,seats and grade of category
 *       example:
 *         _id: 61a5afcae10876db1c98
 *         category: Pre-primary
 *         options: grade Nursery, fees 50000, seats 50
 */
/**
 * @swagger
 * tags:
 *  name: Grades
 *  description: An api for getting grades
 */
/**
 * @swagger
 * /api/admissions:
 *   get:
 *     summary: Returns an array of all the admissions
 *     tags: [Grades]
 *     responses:
 *       200:
 *         description: The array of all admissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Grades'
 *       500:
 *         description: Internal server error, Unable to fetch all data
 */
router.route('/').get(async (_, res) => {
    try {
        const admissions = await admission_1.default.find({}, { _id: 0 });
        res.status(200).json(admissions);
    }
    catch (err) {
        res.status(500).send('Unable to fetch admission data from server');
    }
});
/**
 * @swagger
 * /api/admissions/{id}:
 *   get:
 *     summary: Get a specific Grade via id
 *     tags: [Grades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of grade
 *     responses:
 *       200:
 *         description: The whole information about specific grade
 *         contens:
 *           application/json:
 *       404:
 *         description: The grade with id wasn't found
 */
router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    try {
        // console.log(id);
        const admission = await admission_1.default.findById(id);
        res.status(200).json(admission);
    }
    catch (err) {
        res.status(404).send('Unable to find this particular admission data ');
    }
});
module.exports = router;

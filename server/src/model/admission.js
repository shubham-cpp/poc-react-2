"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const optionSchema = new mongoose_1.Schema({
    grade: { type: String, required: true },
    fees: Number,
    seats: { type: Number, required: true },
});
const GradeSchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    options: [optionSchema],
});
const AdmissionModel = (0, mongoose_1.model)('admission', GradeSchema);
// module.exports = AdmissionModel;
exports.default = AdmissionModel;

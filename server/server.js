"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const swaggerUI = __importStar(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4001;
const DB_URI = process.env.DB_URI || '';
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Admission API',
            version: '1.0.0',
            description: 'An API to get info about school admission',
        },
        servers: [
            {
                url: 'http://localhost:' + PORT,
            },
        ],
    },
    apis: ['src\\routes\\*.ts'],
};
const specs = (0, swagger_jsdoc_1.default)(options);
// Body parsing Middleware
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/api/admissions', require('./src/routes/admission'));
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs));
// page not found
app.get('/*', (_, res) => {
    res.status(404).send('404 page not found');
});
(0, mongoose_1.connect)(DB_URI).then(() => {
    console.log('Connected to database');
    try {
        app.listen(PORT, () => {
            console.log(`Connected successfully on port ${PORT}`);
        });
    }
    catch (error) {
        console.error(`Error occured: ${error.message}`);
    }
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const APIController_1 = require("../Controller/APIController");
let router = express_1.default.Router();
const initAPI = (app) => {
    router.get('/', module.exports(APIController_1.getAllUsers));
    return app.use('/api/v1/', router);
};
exports.default = initAPI;

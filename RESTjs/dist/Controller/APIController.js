"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    return res.status(200).json({
        message: 'ok'
    });
};
exports.getAllUsers = getAllUsers;
module.exports = {
    getAllUsers: exports.getAllUsers
};

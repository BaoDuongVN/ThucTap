"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathConstant = exports.StatusCodes = void 0;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (exports.StatusCodes = StatusCodes = {}));
;
var MathConstant;
(function (MathConstant) {
    MathConstant[MathConstant["PI"] = 3.14159] = "PI";
})(MathConstant || (exports.MathConstant = MathConstant = {}));

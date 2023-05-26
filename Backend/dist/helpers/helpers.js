"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPortNumber = void 0;
const checkPortNumber = (port) => {
    // Regular expression to check if number is a valid port number
    const regexExp = /^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/gi;
    return regexExp.test(port.toString());
};
exports.checkPortNumber = checkPortNumber;

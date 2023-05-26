"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATA_BASE = exports.PORT_SERVER = exports.NODE_ENV = void 0;
const helpers_1 = require("./helpers/helpers");
const NODE_ENV = (nodeEnv) => {
    const enviroments = ['development', 'production'];
    if (!enviroments.includes(nodeEnv !== null && nodeEnv !== void 0 ? nodeEnv : '')) {
        throw new Error(`Invalid NODE_ENV: "process.env.NODE_ENV". Allow value: "${enviroments.join('.')}" `);
    }
    return nodeEnv;
};
exports.NODE_ENV = NODE_ENV;
const PORT_SERVER = (portServer) => {
    if (!(0, helpers_1.checkPortNumber)(parseInt(portServer))) {
        throw new Error(`"process.env.PORT_SERVER" id required`);
    }
    return parseInt(portServer);
};
exports.PORT_SERVER = PORT_SERVER;
const DATA_BASE = (databaseName) => {
    if (databaseName.trim() !== databaseName) {
        throw new Error(`"process.env.DATABASE_NAME" id required`);
    }
    return databaseName;
};
exports.DATA_BASE = DATA_BASE;

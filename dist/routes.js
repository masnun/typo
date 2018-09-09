"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./types/router");
const controllers_1 = require("./controllers");
exports.routes = [
    {
        url: "*",
        method: router_1.HTTPMethod.ALL,
        handler: controllers_1.catchAll
    }
];

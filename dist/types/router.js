"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Supported methods by koa-router
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod["HEAD"] = "head";
    HTTPMethod["OPTIONS"] = "options";
    HTTPMethod["GET"] = "get";
    HTTPMethod["POST"] = "post";
    HTTPMethod["PUT"] = "put";
    HTTPMethod["PATCH"] = "patch";
    HTTPMethod["DELETE"] = "delete";
    HTTPMethod["ALL"] = "all";
})(HTTPMethod = exports.HTTPMethod || (exports.HTTPMethod = {}));

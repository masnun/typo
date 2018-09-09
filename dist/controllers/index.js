"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function catchAll(ctx) {
    ctx.body = {
        method: ctx.req.method,
        path: ctx.req.url,
        headers: ctx.req.headers
    };
}
exports.catchAll = catchAll;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const routes_1 = require("./routes");
const app = new Koa();
const router = new Router();
routes_1.routes.forEach((route) => {
    router[route.method](route.url, route.handler);
});
app.use(router.routes());
app.listen(3000);
console.log("Server running on port 3000");

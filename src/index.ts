import * as Koa from "koa";
import * as Router from "koa-router";
import { routes } from "./routes";

const app = new Koa();
const router = new Router();

routes.forEach((route) => {
    router[route.method](route.url, route.handler)
})

app.use(router.routes());

app.listen(3000);

console.log("Server running on port 3000");

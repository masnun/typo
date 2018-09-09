import { Context } from "koa";

export function catchAll(ctx: Context) {
  ctx.body = {
    method: ctx.req.method,
    path: ctx.req.url,
    headers: ctx.req.headers
  };
}

import { Context } from "koa";

export async function catchAll(ctx: Context) {
  ctx.body = {
    method: ctx.req.method,
    path: ctx.req.url,
    headers: ctx.req.headers
  };
}

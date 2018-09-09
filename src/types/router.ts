import { IRouterContext } from "koa-router";

// Supported methods by koa-router
export enum HTTPMethod {
    HEAD = "head",
    OPTIONS = "options",
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    DELETE = "delete",
    ALL = "all"
}

export interface Route {
  handler: (ctx: IRouterContext, next: () => Promise<any>) => any,
  method: HTTPMethod;
  url: string;
}
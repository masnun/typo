import { HTTPMethod, Route } from "./types/router";
import { catchAll } from "./controllers";

export const routes: Route[] = [
  {
    url: "*",
    method: HTTPMethod.ALL,
    handler: catchAll
  }
];

## Typo

An example starter pack for Koa + TypeScript. 

#### Getting Started

* Install the deps using `npm install`
* Start the app by running `npm start`

There are two separate processes running behind the scene: 

* `tsc -w` which watches for typescript file changes and compiles them
* `nodemon .` which restarts the server on changes


#### Structure

The TypeScript codes are in `src` directory. All routes are defined in one single `routes.ts` file. The routes are imported and used in `index.ts` which also bootstraps the Koa app and adds related middlewares. Router related `interface` and `enum`s are in `types/router.ts` file. The handlers / controllers are in the `controllers` directory. 

#### Why? 

I am already a Koa fan. I have recently started exploring TypeScript and so far enjoyed it. So I decided to try building a web app with TS and see how it goes. Honestly though, this app didn't allow me to explore a lot of TS features. I only got to use 3-4. But this should work as a starting point for future projects where I get to explore more of TS. 






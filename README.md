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

The TypeScript code compiles to JS in `dist` directory. The root level `index.js` is not really necessary as it just does a `require` of `dist/index.js` but I personally liked having a root level `index.js` so it remained there. 

#### Why? 

I am already a Koa fan. I have recently started exploring TypeScript and so far enjoyed it. So I decided to try building a web app with TS and see how it goes. Honestly though, this app didn't allow me to explore a lot of TS features. I only got to use 3-4. But this should work as a starting point for future projects where I get to explore more of TS. 


#### Why name it `Typo`? 

Early in my programming days, when I used to use text editors mostly, I used to make a lot of typos. I still remember spending hours trying to find a bug I introduced, thanks to a typing mistake somewhere in the code earlier on. 

When I was looking for a name that is related to "type" / "typ", the first thing that came to my mind is "typo". And I didn't have enough time at hand to be creative. Getting started with the coding was more important. 

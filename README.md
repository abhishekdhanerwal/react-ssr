# react-ssr

Server side rendered PWA react app

## Get Started
1. git clone (https://github.com/abhishekdhanerwal/react-ssr.git)
2. npm i
3. npm run prod

## Few npm packages used

Eslint used - it checks the best coding practices
React-Helmet - it add information for SEO
React-Router-Config - it helps in routing our app for server  side rendering


## Webpack
Webpack makes 2 bundles - one for the server and other for the client

## Public Directory
public directory is used as a static directory by our express app

## Atomic Design
Client side code is further divided into pages and components.
Different components used are Button, Graph, and Header.
Button and Header component combines to form Row Component.
Homepage consist of Row component, Button, and Graph

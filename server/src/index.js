//intended to only run on the server
import express from 'express';
import renderer from './helpers/renderer.js';

const app = express();
//server side rendering: generate HTML on the server
  //Node doesn't support ES6 natively yet, so running our app through web
//universal/isomorphic JS: the same code runs on the server and the browser

app.use(express.static('public'));//tells express to treat the public directory as a static or public directory thats available to the outside world.
app.get('/', (req, res) => {//root route
  res.send(renderer());//send component when root route is requested
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
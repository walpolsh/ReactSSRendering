//intended to only run on the server
import express from 'express';
import renderer from './helpers/renderer.js';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {//root route 
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
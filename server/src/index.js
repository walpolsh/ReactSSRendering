const express = require('express'); //common require syntax
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();

app.get('/', (req, res) => {//root route
  const content = renderToString(<Home />);
  //renders component to html by converting it to a raw string and sending it to the browser
  res.send(content);//send component when root route is requested
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
const express = require('express');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.render('home')
  console.log(__dirname)
});

app.get('/about', (request, response, next) => {
  response.render('about')
});

app.get('/inventions', (request, response, next) => {
  response.render('inventions')
});

app.listen(3000, () => console.log('My first app listening on port 3000! '));
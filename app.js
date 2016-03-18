const express = require('express');
const fs = require("fs");
const app = express();

app.use('/style', express.static('src/style'));

app.get('/:filename', (req, res) => res.sendFile(`${__dirname}/src/${req.params.filename}`));

app.get('/images/:image', function(req, res) {
  let imgPromise = Promise.resolve();

  imgPromise
      .then(() => new Promise((resolve, reject) => {
        setTimeout(resolve, (parseInt(req.query.timeout) || 0))
      }))
      .then(() => {res.sendFile(`${__dirname}/src/images/${req.params.image}`)})


});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});
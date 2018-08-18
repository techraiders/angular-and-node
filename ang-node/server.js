const express = require('express');
const app = express();
const path = require('path');

const posts = require('./server/routes/posts');

app.use(express.static(path.join(__dirname, 'dist/ang-node')));
app.use('/posts', posts);

// catch all other routes request and return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ang-node/index.html'));
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
  console.log(`RUNNING ON ${port}`);
});
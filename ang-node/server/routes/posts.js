const express = require('express');
const router = express.Router();
const axios = require('axios');

const PostAPI = `https://jsonplaceholder.typicode.com`;

// GET POST
router.get('/', async (req, res) => {
  const posts = await axios.get(`${PostAPI}/posts`);
  res.status(200).send(posts.data);
});

module.exports = router;
// index.js

import express from 'express';
import {postItmes, getItemById, mediaItems} from './media.js';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(express.json());
app.use(express.static('public'));
app.use('/media', express.static('media'));

app.get('/api/media', (req, res) => {
  res.render('index', {
    title: 'API documentation',
    massage: 'something',
    exampleData: mediaItems,
  });
});
app.get('/api/media/:id', (req, res) => {
  getItemById(req, res);
});

app.post('/api/media', (req, res) => {
  postItmes(req, res);
});
app.put('/api/media', (req, res) => {
  //Todo: implement this endpoint
  res.status(501).json({mssage: 'udner costruction'});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

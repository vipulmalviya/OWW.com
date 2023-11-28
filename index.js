import express, { json } from 'express';
const app = express()
import cors from 'cors';
import * as blogs from './api/blogData.json' assert { type: 'json' };
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(json())

app.get('/', (req, res) => {
  res.send("Blog server is running!")

});

app.get('/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (Array.isArray(blogs.default)) {
    const blog = blogs.default.filter(b => b.id === id);
    res.send(blog);
  } else {
    console.error('Error: "default" property is not an array or does not exist.');
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
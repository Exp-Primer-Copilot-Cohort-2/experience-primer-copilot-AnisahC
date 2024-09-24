//create web server
const express = require('express');
const app = express();
app.use(express.json());

//create comments array
const comments = [
    { id: 1, author: 'John Doe', text: 'This is a comment' },
    { id: 2, author: 'Jane Doe', text: 'This is another comment' }
];

//get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

//get comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

//add new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
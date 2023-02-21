var express = require('express');
const route = express.Router();
var noteController = require('../controller/noteController');

route.get('/note', noteController.getAllNotes);

route.post('/note/save', noteController.saveNote);

route.put('/note/update', noteController.updateNote);

route.post('/note/delete/:noteId', noteController.deleteNote);

module.exports = route;
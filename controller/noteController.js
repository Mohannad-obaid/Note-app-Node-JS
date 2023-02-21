const { json } = require('body-parser');
var generator = require('../util/generator');
var memorystorage = require('../util/memory.storage');
var model = require('../model/note_model');


exports.getAllNotes =  (req, res)=> {

  var value = memorystorage.getValues(memorystorage.store);
   console.log('Value .....'+JSON.stringify(value));
   res.status(200).send('Get all notes.....'+value);
}

exports.saveNote =  (req, res)=> {

    var seqId = generator.generate();

    var createdby = 'Admin';
    var createdDate = new Date();

    var title = req.body.title;
    var content = req.body.content;

    if(!title || !content){
     res.status(500).send({error: 'Title and content are required'});
    }

    var Note =  model.Note;
    var noteObject = new Note(seqId, title, content, createdby, createdDate);
    memorystorage.store.setItem(seqId, JSON.stringify(noteObject));
    return res.status(200).send('Note saved successfully');
   
}

exports.updateNote =  (req, res)=> {

    var noteId = req.body.noteId;
    var createdby = 'Admin';
    var createdDate = new Date();
    var title = req.body.title;
    var content = req.body.content;
    if(!noteId){
      return  res.status(500).send({error: 'Note Id is required'});
    }

    if(!title || !content){
        return res.status(500).send({error: 'Title and content are required'});
    }

    var noteItem = memorystorage.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({error: 'Note not found'});
    }

    var Note =  model.Note;
    var noteObject = new Note(noteId, title, content, createdby, createdDate);
    memorystorage.store.setItem(noteId, JSON.stringify(noteObject));
    return res.status(200).send('Note updated successfully');
   
}

exports.deleteNote =  (req, res)=> {
    var noteId = req.params.noteId;
    if(!noteId){
        return res.status(500).send({error: 'Note Id is required'});
    }

    var noteItem = memorystorage.store.getItem(noteId);
    if(!noteItem){
        return res.status(500).send({error: 'Note not found'});
    }

    memorystorage.store.removeItem(noteId);
    return res.status(200).send('Note deleted successfully');


}
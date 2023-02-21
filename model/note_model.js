exports.Note = class Note{
    constructor(id, title, content, createdby, createdDate){
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdDate = createdDate;
        this.createdby = createdby;
    }
}
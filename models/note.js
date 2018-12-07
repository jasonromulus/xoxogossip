const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const NoteSchema = new Schema({
    title: {type: Schema.Types.String, ref: 'Article'},
    content: String,
    noteTitle: String,
    articleId: {type: String, required: true}
});

NoteSchema.plugin(timestamps);
Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
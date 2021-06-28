/**
 * Notes Class
 */

import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: String,
    note: String,
    date: String,
    importance: Number,
    state: Boolean,
});

const Notes = mongoose.model('Notes', schema);

export default Notes;

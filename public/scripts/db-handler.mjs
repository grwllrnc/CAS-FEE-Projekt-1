/*
 * db-handler.js
 */

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/notes', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

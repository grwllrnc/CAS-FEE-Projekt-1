import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { indexRoutes } from './routes/index-routes.mjs';
import { notesRoutes } from './routes/notes-routes.mjs';
import { noteRoutes } from './routes/note-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('/html/index.html', {root: `${__dirname}/public/`});
});
app.get('/note', (req, res) => {
    res.sendFile('/html/note.html', {root: `${__dirname}/public/`});
});

// app.post('/notes/', noteController.setItem);
// app.get('/notes/:id', noteController.getItem);
// app.delete('/notes/:id', noteController.deleteItem);
app.use('/', indexRoutes);
// app.use('/note', noteRoutes);
app.use('/notes/', notesRoutes);

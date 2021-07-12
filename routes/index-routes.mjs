/* eslint-disable no-underscore-dangle */
/* index-routes.js */
import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('../public/html/index.html', {root: `${__dirname}`});
});
router.get('/note', (req, res) => {
    res.sendFile('../public/html/note.html', {root: `${__dirname}`});
});

// eslint-disable-next-line import/prefer-default-export
export const indexRoutes = router;

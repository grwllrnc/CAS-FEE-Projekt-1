import express from 'express';

const app = express();
const port = 3000;
const router = express.Router;

app.use(express.static('public'));

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${port}`);
});

app.route('/notes')
    .get((req, res) => { res.send('Alle Notizen'); });

app.route('/note:id')
    .get((req, res) => { res.send('Einzel Ansicht Notiz'); });

app.route('/note')
    .post((req, res) => { res.send('Save Notiz'); });
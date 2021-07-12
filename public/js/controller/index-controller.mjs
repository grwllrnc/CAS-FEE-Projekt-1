/* Index Controller */

import { themeSwitch } from '../services/theme-switch-handler.mjs';
import { noteService } from '../services/note-service.mjs';
import { NoteList } from '../note-list.mjs';

const switcher = document.getElementById('theme-switch');
const deadlineBtn = document.getElementById('deadline-btn');
const creationDateBtn = document.getElementById('creation-date-btn');
const importanceBtn = document.getElementById('importance-btn');
const finishedBtn = document.getElementById('finished-btn');
const noteListArea = document.querySelector('.task-list-area');
let noteList;

switcher.addEventListener('change', themeSwitch);

const renderNotes = (notes) => {
        noteListArea.innerHTML = notes;
};

const render = (params = {sort: 'expirationDate', order: 1, done: 'false'}) => {
    noteService.filterSortItems(params).then((data) => {
        noteList = new NoteList(data);
        renderNotes(noteList.allNotes());
        try {
            const btnDone = document.getElementById('btn-done');
            btnDone.addEventListener('click', (event) => {
                event.preventDefault();
                const id = btnDone.dataset.noteId;
                noteService.updateItem(id, {$set: {done: 'true'}}).then(() => render());
            });
        } catch (e) {
            // do nothing;
        }
    });
};

deadlineBtn.addEventListener('click', (event) => {
    event.preventDefault();
    render({sort: 'expirationDate', order: 1, done: 'false'});
});

creationDateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    render({sort: 'creationDate', order: 1, done: 'false'});
});

importanceBtn.addEventListener('click', (event) => {
    event.preventDefault();
    render({sort: 'importance', order: -1, done: 'false'});
});

finishedBtn.addEventListener('click', (event) => {
    event.preventDefault();
    render({sort: 'expirationDate', order: 1, done: 'true'});
});

render();

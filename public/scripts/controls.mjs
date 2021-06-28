/* Note App Form handler */

import { FormHandler } from './form-handler.mjs';
import { themeSwitch } from './theme-switch-handler.mjs';
import { NoteList } from './note-list.mjs';
import { Notes } from './note.mjs';

const form = document.getElementById('form-notes');
const switcher = document.querySelector('#theme-switch');
const noteListArea = document.querySelector('.task-list-area');
const notelist = new NoteList(Notes, noteListArea);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormHandler(form);
    const note = new Notes(formData);
    note.save((err, note) => { if (err) return console.error(err); });
    window.location = '#';
    notelist.render();
});

switcher.addEventListener('change', themeSwitch);

notelist.render();

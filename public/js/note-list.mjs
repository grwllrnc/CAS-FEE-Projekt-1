/* Note list */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */

import { notesTemplate } from './templates/notes-template.mjs';
import { createNewBtn } from './templates/create-new-template.mjs';

class NoteList {
    constructor(notes) {
        this.notes = notes;
    }

    allNotes() {
        if (this.notes.length > 0) {
            return notesTemplate(this.notes);
        }
        return createNewBtn();
    }
}

export { NoteList };

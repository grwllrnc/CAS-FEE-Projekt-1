/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
/* notes-template.mjs */

import { dateHandler } from '../utils/date-handler.mjs';

const notesTemplate = (notes) => `
            <ul>
            ${notes.map((note) => `<li>
                    <div class="note-wrapper">
                        <div class="note-title">
                            <h3>${note.title}</h3>
                        </div>
                        <div class="note-meta">
                            <div class="note-date ${dateHandler.getDateClass(note.expirationDate)}">Fälligkeit: ${dateHandler.renderDate(note.expirationDate)}</div>
                            <div class="note-importance">Priorität: ${note.importance}</div>
                        </div>
                        <div class="note-body">
                            <p>${note.note}</p>
                        </div>
                        <div class="note-controls">
                            <button id="btn-done" data-note-id="${note._id}" class="btn">Erledigt</button>
                            <a role="button" href="/note?_id=${note._id}" data-note-id="${note._id}" id="btn-edit" class="btn">Bearbeiten</a>
                        </div>
                    </div>
                </li>`).join('')}
            </ul>`;

export { notesTemplate };

/* eslint-disable no-underscore-dangle */
/* Note App Form handler */

import { FormHandler } from '../services/form-handler.mjs';
import { themeSwitch } from '../services/theme-switch-handler.mjs';
import { noteService } from '../services/note-service.mjs';
import { formTemplate } from '../templates/form-template.mjs';

const switcher = document.querySelector('#theme-switch');
switcher.addEventListener('change', themeSwitch);

const formOverlay = document.getElementById('form-overlay');

const getQuery = (param) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
};

const getItem = (param) => {
    try {
        const query = getQuery(param);
        return noteService.getItem(query);
    } catch (err) {
        return null;
    }
};

const redirect = (path) => {
    window.location = path;
};

const renderForm = () => {
    if (getQuery('_id')) {
        getItem('_id').then((data) => {
            formOverlay.innerHTML = formTemplate(data);

            const form = document.getElementById('form-notes');

            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormHandler(form);
                noteService.updateItem(formData._id, formData).then(() => redirect('/'));
            });
        });
    } else {
        formOverlay.innerHTML = formTemplate();
        const form = document.getElementById('form-notes');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormHandler(form);
            delete formData._id;
            noteService.setItem(formData).then(() => redirect('/'));
        });
    }
};

renderForm();

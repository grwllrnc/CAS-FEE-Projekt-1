/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
/* form-template.mjs */
import { dateHandler } from '../utils/date-handler.mjs';

const formTemplate = (formData = {}) => `<form id="form-notes" class="form-layout" method="POST">
        <div class="col">
            <label for="title">Name der Notiz</label>
        </div>
        <div class="col">
            <input id="id" type="hidden" name="_id" value="${formData._id ?? ''}" readonly></input>
            <input type="text" id="title" name="title" value="${formData.title ?? ''}" required></input>
        </div>
        <div class="col">
            <label for="creation-date">Erstellungsdatum</label>
        </div>
        <div class="col">
            <input id="creation-date" type="date" name="creationDate" value="${dateHandler.formFormat(formData.creationDate) ?? dateHandler.formFormat(Date.now())}" readonly></input>
        </div>  
        <div class="col">
            <label for="note">Notiz</label>
        </div>
        <div class="col">
            <textarea required name="note" id="note">${formData.note ?? ''}</textarea>
        </div>
        <div class="col">
            <label for="expirationDate">Erledigen bis</label>
        </div>
        <div class="col">
            <input type="date" name="expirationDate" value="${dateHandler.formFormat(formData.expirationDate) ?? ''}"></input>
        </div>
        <div class="col">
            <label for="importance">Priorität</label>
        </div>
        <div class="col">
            <select id="importance" name="importance" class="dropdown">
                <option value="ohne">Bitte wählen</option>
                <option value="5"${(formData.importance === '5') ? ' selected' : '' ?? ''}>5</option>
                <option value="4"${(formData.importance === '4') ? ' selected' : '' ?? ''}>4</option>
                <option value="3"${(formData.importance === '3') ? ' selected' : '' ?? ''}>3</option>
                <option value="2"${(formData.importance === '2') ? ' selected' : '' ?? ''}>2</option>
                <option value="1"${(formData.importance === '1') ? ' selected' : '' ?? ''}>1</option>
            </select>
        </div>
        <div class="col">
            <label for="done">Status</label>
        </div>
        <div class="col">
        <select id="done" name="done" class="dropdown">
            <option value="false"${(formData.done === 'false') ? ' selected' : '' ?? ''}>unerledigt</option>
            <option value="true"${(formData.done === 'true') ? ' selected' : '' ?? ''}>erledigt</option>
        </select>
        </div>
        <div class="col">
            <a class="btn cancel-btn" role="button" href="/">Abbrechen</a>
            <button class="btn submit-btn" type="submit">Speichern</button>
        </div>
    </form>`;

export { formTemplate };

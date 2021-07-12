/* eslint-disable class-methods-use-this */
/* note-service.mjs */
import { httpService } from './http-service.mjs';

class NoteService {
    async getItem(id) {
        return httpService.fetch('GET', `/notes/${id}`, undefined);
    }

    async deleteItem(id) {
        return httpService.fetch('DELETE', `/notes/${id}`, undefined);
    }

    async getItems() {
        return httpService.fetch('GET', '/notes/', undefined);
    }

    async filterSortItems(params) {
        const query = new URLSearchParams(params);
        return httpService.fetch('GET', `/notes/?${query.toString()}`, undefined);
    }

    async updateItem(id, note) {
        return httpService.fetch('PUT', `/notes/${id}`, note);
    }

    async setItem(note) {
        return httpService.fetch('POST', '/notes/', note);
    }
}

// eslint-disable-next-line import/prefer-default-export
export const noteService = new NoteService();

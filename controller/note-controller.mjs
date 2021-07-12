/* note-controller.mjs */
/* eslint-disable quote-props */
/* eslint-disable class-methods-use-this */

import { storageHandler } from '../service/storage-handler.mjs';

class NoteController {
    async getItems(req, res) {
        if (req.query) {
            return res.json(await storageHandler.getItems(req.query));
        }
        return res.json(await storageHandler.getItems());
    }

    async updateItem(req, res) {
        res.json(await storageHandler.updateItem({'_id': req.params.id}, req.body));
    }

    async setItem(req, res) {
        res.json(await storageHandler.setItem(req.body));
    }

    async getItem(req, res) {
        res.json(await storageHandler.getItem(req.params.id));
    }

    async deleteItem(req, res) {
        res.json(await storageHandler.delete(req.params.id));
    }
}

// eslint-disable-next-line import/prefer-default-export
export const noteController = new NoteController();

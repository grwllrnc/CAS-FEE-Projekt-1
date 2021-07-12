/* eslint-disable no-else-return */
/* db.mjs */

import Datastore from 'nedb-promise';

class StorageHandler {
    constructor(db) {
        const options = {filename: './data/notes.db', autoload: true};
        this.db = db || new Datastore(options);
        this.db.loadDatabase();
    }

    async setItem(item) {
        return this.db.insert(item);
    }

    async updateItem(query, update) {
        return this.db.update(query, update);
    }

    async deleteItem(id) {
        await this.db.update({_id: id }, {$set: {state: 'DONE'}});
        return this.get(id);
    }

    async getItem(id) {
        return this.db.findOne({_id: id });
    }

    async getItems(query = null) {
        if (query) {
            const { sort, order, ...filter } = query;
            const queryObj = {};
            queryObj[sort] = Number(order);

            if (queryObj) {
                if (queryObj && filter) {
                    return this.db.cfind(filter).sort(queryObj).exec();
                } else if (queryObj) {
                    return this.db.cfind({}).sort(queryObj).exec();
                }
            }
            return this.db.find(query, (err, items) => items);
        }
        return this.db.find({}, (err, items) => items);
    }
}

// eslint-disable-next-line import/prefer-default-export
export const storageHandler = new StorageHandler();

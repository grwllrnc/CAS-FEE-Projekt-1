/* date-handler.mjs */

class DateHandler {
    constructor() {
        this.date = null;
        this.today = new Date(Date.now());
        this.dateStringOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    }

    static getDate(timestamp) {
        return (timestamp !== undefined || timestamp !== null) ? new Date(timestamp) : 'ohne';
    }

    renderDate(timestamp) {
        if (timestamp) {
            this.date = this.constructor.getDate(timestamp);
        if (typeof this.date === 'object') {
            if (this.date.getDate() === this.today.getDate()) {
                return 'Heute';
            }
            return this.date.toLocaleString('de-DE', this.dateStringOptions);
        }
        return this.date;
        }
        return 'ohne';
    }

    formFormat(timestamp) {
        if (timestamp) {
            this.date = this.constructor.getDate(timestamp);

            if (this.date !== 'ohne') {
                const isoStr = this.date.toISOString();
                const re = /^\d{4}-\d{2}-\d{2}/;
                return isoStr.match(re)[0];
            }
            return this.date;
        }
        return 'ohne';
    }

    getDateClass(timestamp) {
        if (timestamp) {
            this.date = this.constructor.getDate(timestamp);
            if (typeof this.date === 'object') {
                return (this.date.getDate() < this.today.getDate()) ? 'expired' : '';
            }
            return '';
        }
        return '';
    }
}

// eslint-disable-next-line import/prefer-default-export
export const dateHandler = new DateHandler();

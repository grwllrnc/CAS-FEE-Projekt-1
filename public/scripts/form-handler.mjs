/*
 * FormHandler Class
 *
 */

class FormHandler {
    constructor(form) {
        this.formData = new FormData(form);
        this.dataObj = {};
        return this.getFormData();
    }

    getFormData() {
        // eslint-disable-next-line no-return-assign
        this.formData.forEach((value, key) => this.dataObj[key] = value);
        return this.dataObj;
    }
}

// eslint-disable-next-line import/prefer-default-export
export { FormHandler };

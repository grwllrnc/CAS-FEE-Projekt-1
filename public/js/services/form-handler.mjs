/* eslint-disable import/prefer-default-export */
/* FormHandler Class */

class FormHandler {
    constructor(form) {
        this.formData = new FormData(form);
        this.dataObj = {};
        return this.getFormData();
    }

    getFormData() {
        // eslint-disable-next-line no-return-assign
        this.formData.forEach((value, key) => this.dataObj[key] = value);
        this.dataObj.expirationDate = new Date(this.dataObj.expirationDate).getTime();
        this.dataObj.creationDate = new Date(this.dataObj.creationDate).getTime();
        return this.dataObj;
    }
}

export { FormHandler };

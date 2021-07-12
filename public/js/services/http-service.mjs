class HttpService {
    // eslint-disable-next-line class-methods-use-this
    async fetch(method, url, data, headers) {
        return fetch(url, {
            method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: new Headers({ 'content-type': 'application/json', ...(headers || {}) }),
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        }).then((req) => req.json());
    }
}
// eslint-disable-next-line import/prefer-default-export
export const httpService = new HttpService();

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:8000/api';
const responseBody = response => response.body;

let token = null;

const tokenPlugin = (request) => {
    request.set('Authorization', `Bearer ${token}`)
}
export const requests = {
    get: (url) => {
        return superagent
            .get(`${API_ROOT}${url}`)
            .use(tokenPlugin)
            .then(responseBody)
    },
    post: (url, body = null, secured = true) => {
        return superagent.post(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .then(responseBody)
    },
    setToken: (newJwtToken) => token = newJwtToken
}

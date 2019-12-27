import { API } from '../_helpers'

/**
 * 
 * @author Sai Krishnan S<xicoder96@github.com>
 */
export const userService = {
    removeAfterReference,
};

async function removeAfterReference(username,password) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' }
    };
    return await API.post('/users/login', { email: username, password: password }, requestOptions).then(response => {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
    }).catch(function (error) {
        console.log(error);
        return null;
    });
}
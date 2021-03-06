import Axios from 'axios';
import { BaseUrl } from './Configure';

/**
 * Function For all http requests 
 * @param {object} pageNumber - containes nummber for the page whose list you want to see
*/
const httpRequest = (pageNumber) => {
       return Axios.get(`${BaseUrl}${pageNumber}`)
        .then(response => {
            return (response.data);
        })
        .catch(err => {
            return (err);
        });
};

export default httpRequest;
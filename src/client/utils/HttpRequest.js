import Axios from 'axios';
import { BaseUrl } from './Configure';

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
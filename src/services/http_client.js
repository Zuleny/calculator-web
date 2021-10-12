import axios from 'axios';

export class HttpClient{

    static baseUrl = 'http://localhost:4000';
    /**
     * method http post request
     * @param {string} url : url link
     * @param {json} body : body json to send
     */
     static post = async (url, body) => {
        try {
            let response = await axios.post(this.baseUrl + url, body);
            return response.data;
        } catch (error) {
            console.log("Error in method HTTP post: ", error);
            return null;
        }
    }
}
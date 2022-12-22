const axios = require('axios');

const getData = async (url, parametro = "") => {
    try {
        const data = await axios.get(`${url}?q=${parametro}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default getData;
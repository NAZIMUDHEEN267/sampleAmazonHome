import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

async function apiCall() {
    try {
        const fetch = await axios.get(API_URL);
        const data = await fetch.data;
        console.log(data);
        return data;
    } catch (err) {
        return err
    }
}

export default apiCall;
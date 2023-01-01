import axios from "axios";

const API_URL = "https://dummyjson.com/products"

async function apiCall() {
    try {
        const data = await axios.get(API_URL);
        const products = data.data;
        console.log(products);
        return products;
    } catch (error) {
        return error;
    }
}

export default apiCall;
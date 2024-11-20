import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get("/api/v1/product/getProducts");
        return response.data;
    } catch (error) {
        return error;
    }
}
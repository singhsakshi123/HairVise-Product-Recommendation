import axios from "axios";

export const addtoCart = async (data) => {
    try {
        const response = await axios.post("/api/v1/cart/addCart", data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getCart = async () => {
    try {
        const response = await axios.get("/api/v1/cart/getCart");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const deleteCart = async (id) => {
    try {
        const response = await axios.delete(`/api/v1/cart/deleteCart/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const buyCart = async () => {
    try {
        const response = await axios.post("/api/v1/cart/buyCart");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getCartCount = async () => {
    try {
        const response = await axios.get("/api/v1/cart/getCount");
        return response.data;
    } catch (error) {
        return error;
    }
}
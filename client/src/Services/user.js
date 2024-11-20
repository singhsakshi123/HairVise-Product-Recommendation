import axios from "axios";

export const userRegister = async (userData) => {
  try {
    const response = await axios.post("/api/v1/user/register", userData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const userLogin = async (userData) => {
  try {
    const response = await axios.post("/api/v1/user/login", userData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const userProfile = async () => {
  try {
    const response = await axios.get("/api/v1/user/profile");
    return response.data;
  } catch (error) {
    return error;
  }
};

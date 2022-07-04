import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/users'
});
const createUsers = (user) => axiosInstance.post(``,user);

export {createUsers};


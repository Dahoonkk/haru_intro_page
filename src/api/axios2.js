import axios from 'axios';


const instance = axios.create({
    // baseURL: 'https://api.github.com/users/',
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
    // headers: {
    //     Authorization: "toekn token_value"
    // }
})

export default instance;
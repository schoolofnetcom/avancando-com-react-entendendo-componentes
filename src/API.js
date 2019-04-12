import axios from 'axios';

const getTodos = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos')
}

const getWeatherInfo = async (q) => {
    return await axios.get(`https://api.apixu.com/v1/current.json?key=46942834d5634efcbaf123056191204&q=${q}`);
}

export {
    getTodos,
    getWeatherInfo
}
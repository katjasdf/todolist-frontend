// importing axios library that is used for promise based HTTP request
// setting baseURL which is the endpoint where requests get the data
import axios from 'axios'
const baseUrl = 'https://todolist-1000.herokuapp.com/api/todos'

// creating basic CRUD function requests, get, post, put and delete
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data).catch()
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data).catch()
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data).catch()
}

const remove = (id, newObject) => {
    const request = axios.delete(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data).catch()
}

export default { getAll, create, update, remove }
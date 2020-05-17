import axios from 'axios'
const baseUrl = 'http://192.168.10.227:3001/api/todos'

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
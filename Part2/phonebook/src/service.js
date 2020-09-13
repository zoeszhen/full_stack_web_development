import axios from 'axios';
const baseUrl = "http://localhost:3001/persons"

export const get = () =>
    axios
        .get(baseUrl)
        .then(response => response.data)


export const save = (contact) =>
    axios
        .post(baseUrl, contact)
        .then(response => response.data)

export const remove = (id) => axios.delete(`${baseUrl}/${id}`)

export const update = (contact) => {
    console.log("contact", contact)
    return axios.put(`${baseUrl}/${contact.id}`, contact)
        .then((response) => response.data);
};
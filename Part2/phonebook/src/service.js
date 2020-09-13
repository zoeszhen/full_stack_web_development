import axios from 'axios';
const baseUrl = "http://localhost:3001"

export const getContact = ()=>
    axios
    .get(`${baseUrl}/persons`)
    .then(response => response.data)


export const savePerson=(contact)=>
    axios
    .post(`${baseUrl}/persons`, contact)
    .then(response => response.data)

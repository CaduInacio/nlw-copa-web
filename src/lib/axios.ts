import axios from 'axios'

export const api = axios.create(
{
    baseURL: 'http://34.121.90.13:3333'
})
import axios from 'axios';
import { environment } from '../_environment'

export const API = axios.create({
    baseURL: environment.apiUrl,
    responseType: 'json', // default
    headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
});
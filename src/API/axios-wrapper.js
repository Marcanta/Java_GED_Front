import axios from "axios";

/**
 * URL de l'api
 */
const SERVER_URL = process.env.REACT_APP_URLSERVER
 
export default axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-type": "application/json"
  }
});
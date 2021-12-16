import axios from "axios";

export const server = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  params: {
    app_id: process.env.REACT_APP_API_ID
  }
})
import axios from "axios";

export const restClient = axios.create({baseURL: "http://localhost:3001"}); //TODO use env

import axios from "axios";

export const api = axios.create({
  baseURL: "http://187.108.193.148:8085/REST/CYSYPV01"
});
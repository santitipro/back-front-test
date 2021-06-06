/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { BASE_URL } from "../config";

async function handleRequest(config) {
  // Add header auth here
  return config;
}

async function handleSuccess(response) {
  return response.data;
}

async function handleError(error) {
  throw new Error(
    error?.response?.data?.responseException?.exceptionMessage || error
  );
}

const service = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
service.interceptors.request.use(handleRequest);
service.interceptors.response.use(handleSuccess, handleError);

const get = async (url) => {
  return await service.get(url);
};

const post = async (url, body) => {
  return await service.post(url, body);
};

const put = async (url, body) => {
  return await service.put(url, body);
};

const del = async (url) => {
  return await service.delete(url);
};

const encodeGetParams = (p) =>
  Object.entries(p)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&");

export default {
  get,
  put,
  post,
  delete: del,
  encodeGetParams,
};

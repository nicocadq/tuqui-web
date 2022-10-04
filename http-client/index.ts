import axios from "axios";

const APPLICATION_JSON = "application/json";
const CONTENT_TYPE = "Content-Type";

const httpClient = axios.create({
  baseURL: "/api",
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

export { httpClient };

import axios from "axios";

const API_BASE_URL = "https://api.bitpin.org/v1/mkt/markets/"; // Replace with your actual API base URL

const getApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchData = async () => {
  const response = await getApi
    .get()
    .then((response) => response)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

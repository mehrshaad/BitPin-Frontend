import axios from "axios";
import { filterByCurrency2 } from "../Utils/DataPreprocess";
const API_BASE_URL = "https://api.bitpin.org/v1/mkt/markets/"; // Replace with your actual API base URL

const getApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchData = async (currency='IRT') => {
  const response = await getApi
    .get()
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  const filteredData = await filterByCurrency2(response.results, currency);
  return filteredData;
};

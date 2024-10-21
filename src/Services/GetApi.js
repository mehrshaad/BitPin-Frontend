import axios from "axios";
import { filterByCurrency2 } from "../Utils/DataPreprocess";
const API_BASE_URL = "https://api.bitpin.org/v1/mkt/markets/"; // Replace with your actual API base URL

export const fetchData = async (currency = "IRT") => {
  try {
    const response = await axios.get(API_BASE_URL, {
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const filteredData = await filterByCurrency2(
      response.data.results,
      currency
    );
    return filteredData;
  } catch (error) {
    return console.log(error);
  }
};

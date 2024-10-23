import axios from "axios";
import { filterByCurrency2, filterById } from "../Utils/DataPreprocess";

export const fetchMarketData = async (currency = "IRT", id) => {
  const API_URL = "https://api.bitpin.org/v1/mkt/markets/";
  try {
    const response = await axios.get(API_URL, {
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!isNaN(id)) {
      const coinData = await filterById(response.data.results, id);
      return coinData;
    }
    const filteredData = await filterByCurrency2(
      response.data.results,
      currency
    );
    return filteredData;
  } catch (error) {
    return console.log(error);
  }
};

export const fetchCryptoQueueData = async (id) => {
  const API_URL = `https://api.bitpin.org/v1/mth/matches/${id}/`;
  try {
    const response = await axios.get(API_URL, {
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export const fetchCryptoOrdersData = async (id, type) => {
  const API_URL = `https://api.bitpin.org/v2/mth/actives/${id}/?type=${type}`;
  try {
    const response = await axios.get(API_URL, {
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

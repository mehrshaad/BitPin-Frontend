import axios from "axios";
import { filterByCurrency2, filterById } from "../Utils/DataPreprocess";
const BASE_API_URL = "https://api.bitpin.org";
const BASE_HEADER = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const TIMEOUT = 10000;

export const fetchMarketData = async (currency = "IRT", id) => {
  const API_URL = `${BASE_API_URL}/v1/mkt/markets/`;
  try {
    const response = await axios.get(API_URL, {
      timeout: TIMEOUT,
      headers: BASE_HEADER,
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
    alert("اتصال به اینترنت را بررسی کنید");
    console.log(error);
    return [];
  }
};

export const fetchCryptoQueueData = async (id) => {
  const API_URL = `${BASE_API_URL}/v1/mth/matches/${id}/`;
  try {
    const response = await axios.get(API_URL, {
      timeout: TIMEOUT,
      headers: BASE_HEADER,
    });
    return response.data;
  } catch (error) {
    // alert("اتصال به اینترنت را بررسی کنید");
    console.log(error);
    return [];
  }
};

export const fetchCryptoOrdersData = async (id, type) => {
  const API_URL = `${BASE_API_URL}/v2/mth/actives/${id}/?type=${type}`;
  try {
    const response = await axios.get(API_URL, {
      timeout: TIMEOUT,
      headers: BASE_HEADER,
    });
    return response.data;
  } catch (error) {
    // alert("اتصال به اینترنت را بررسی کنید");
    console.log(error);
    return [];
  }
};

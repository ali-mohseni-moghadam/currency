import axios from "axios";

// const APIkey = "8293CE42-CEE7-47E3-8C3C-3EB4A238C0DD";

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en";

const getCoins = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export { getCoins };

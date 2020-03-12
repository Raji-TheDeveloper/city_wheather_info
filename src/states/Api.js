import { BASE_URL, API_KEY } from "../common/Constants";

const cityDetails = city => {
  const url = new URL(BASE_URL);
  url.searchParams.set("q", city);
  url.searchParams.set("appid", API_KEY);
  const response = fetch(url).then(response => response.json());
  return response;
};

export default cityDetails;

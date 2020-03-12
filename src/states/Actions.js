import { GET_CITY_DETAILS } from "./ActionsConstant";

export const getCityDetails = city => ({
  type: "GET_CITY_DETAILS",
  payload: city
});

export const removeState = () => ({
  type: "REMOVE_SELECTION"
});

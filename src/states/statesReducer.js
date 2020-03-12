import { GET_CITY_DETAILS_RESPONSE } from "./ActionsConstant";

const initialState = {
  city_details: {}
};

const stateReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_CITY_DETAILS_RESPONSE:
      return { ...state, city_details: actions.response };
    default:
      return state;
  }
};

export default stateReducer;

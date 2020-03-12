import React, { useState, useEffect } from "react";
import "./States.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCityDetails } from "./Actions";
import { STATES_LIST } from "../common/Constants";
import { isEmpty } from "lodash";
import CardComponent from "../common/Component/CardComponent";

const States = props => {
  const response = useSelector(({ state }) => {
    return !isEmpty(state.city_details) && state.city_details;
  });
  const dispatch = useDispatch();

  const onChecked = event => {
    if (event.target.checked) {
      dispatch(getCityDetails(event.target.value));
    } else {
      dispatch(removeState());
    }
  };

  return (
    <div>
      <CardComponent
        cardTitle="Tamil Nadu"
        list={STATES_LIST}
        onChecked={onChecked}
      />
      {!isEmpty(response) && (
        <CardComponent
          cardTitle="Tamil Nadu"
          list={STATES_LIST}
          onChecked={onChecked}
        />
      )}
    </div>
  );
};

export default States;

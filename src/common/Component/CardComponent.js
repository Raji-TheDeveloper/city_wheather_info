import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CardComponent = ({ cardTitle, list, onChecked }) => {
  return (
    <Card className="card-wrapper">
      <CardContent>
        <h4>{cardTitle}</h4>
        {list.map(obj => {
          return (
            <div>
              <input
                id={obj.id}
                value={obj.name}
                type="checkbox"
                onChange={e => onChecked(e)}
              />
              <label>{obj.name}</label>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CardComponent;

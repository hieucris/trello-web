import React from "react";
import "./Column.scss";
import Card from "components/Card/Card";
import { mapOrder } from "utilities/sorts";

function Column(props) {
  const { column } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  console.log(cards);
  return (
    <div className="column">
      <header>{column.title}</header>
      <ul className="card-list">
        {cards && cards.length > 0
          ? cards.map((card, index) => {
              return <Card key={index} card={card} />;
            })
          : "Loading..."}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
}

export default Column;

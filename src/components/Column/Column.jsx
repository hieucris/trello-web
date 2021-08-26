import React from "react";
import "./Column.scss";
import Card from "components/Card/Card";

function Column(props) {
  return (
    <div className="column">
      <header>Brainstore</header>
      <ul className="card-list">
        <Card />
        {/* <li className="task-item">
          <img
            src="https://image-us.24h.com.vn/upload/1-2019/images/2019-01-11/ronaldo-660-1547196192-632-width660height451.jpg"
            alt="hieucris"
          />
          Title : HieuCris
        </li> */}
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
        <li className="card-item">Add what you'd like to work on below</li>
      </ul>
      <footer>Add another card</footer>
    </div>
  );
}

export default Column;

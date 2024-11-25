import React from "react";
import "../App.css";

const WantedItem = ({ person, removeFromList }) => {
    return (
        <li className="wanted-item">
      <span>
        {person.firstName} {person.lastName}
      </span>
            <button onClick={() => removeFromList(person.id)}>Usuń</button>
        </li>
    );
};

export default WantedItem;

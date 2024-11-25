import React, { useState } from "react";
import WantedItem from "./WantedItem";
import "../App.css";

const WantedList = () => {
    const [wantedList, setWantedList] = useState([]);
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [error, setError] = useState("");

    const validateInput = () => {
        if (newFirstName.trim().length < 3) {
            setError("Imię musi mieć co najmniej 3 znaki!");
            return false;
        }
        if (newLastName.trim().length < 3) {
            setError("Nazwisko musi mieć co najmniej 3 znaki!");
            return false;
        }
        setError("");
        return true;
    };

    const addToList = () => {
        if (!validateInput()) return;
        setWantedList([
            ...wantedList,
            { id: Date.now(), firstName: newFirstName, lastName: newLastName },
        ]);
        setNewFirstName("");
        setNewLastName("");
    };

    const removeFromList = (id) => {
        setWantedList(wantedList.filter((item) => item.id !== id));
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Wprowadź imię"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Wprowadź nazwisko"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                />
                <button onClick={addToList}>Dodaj</button>
            </div>
            {error && <p className="error">{error}</p>}
            <ul>
                {wantedList.map((person) => (
                    <WantedItem
                        key={person.id}
                        person={person}
                        removeFromList={removeFromList}
                    />
                ))}
            </ul>
        </div>
    );
};

export default WantedList;

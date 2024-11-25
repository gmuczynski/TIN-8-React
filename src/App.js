import React, { useState } from "react";
import WantedList from "./components/WantedList";

const App = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>BOLO LIST</h1>
            <WantedList />
        </div>
    );
};

export default App;

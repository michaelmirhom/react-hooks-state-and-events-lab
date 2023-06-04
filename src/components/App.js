import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    }

    return (
        <div className={isDarkMode ? "App dark" : "App light"}>
            <header>
                <h2>Shopster</h2>
                <button onClick={handleDarkModeClick}>
                    {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </header>
            <ShoppingList items={itemData} />
        </div>
    );
}

export default App;


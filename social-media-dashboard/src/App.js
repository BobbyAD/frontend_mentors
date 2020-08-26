import React from "react";

// styles
import "./styles/theme.scss"
import "./styles/app.scss"

// components
import Header from "./components/header/Header";
import Followers from "./components/followers/Followers";

function App() {
    return (
        <div className="App">
            <div className="top-background" />
            <div className="main-container">
                <Header />
                <Followers />
            </div>
        </div>
    );
}

export default App;

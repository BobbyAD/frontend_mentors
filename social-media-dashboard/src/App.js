import React, { useState, useEffect } from "react";

// styles
import "./styles/theme.scss";
import "./styles/app.scss";

// components
import Header from "./components/header/Header";
import Followers from "./components/followers/Followers";
import Overview from "./components/overview/Overview";

function App() {
    const [theme, setTheme] = useState("light");
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        const lsTheme = localStorage.getItem("theme");
        if (lsTheme) {
            setTheme(lsTheme);
        }
    }, []);

    const changeTheme = (theme) => {
        setTheme(theme + " transition");
        setTransition(true);
        localStorage.setItem("theme", theme);
        setTimeout(() => {
            setTheme(theme);
            setTransition(false);
        }, 1000);
    };

    const handleClick = () => {
        if (theme === "light") {
            changeTheme("dark");
        } else {
            changeTheme("light");
        }
        console.log(theme);
    };

    return (
        <div className={"App" + " " + theme}>
            <div className="top-background" />
            <div className="main-container">
                <button
                    className={"button" + theme}
                    onClick={handleClick}
                    disabled={transition}
                >
                    <div className={"circle" + " " + theme} />
                </button>

                <Header />
                <Followers />
                <Overview />
            </div>
        </div>
    );
}

export default App;

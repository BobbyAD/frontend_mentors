import React from "react";
import Toggle from "./Toggle";
import styles from "../../styles/modules/header.module.scss";

const Header = ({ theme, handleClick, transition }) => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <Toggle theme={theme} handleClick={handleClick} transition={transition}/>
        </div>
    );
};

export default Header;

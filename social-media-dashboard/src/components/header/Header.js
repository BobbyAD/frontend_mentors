import React from "react";
import Toggle from "./Toggle";
import styles from "../../styles/modules/header.module.scss";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <Toggle />
        </div>
    );
};

export default Header;

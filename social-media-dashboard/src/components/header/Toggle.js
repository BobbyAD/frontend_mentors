import React from "react";

import styles from "../../styles/modules/toggle.module.scss";

const Toggle = ({ theme, handleClick, transition }) => {
    return (
        <div className={styles.toggleContainer}>
            <p>Dark Mode</p>
            <button
                className={styles.toggleButton}
                onClick={handleClick}
                disabled={transition}
            >
                <div
                    className={
                        styles.circle +
                        " " +
                        (theme === "light" || theme === "light transition" ? styles.light : styles.dark)
                    }
                />
            </button>
        </div>
    );
};

export default Toggle;

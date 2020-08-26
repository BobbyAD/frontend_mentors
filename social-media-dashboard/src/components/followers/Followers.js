import React from "react";
import FollowerCard from "./FollowerCard";
import styles from "../../styles/modules/followers.module.scss";

const Followers = () => {
    const platforms = ["facebook", "twitter", "snapchat", "youtube"];

    return (
        <div className={styles.container}>
            {platforms.map((item) => (
                <FollowerCard platform={item} />
            ))}
        </div>
    );
};

export default Followers;

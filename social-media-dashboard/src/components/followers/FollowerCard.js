import React, { useState, useEffect } from "react";
import styles from "../../styles/modules/followers.module.scss";

const FollowerCard = ({ platform }) => {
    const [followers, setFollowers] = useState(0);
    const [gain, setGain] = useState(0);

    useEffect(() => {
        switch (platform) {
            case "facebook":
                setFollowers(1987);
                setGain(12);
                break
            case "twitter":
                setFollowers(1044);
                setGain(99);
                break;
            case "snapchat":
                setFollowers(11000);
                setGain(1099);
                break;
            case "youtube":
                setFollowers(8239);
                setGain(-144);
                break;
        }
    }, []);

    return (
        <div className={styles.card + " " + styles[platform]}>
            <div className={styles.name}>
                {platform === "snapchat" ? <>@realnathanf</> : <>@nathanf</>}
            </div>
            <div className={styles.followers}>
                <h2>{followers}</h2>
                <p>FOLLOWERS</p>
            </div>
            <div className={styles.gain + " " + (gain > 0 ? styles.positive : styles.negative)}>
                (symbol) {gain} Today
            </div>
        </div>
    );
};

export default FollowerCard;

import React, { useState, useEffect } from "react";
import styles from "../../styles/modules/followers.module.scss";

// images
import fb from "../../images/icon-facebook.svg";
import tw from "../../images/icon-twitter.svg";
import ig from "../../images/icon-instagram.svg";
import yt from "../../images/icon-youtube.svg";
import up from "../../images/icon-up.svg";
import down from "../../images/icon-down.svg";

const FollowerCard = ({ platform }) => {
    const [followers, setFollowers] = useState(0);
    const [gain, setGain] = useState(0);

    useEffect(() => {
        switch (platform) {
            case "facebook":
                setFollowers(1987);
                setGain(12);
                break;
            case "twitter":
                setFollowers(1044);
                setGain(99);
                break;
            case "instagram":
                setFollowers("11k");
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
                <PlatformName platform={platform} />
            </div>
            <div className={styles.followers}>
                <strong>{followers}</strong>
                {platform === "youtube" ? <p>SUBSCRIBERS</p> : <p>FOLLOWERS</p>}
            </div>
            <div
                className={
                    styles.gain +
                    " " +
                    (gain > 0 ? styles.positive : styles.negative)
                }
            >
                {gain > 0 ? <img src={up} /> : <img src={down} />}
                <p>{gain} Today</p>
            </div>
        </div>
    );
};

const PlatformName = ({ platform }) => {
    switch (platform) {
        case "facebook":
            return (
                <>
                    <img src={fb} />
                    <p>@nathanf</p>
                </>
            );
        case "twitter":
            return (
                <>
                    <img src={tw} />
                    <p>@nathanf</p>
                </>
            );
        case "instagram":
            return (
                <>
                    <img src={ig} />
                    <p>@realnathanf</p>
                </>
            );
        case "youtube":
            return (
                <>
                    <img src={yt} />
                    <p>Nathan F.</p>
                </>
            );
    }

    return <></>;
};

export default FollowerCard;

import React from "react";

import fb from "../../images/icon-facebook.svg";
import tw from "../../images/icon-twitter.svg";
import ig from "../../images/icon-instagram.svg";
import yt from "../../images/icon-youtube.svg";
import up from "../../images/icon-up.svg";
import down from "../../images/icon-down.svg";

import styles from "../../styles/modules/overview.module.scss";

const OverviewCard = ({ platform, content }) => {
    return (
        <div className={styles.card}>
            <h4>{content.title}</h4>
            <PlatformImage platform={platform} />
            <strong>{content.amount}</strong>
            <p
                className={
                    (content.change > 0 ? styles.positive : styles.negative)
                }
            >
                {content.change > 0 ? <img src={up} /> : <img src={down} />}
                {content.change}%
            </p>
        </div>
    );
};

const PlatformImage = ({ platform }) => {
    switch (platform) {
        case "facebook":
            return (
                <>
                    <img src={fb} />
                </>
            );
        case "twitter":
            return (
                <>
                    <img src={tw} />
                </>
            );
        case "instagram":
            return (
                <>
                    <img src={ig} />
                </>
            );
        case "youtube":
            return (
                <>
                    <img src={yt} />
                </>
            );
    }

    return <></>;
};

export default OverviewCard;

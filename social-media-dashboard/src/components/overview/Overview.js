import React from "react";
import OverviewCard from "./OverviewCard";

import styles from "../../styles/modules/overview.module.scss";

const Overview = () => {
    const platforms = ["facebook", "instagram", "twitter", "youtube"];
    const content = [
        {
            title: "Page Views",
            amount: "87",
            change: "3",
        },
        {
            title: "Likes",
            amount: "52",
            change: "-2",
        },
        {
            title: "Likes",
            amount: "5462",
            change: "2257",
        },
        {
            title: "Profile Views",
            amount: "52k",
            change: "1375",
        },
        {
            title: "Retweets",
            amount: "117",
            change: "303",
        },
        {
            title: "Likes",
            amount: "507",
            change: "553",
        },
        {
            title: "Likes",
            amount: "107",
            change: "-19",
        },
        {
            title: "Total Views",
            amount: "1407",
            change: "-12",
        },
    ];
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Overview - Today</h2>
            <div className={styles.cardContainer}>
                {content.map((c, i) => {
                    const p = platforms[Math.floor(i/2)]
                    return (
                        <OverviewCard
                            platform={p}
                            content={c}
                            key={p + c.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Overview;

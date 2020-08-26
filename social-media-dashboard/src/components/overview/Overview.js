import React from "react";
import OverviewCard from "./OverviewCard";

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
            change: "2",
        },
        {
            title: "Likes",
            amount: "5462",
            change: "3",
        },
        {
            title: "Profile Views",
            amount: "52K",
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
            change: "19",
        },
        {
            title: "Total Views",
            amount: "1407",
            change: "12",
        },
    ];
    return (
    <div>
        <h2>Overview - Today</h2>
        <OverviewCard />
    </div>
    )
};

export default Overview;

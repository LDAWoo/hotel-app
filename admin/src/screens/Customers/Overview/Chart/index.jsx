import React from "react";
import styles from "./Chart.module.sass";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import useDarkMode from "use-dark-mode";

const data = [
    {
        name: "Sep 12",
        customers: 500,
    },
    {
        name: "Sep 19",
        customers: 1600,
    },
    {
        name: "Sep 26",
        customers: 1100,
    },
    {
        name: "Oct 3",
        customers: 1200,
    },
    {
        name: "Oct 10",
        customers: 1700,
    },
    {
        name: "Oct 17",
        customers: 800,
    },
];

const Chart = () => {
    const darkMode = useDarkMode(false);
    return (
        <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="none"
                        stroke={darkMode.value ? "#272B30" : "#EFEFEF"}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: "500",
                            fill: "#9A9FA5",
                        }}
                        padding={{ left: 10 }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: "500",
                            fill: "#9A9FA5",
                        }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#272B30",
                            borderColor: "rgba(255, 255, 255, 0.12)",
                            borderRadius: 8,
                            boxShadow:
                                "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px 0px 1px #000000",
                        }}
                        labelStyle={{
                            fontSize: 12,
                            fontWeight: "500",
                            color: "#fff",
                        }}
                        itemStyle={{
                            padding: 0,
                            textTransform: "capitalize",
                            fontSize: 12,
                            fontWeight: "600",
                            color: "#fff",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="customers"
                        dot={false}
                        strokeWidth={4}
                        stroke="#2A85FF"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;

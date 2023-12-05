import React from "react";
import styles from "./Chart.module.sass";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import useDarkMode from "use-dark-mode";

const data = [
    {
        name: "22",
        clicks: 57,
    },
    {
        name: "23",
        clicks: 42,
    },
    {
        name: "24",
        clicks: 22,
    },
    {
        name: "25",
        clicks: 38,
    },
    {
        name: "26",
        clicks: 56,
    },
    {
        name: "27",
        clicks: 54,
    },
    {
        name: "28",
        clicks: 76,
    },
];

const Chart = () => {
    const darkMode = useDarkMode(false);
    return (
        <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                    barSize={40}
                    barGap={8}
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
                            fill: "#6F767E",
                        }}
                        padding={{ left: 10 }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fontWeight: "500",
                            fill: "#6F767E",
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
                        cursor={{ fill: "#f3f2f3" }}
                    />
                    <Bar dataKey="clicks" fill="#B5E4CA" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;

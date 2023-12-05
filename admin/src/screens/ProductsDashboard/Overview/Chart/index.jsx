import React from "react";
import styles from "./Chart.module.sass";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const Chart = ({ item }) => {
    return (
        <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={item.data}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Line
                        type="monotone"
                        dataKey="earning"
                        dot={false}
                        strokeWidth={4}
                        stroke={item.chartColor}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;

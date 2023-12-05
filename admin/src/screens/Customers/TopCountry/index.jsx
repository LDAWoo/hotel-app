import styles from "./TopCountry.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";
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
        name: "Vietnam",
        views: 1823,
    },
    {
        name: "USA",
        views: 1674,
    },
    {
        name: "Indonesia",
        views: 1498,
    },
    {
        name: "Hongkong",
        views: 1123,
    },
    {
        name: "Russia",
        views: 758,
    },
    {
        name: "Ukraine",
        views: 432,
    },
];

const TopCountry = ({ className }) => {
    const darkMode = useDarkMode(false);

    return (
        <Card
            className={cn(styles.card, className)}
            title="Top country"
            classTitle="title-purple"
        >
            <div className={styles.chart}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        layout="vertical"
                        margin={{
                            top: 0,
                            right: 0,
                            left: 5,
                            bottom: 0,
                        }}
                        barSize={24}
                        barGap={8}
                    >
                        <CartesianGrid
                            strokeDasharray="none"
                            stroke={darkMode.value ? "#272B30" : "#EFEFEF"}
                            horizontal={false}
                        />
                        <XAxis
                            type="number"
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
                            type="category"
                            dataKey="name"
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
                        <Bar dataKey="views" fill="#B5E4CA" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default TopCountry;

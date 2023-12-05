import React, { useState } from "react";
import styles from "./TrafficChannel.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
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

const intervals = ["Last 7 days", "This month", "All time"];

const legend = [
  {
    title: "Direct",
    color: "#2A85FF",
  },
  {
    title: "Search",
    color: "#FFBC99",
  },
  {
    title: "Market",
    color: "#B1E5FC",
  },
  {
    title: "Social media",
    color: "#CABDFF",
  },
  {
    title: "Other",
    color: "#FFD88D",
  },
];

const data = [
  {
    name: "22",
    direct: 22,
    search: 3,
    market: 4,
    "social media": 8,
    other: 5,
  },
  {
    name: "23",
    direct: 12,
    search: 8,
    market: 5,
    "social media": 2,
    other: 10,
  },
  {
    name: "24",
    direct: 18,
    search: 4,
    market: 9,
    "social media": 4,
    other: 7,
  },
  {
    name: "25",
    direct: 10,
    search: 10,
    market: 5,
    "social media": 5,
    other: 2,
  },
  {
    name: "26",
    direct: 21,
    search: 5,
    market: 4,
    "social media": 8,
    other: 5,
  },
  {
    name: "27",
    direct: 17,
    search: 8,
    market: 4,
    "social media": 8,
    other: 12,
  },
  {
    name: "28",
    direct: 12,
    search: 8,
    market: 5,
    "social media": 2,
    other: 10,
  },
];

const TrafficChannel = ({ className }) => {
  const darkMode = useDarkMode(false);
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Traffic channel"
      classTitle="title-purple"
      head={
        <Dropdown
          className={styles.dropdown}
          classDropdownHead={styles.dropdownHead}
          value={sorting}
          setValue={setSorting}
          options={intervals}
          small
        />
      }
    >
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
            barSize={46}
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
              tick={{ fontSize: 12, fontWeight: "500", fill: "#6F767E" }}
              padding={{ left: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontWeight: "500", fill: "#6F767E" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#272B30",
                borderColor: "rgba(255, 255, 255, 0.12)",
                borderRadius: 8,
                boxShadow:
                  "0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px 0px 1px #000000",
              }}
              labelStyle={{ fontSize: 12, fontWeight: "500", color: "#fff" }}
              itemStyle={{
                padding: 0,
                textTransform: "capitalize",
                fontSize: 12,
                fontWeight: "600",
                color: "#fff",
              }}
              cursor={{ fill: "#f3f2f3" }}
            />
            <Bar dataKey="direct" stackId="a" fill="#2A85FF" />
            <Bar dataKey="search" stackId="a" fill="#FFBC99" />
            <Bar dataKey="market" stackId="a" fill="#B1E5FC" />
            <Bar dataKey="social media" stackId="a" fill="#CABDFF" />
            <Bar dataKey="other" stackId="a" fill="#FFD88D" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.legend}>
        {legend.map((x, index) => (
          <div className={styles.indicator} key={index}>
            <div
              className={styles.color}
              style={{ backgroundColor: x.color }}
            ></div>
            {x.title}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TrafficChannel;

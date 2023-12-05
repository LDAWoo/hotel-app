import React, { useState } from "react";
import styles from "./ProductViews.module.sass";
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

const data = [
  {
    name: "22",
    views: 27,
  },
  {
    name: "23",
    views: 22,
  },
  {
    name: "24",
    views: 32,
  },
  {
    name: "25",
    views: 18,
  },
  {
    name: "26",
    views: 27,
  },
  {
    name: "27",
    views: 15,
  },
  {
    name: "28",
    views: 21,
  },
];

const ProductViews = ({ className }) => {
  const darkMode = useDarkMode(false);
  const [sorting, setSorting] = useState(intervals[0]);

  return (
    <Card
      className={cn(styles.card, className)}
      title="Product views"
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
            barSize={32}
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
            <Bar dataKey="views" fill="#B5E4CA" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProductViews;

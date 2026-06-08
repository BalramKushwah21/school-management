
"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Nur", students: 120 },
  { name: "KG", students: 210 },
  { name: "1-5", students: 280 },
  { name: "6-8", students: 320 },
  { name: "9-10", students: 410 },
  { name: "11-12", students: 380 },
];

export default function StudentChart() {
  return (
    <>
      <h3>Students by Class</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="students"
            fill="#6366f1"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}


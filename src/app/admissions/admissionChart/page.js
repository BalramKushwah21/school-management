"use client";


import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const growthData = [
  { year: "2022", students: 150 },
  { year: "2023", students: 175 },
  { year: "2024", students: 210 },
  { year: "2025", students: 235 },
  { year: "2026", students: 256 },
];

const classData = [
  { name: "1st", value: 35 },
  { name: "2nd", value: 32 },
  { name: "3rd", value: 30 },
  { name: "4th", value: 28 },
  { name: "5th", value: 25 },
  { name: "6th", value: 22 },
  { name: "7th", value: 42 },
  { name: "8th", value: 42 },
];

const studentTypeData = [
  { name: "Old Students", value: 186 },
  { name: "New Students", value: 70 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#A4DE6C",
  "#D0ED57",
];

export default function AdmissionCharts() {
  return (
    <section style={{ padding: "50px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Student Analytics
      </h2>

      {/* Growth Graph */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "40px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Admission Growth (Last 5 Years)</h3>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={growthData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Two Pie Charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "30px",
        }}
      >
        {/* Class Wise */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Class Wise Students</h3>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={classData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {classData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Old vs New */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Old vs New Students</h3>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={studentTypeData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                <Cell fill="#2563eb" />
                <Cell fill="#10b981" />
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
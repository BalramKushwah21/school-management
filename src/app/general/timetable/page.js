
"use client";

import { useState } from "react";
import styles from "./timetable.module.css";

const lectureData = [
  {
    subject: "English",
    teacher: "Mr. Sharma",
    room: "101",
    color: "#dbeafe",
  },
  {
    subject: "Mathematics",
    teacher: "Mr. Verma",
    room: "102",
    color: "#dcfce7",
  },
  {
    subject: "Science",
    teacher: "Mrs. Singh",
    room: "103",
    color: "#fee2e2",
  },
  {
    subject: "Hindi",
    teacher: "Mr. Gupta",
    room: "104",
    color: "#fef3c7",
  },
  {
    subject: "SST",
    teacher: "Mrs. Patel",
    room: "105",
    color: "#ede9fe",
  },
  {
    subject: "Computer",
    teacher: "Mr. Khan",
    room: "Lab 1",
    color: "#cffafe",
  },
  {
    subject: "Art",
    teacher: "Mrs. Roy",
    room: "Art",
    color: "#fce7f3",
  },
  {
    subject: "Sports",
    teacher: "Mr. Yadav",
    room: "Ground",
    color: "#e0f2fe",
  },
];
export default function TimetablePage() {
    const [selectedClass, setSelectedClass] =
      useState("Class 1");
  
    const primaryClasses = [
      "Class 1",
      "Class 2",
      "Class 3",
      "Class 4",
      "Class 5",
    ];
  
    const isPrimary =
      primaryClasses.includes(selectedClass);
  
    const periods = isPrimary ? 6 : 8;
  
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const primaryTimings = [
        "08:00-08:35",
        "08:35-09:10",
        "09:10-09:45",
        "09:45-10:05",
        "10:05-10:40",
        "10:40-11:15",
        "11:15-12:00",
      ];
    
      const seniorTimings = [
        "10:00-10:40",
        "10:40-11:20",
        "11:20-12:00",
        "12:00-12:40",
        "12:40-01:20",
        "01:20-02:00",
        "02:00-02:40",
        "02:40-03:20",
        "03:20-04:00",
      ];
    
      const timings = isPrimary
        ? primaryTimings
        : seniorTimings;

        return (
            <div className={styles.container}>
            
            <div className={styles.header}>
            <h1>Timetable Management</h1>
            
            <div className={styles.buttons}>
            <button>Add Lecture</button>
            <button>Auto Generate</button>
            <button>Export PDF</button>
            </div>
            </div>
            
            <div className={styles.stats}>
            
            <div className={styles.card}>
            <h3>Total Lectures</h3>
            <p>{periods * 6}</p>
            </div>
            
            <div className={styles.card}>
            <h3>Teachers</h3>
            <p>24</p>
            </div>
            
            <div className={styles.card}>
            <h3>Rooms</h3>
            <p>18</p>
            </div>
            
            <div className={styles.card}>
            <h3>Conflicts</h3>
            <p>0</p>
            </div>
            
            </div>
            <div className={styles.filters}>

<select
value={selectedClass}
onChange={(e)=>
setSelectedClass(e.target.value)
}
>
{[...Array(12)].map((_,i)=>(
<option key={i}>
Class {i+1}
</option>
))}
</select>

<select>
<option>Section A</option>
<option>Section B</option>
<option>Section C</option>
<option>Section D</option>
<option>Section E</option>
</select>

<select>
<option>
{isPrimary
? "Morning Shift"
: "Day Shift"}
</option>
</select>
</div>
<div className={styles.tableContainer}>
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Day</th>

        {isPrimary ? (
          <>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th className={styles.lunchHeader}>
              Lunch
              <br />
              09:45 - 10:05
            </th>
            <th>P4</th>
            <th>P5</th>
            <th>P6</th>
          </>
        ) : (
          <>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>P4</th>

            <th className={styles.lunchHeader}>
              Lunch
              <br />
              12:40 - 01:20
            </th>

            <th>P5</th>
            <th>P6</th>
            <th>P7</th>
            <th>P8</th>
          </>
        )}
      </tr>

      <tr className={styles.timeRow}>
        <th></th>

        {timings.map((time, index) => (
          <th key={index}>{time}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {days.map((day, dayIndex) => {
        const row = [];

        for (let i = 0; i < periods; i++) {
          const lecture =
            lectureData[
              (dayIndex + i) %
                lectureData.length
            ];

          row.push(
            <td key={`${day}-${i}`}>
              <div
                className={styles.subjectCard}
                style={{
                  background:
                    lecture.color,
                }}
              >
                <div
                  className={
                    styles.subject
                  }
                >
                  {lecture.subject}
                </div>

                <div
                  className={
                    styles.teacher
                  }
                >
                  👨‍🏫 {lecture.teacher}
                </div>

                <div
                  className={
                    styles.room
                  }
                >
                  🏫 Room {lecture.room}
                </div>

                <div
                  className={
                    styles.actionsBox
                  }
                >
                  <button>
                    ✏️
                  </button>

                  <button>
                    🗑️
                  </button>
                </div>
              </div>
            </td>
          );
        }

        if (isPrimary) {
          row.splice(
            3,
            0,
            <td
              key={`${day}-lunch`}
              className={
                styles.lunchCell
              }
            >
              🍴
              <br />
              Lunch
              <br />
              Break
            </td>
          );
        } else {
          row.splice(
            4,
            0,
            <td
              key={`${day}-lunch`}
              className={
                styles.lunchCell
              }
            >
              🍴
              <br />
              Lunch
              <br />
              Break
            </td>
          );
        }

        return (
          <tr key={day}>
            <td
              className={
                styles.dayCell
              }
            >
              {day}
            </td>

            {row}
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

<div className={styles.legend}>
  <div>
    <span
      className={styles.legendDot}
    ></span>
    Subject Lecture
  </div>

  <div>
    <span
      className={
        styles.legendLunch
      }
    ></span>
    Lunch Break
  </div>
</div>

</div>
);
}
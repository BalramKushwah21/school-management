"use client"

import React from "react";
import styles from "./dashboard.module.css";
import StudentChart from "./charts/studentChart/page.js";
import AttendanceChart from "./charts/attendanceChart/page.js";
import GenderChart from "./charts/genderChart/page.js";

export default function dashboard(){

    return(
        <div className={styles.container}>
            {/* header */}
            <div className={styles.header}>
                <div>
                    <h1>Welcome, Mr. Jay Kumar 👋</h1>
                    <p>Here's what's happening in your school today.</p>
                </div>

                <button className={styles.datebtn}>
                    📅 07 June 2026
                </button>
            </div>

            {/* cards statistics */}

            <div className={styles.cardGrid}>
                <div className={styles.card}>
                    <span>👨‍🏫</span>
                    <h3>Total Students</h3>
                    <h2>120</h2>
                </div>

                <div className={styles.card}>
                    <span>👨‍🏫</span>
                    <h3>Total Teachers</h3>
                    <h2>120</h2>
                </div>

                <div className={styles.card}> 
                    <span>📋</span> 
                    <h3>Attendance</h3> 
                    <h2>94%</h2>   
                </div>

                <div className={styles.card}> 
                    <span>💰</span> 
                    <h3>Fee Collection</h3> 
                    <h2>₹1.5L</h2>   
                </div>

                <div className={styles.card}> 
                    <span>⚠️</span> 
                    <h3>Pending Fees</h3> 
                    <h2>₹20500</h2>   
                </div>

                <div className={styles.card}> 
                    <span>📝</span> 
                    <h3>Admissions</h3> 
                    <h2>180</h2>   
                </div>
            </div>


            {/* Charts section  */}
            <div className={styles.chartGrid}>

                <div className={styles.chartBox}>
                    {/* <h3>Students by Class</h3> */}
                    <StudentChart />
                </div>

                <div className={styles.chartBox}>
                    {/* <h3>Gender Distribution</h3> */}
                    <AttendanceChart />
                </div>

                <div className={styles.chartBox}>
                    {/* <h3>Attendance Trend</h3> */}
                    <GenderChart />
                </div>

            </div>

        {/* button section */}

            <div className={styles.buttonGrid}>
                <div className={styles.tableBox}>
                    <h3>Top Performing Students</h3>

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.key}>Name</th>
                                <th className={styles.key}>Class</th>
                                <th className={styles.key}>Percentage</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className={styles.value}>Ramdas</td>
                                <td className={styles.value}>12th A</td>
                                <td className={styles.value}>97%</td>
                            </tr>

                            <tr>
                                <td className={styles.value}>Ramdas</td>
                                <td className={styles.value}>12th B</td>
                                <td className={styles.value}>97%</td>
                            </tr>

                            <tr>
                                <td className={styles.value}>Ramdas</td>
                                <td className={styles.value}>12th B</td>
                                <td className={styles.value}>97%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.noticeBoard}>
                    <h3>Upcoming Event</h3>

                    <ul className={styles.notice}>
                        <li>🎉 Annual Function</li>
                        <li>👨‍👩‍👧 Parent Teacher Meeting</li> 
                        <li>🏖 Summer Vacation</li> 
                        <li>🏆 Sports Competition</li>
                    </ul>
                </div>



            </div>


        </div>

    );
}
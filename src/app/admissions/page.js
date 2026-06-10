"use client";

import React from "react";
import styles from "./admissions.module.css";
import AdmissionCharts from "./admissionChart/page";
import Image from "next/image";

export default function admissionPage() {
    

 
  const star = "*";

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.h1}>New Admission</h1>

          <p className={styles.para}>
            Empowering students through innovation, critical thinking,
            creativity, and world-class education.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>New Admission</button>

            <button className={styles.secondaryBtn}>Admission History</button>
          </div>
        </div>

        {/* <div className={styles.heroImage}> */}
          <Image
          className={styles.img}
            src="https://technocratsgroup.edu.in/wp-content/uploads/2024/02/TIT-CSE.jpg"
            alt="New Admission"
            width={800}
            height={800}
          />
        {/* </div> */}
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h2>256</h2>
          <p>Total students</p>
        </div>

        <div className={styles.statCard}>
          <h2>70</h2>
          <p>New Admission</p>
        </div>

        <div className={styles.statCard}>
          <h2>186</h2>
          <p>Old Student</p>
        </div>

        <div className={styles.statCard}>
          <h2>25</h2>
          <p>Intrested</p>
        </div>
      </section>

      {/* //Charts */}
      <AdmissionCharts />
     
      {/* // form */}
      <section className={styles.formcontainer}>
        <div className={styles.formcard}>
          <h2 className={styles.title}>📋 Admission Form</h2>

          <form className={styles.form}>
            <label className={styles.lebel}>Student Name {star}</label>
            <input
              type="text"
              placeholder="Student full name"
              className={styles.input}
              required
            />

            <label className={styles.lebel}>Parents/Guardian Name</label>
            <input
              type="text"
              placeholder="Parents/Guardian Name *"
              className={styles.input}
            />

            <label className={styles.lebel}>Mother Name</label>
            <input
              type="text"
              placeholder="Mother Name "
              className={styles.input}
            />

            <label className={styles.lebel}>Village/City/Town</label>
            <input
              type="text"
              placeholder="Village/city/Town"
              className={styles.input}
            />

            <label className={styles.lebel}>Admission Date</label>
            <input type="date" className={styles.input} />

            <label className={styles.lebel}>Division</label>
            <select className={styles.input}>
              <option>Class Applying For</option>
              <option>Nursery</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7ht</option>
              <option>8th</option>
            </select>

            <label className={styles.lebel}>Contact</label>
            <input
              type="tel"
              placeholder="Contact Number"
              className={styles.input}
            />

            <label className={styles.lebel}>Student Email Id</label>
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
            />

            <label className={styles.lebel}>Student Address</label>
            <input
              type="text"
              placeholder="Student Address"
              className={styles.input}
            />

            <div className={styles.uploadBox}>
              <label>Upload Documents</label>
              <input type="file" multiple />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* //footer */}

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>JAWAHAR NAVODAYA VIDYALAYA </h3>
            <p>
              Providing quality equcation and shaping bright futures for
              students.
            </p>
          </div>
         
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Teachers</a>
              </li>
              <li>
                <a href="/">Students</a>
              </li>
              <li>
                <a href="/">Examination</a>
              </li>
              <li>
                <a href="/">Department</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Contact Us</h3>
            <p>📍 Bhopal, Madhya Pradesh</p>
            <p>📞 +91 9876543210</p>
            <p>
              ✉️<a href="https://navodaya.gov.in"> About</a>{" "}
            </p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          © 2026 ABC School. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

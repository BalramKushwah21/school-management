"use client";

import React, { useState } from "react";
import styles from "./admissions.module.css";
import AdmissionCharts from "./admissionChart/page";
import Image from "next/image";


export default function admissionPage() {
    const [student, setStudent] = useState({
        name: " ",
        parent: "",
        mother: "",
        village_city: "",
        admissionDate: "",
        division: "",
        contactNo: "",
        email: "",
        address: "",
        document:"",
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/students/add_details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        });
        if (!response.ok) {
            const error = await response.json();
            alert(error.error);
            return;
        }

        const data = await response.json();

        console.log(data);

        alert("Student Admission Successfully!");

        setStudent({
            name: "",
            parent: "",
            mother: "",
            village_city: "",
            admissionDate: "",
            division: "",
            contactNo: "",
            email: "",
            address: "",
            document: "",
        });
    };

 
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

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.lebel}>Student Name {star}</label>
            <input
                          type="text"
                          name="name"
                          value={student.name}
                          onChange={handleChange}
              placeholder="Student full name"
              className={styles.input}
              required
            />

            <label className={styles.lebel}>Parents/Guardian Name</label>
            <input
                          type="text"
                          name="parent"
                          value={student.parent}
                          onChange={handleChange}
              placeholder="Parents/Guardian Name *"
              className={styles.input}
            />

            <label className={styles.lebel}>Mother Name</label>
            <input
                          type="text"
                          name="mother"
                          value={student.mother}
                          onChange={handleChange}
              placeholder="Mother Name "
              className={styles.input}
            />

            <label className={styles.lebel}>Village/City/Town</label>
            <input
                          type="text"
                          name="village_city"
                          value={student.village_city}
                          onChange={handleChange}
              placeholder="Village/city/Town"
              className={styles.input}
            />

            <label className={styles.lebel}>Admission Date</label>
                      <input type="date"
                          name="admissionDate"
                          value={student.admissionDate}
                          onChange={handleChange}
                          className={styles.input} />

            <label className={styles.lebel}>Division</label>
                      <select name="division"
                          value={student.division}
                          onChange={handleChange}
                          className={styles.input}>
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
                          name="contactNo"
                          value={student.contactNo}
                          onChange={handleChange}
              placeholder="Contact Number"
              className={styles.input}
            />

            <label className={styles.lebel}>Student Email Id</label>
            <input
                          type="email"
                          name="email"
                          value={student.email}
                          onChange={handleChange}
              placeholder="Email address"
              className={styles.input}
            />

            <label className={styles.lebel}>Student Address</label>
            <input
                          type="text"
                          name="address"
                          value={student.address}
                          onChange={handleChange}
              placeholder="Student Address"
              className={styles.input}
            />

            <div className={styles.uploadBox}>
              <label>Upload Documents</label>
                          <input
                              name="document"
                              type="file"
                              multiple
                              
                            //   onChange={(e) =>
                            //       setStudent({
                            //           ...student,
                            //           document: e.target.files,
                            //       })
                            //   }
                               />
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

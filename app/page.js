"use client";

import React from "react";
import styles from "./page.module.css";

const HomePage = () => {
  const stats = [
    { number: "2500+", label: "Students" },
    { number: "120+", label: "Teachers" },
    { number: "15+", label: "Years of Excellence" },
    { number: "98%", label: "Results" },
  ];

  const events = [
    {
      title: "Annual Science Exhibition",
      date: "25 June 2026",
    },
    {
      title: "Parent Teacher Meeting",
      date: "30 June 2026",
    },
    {
      title: "Inter School Sports Championship",
      date: "5 July 2026",
    },
  ];

  const testimonials = [
    {
      name: "Ramesh Sharma",
      role: "Parent",
      text: "An excellent school with outstanding teachers and modern education.",
    },
    {
      name: "Priya Verma",
      role: "Parent",
      text: "The discipline, academics, and environment are truly exceptional.",
    },
    {
      name: "Amit Singh",
      role: "Parent",
      text: "Best school for holistic development of children.",
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.schoolTag}>CHETNA GOOD LIFE SCHOOL</p>

          <h1 className={styles.heroTitle}>
            Shaping Bright Minds For A Brilliant Future
          </h1>

          <p className={styles.heroSubtitle}>
            Excellence in academics, discipline, innovation, and character
            building.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>Apply Now</button>
            <button className={styles.secondaryBtn}>Contact Us</button>
            <button className={styles.secondaryBtn}>Download Brochure</button>
          </div>
        </div>
      </section>

      {/* PRINCIPAL + ANNOUNCEMENTS */}
      <section className={styles.infoSection}>
        <div className={styles.card}>
          <h2>Principal’s Message</h2>
          <p>
            Welcome to Chetna Good Life School, where education goes beyond
            textbooks. We nurture confidence, creativity, discipline, and
            leadership in every child.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Announcements</h2>
          <ul>
            <li>Admissions Open for Session 2026–27</li>
            <li>Scholarship Test Registration Started</li>
            <li>Summer Camp Enrollment Now Open</li>
          </ul>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <h2 className={styles.sectionTitle}>Our Achievements</h2>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className={styles.eventsSection}>
        <h2 className={styles.sectionTitle}>Upcoming Events</h2>

        <div className={styles.eventsGrid}>
          {events.map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Photo Gallery</h2>

        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}></div>
          <div className={styles.galleryItem}></div>
          <div className={styles.galleryItem}></div>
          <div className={styles.galleryItem}></div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialSection}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>

        <div className={styles.testimonialGrid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p>"{item.text}"</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Ready To Join Our School?</h2>
        <p>Admissions are now open for the upcoming academic session.</p>

        <div className={styles.heroButtons}>
          <button className={styles.primaryBtn}>Apply Now</button>
          <button className={styles.secondaryBtn}>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
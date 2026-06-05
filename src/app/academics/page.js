"use client";

import styles from "./academics.module.css";

export default function Academics() {
  const academicSections = [
    {
      icon: "📚",
      title: "Curriculum",
      desc: "Comprehensive curriculum aligned with modern educational standards.",
    },
    {
      icon: "🎓",
      title: "Classes & Programs",
      desc: "Primary, Middle, Secondary and Senior Secondary education.",
    },
    {
      icon: "👨‍🏫",
      title: "Faculty & Staff",
      desc: "Experienced teachers dedicated to academic excellence.",
    },
    {
      icon: "🧪",
      title: "Laboratories",
      desc: "Advanced Science, Physics, Chemistry and Computer labs.",
    },
    {
      icon: "📖",
      title: "Library",
      desc: "Thousands of books, journals and digital resources.",
    },
    {
      icon: "🏆",
      title: "Student Achievements",
      desc: "Celebrating excellence in academics, sports and innovation.",
    },
    {
      icon: "📅",
      title: "Academic Calendar",
      desc: "Events, examinations and important academic dates.",
    },
    {
      icon: "🎨",
      title: "Co-Curricular Activities",
      desc: "Sports, arts, music, dance and student clubs.",
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Academic Excellence</h1>

          <p>
            Empowering students through innovation, critical thinking,
            creativity, and world-class education.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>
              Explore Academics
            </button>

            <button className={styles.secondaryBtn}>
              View Curriculum
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="https://technocratsgroup.edu.in/wp-content/uploads/2024/02/TIT-CSE.jpg"
            alt="Academic"
          />
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h2>98%</h2>
          <p>Board Results</p>
        </div>

        <div className={styles.statCard}>
          <h2>50+</h2>
          <p>Expert Teachers</p>
        </div>

        <div className={styles.statCard}>
          <h2>10+</h2>
          <p>Laboratories</p>
        </div>

        <div className={styles.statCard}>
          <h2>5000+</h2>
          <p>Library Books</p>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>
          Academic Overview
        </h2>

        <div className={styles.grid}>
          {academicSections.map((item, index) => (
            <div className={styles.card} key={index}>
              <span>{item.icon}</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button>View Details</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.highlight}>
        <div>
          <h2>Why Choose Our Academic Program?</h2>

          <p>
            We focus on holistic student development through
            modern teaching methods, smart classrooms,
            practical learning, and continuous assessment.
          </p>
        </div>

        <ul>
          <li>1. Smart Classrooms</li>
          <li>2. Experienced Faculty</li>
          <li>3. Modern Laboratories</li>
          <li>4. Digital Library</li>
          <li>5. Career Guidance</li>
        </ul>
      </section>
    </div>
  );
}
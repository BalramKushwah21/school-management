"use client";

import styles from "./about.module.css";
import { schoolConfig } from "@/config/schoolConfig";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [countStudents, setCountStudents] = useState(0);
  const [countAwards, setCountAwards] = useState(0);
  const [countFaculty, setCountFaculty] = useState(0);

  useEffect(() => {
    animateCounter(setCountStudents, 3000, 20);
    animateCounter(setCountAwards, 150, 30);
    animateCounter(setCountFaculty, 200, 25);
  }, []);

  const animateCounter = (setter, target, speed) => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.ceil(target / 100);

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setter(current);
    }, speed);
  };

  const values = [
    "Integrity",
    "Discipline",
    "Innovation",
    "Respect",
    "Leadership",
    "Compassion",
    "Responsibility",
    "Excellence",
  ];

  const infrastructure = [
    "Smart Classrooms",
    "Science Laboratories",
    "Computer Labs",
    "Library",
    "Sports Complex",
    "Auditorium",
    "Transport Facility",
    "Medical Room",
    "CCTV Security",
    "Playground",
    "STEM Lab",
    "Cafeteria",
  ];

  return (
    <div className={styles.aboutPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>Welcome to</p>
          <h1>{schoolConfig.school.name}</h1>
          <p className={styles.tagline}>{schoolConfig.tagline}</p>

          <div className={styles.heroButtons}>
            <button>Apply Now</button>
            <button className={styles.secondaryBtn}>Virtual Tour</button>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Our History</h2>
          <p>
            Since {schoolConfig.establishedYear}, we have been shaping young
            minds with excellence, discipline, and innovation.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineCard}>
            <h3>Foundation</h3>
            <p>
              Established with a vision to provide quality education rooted in
              strong values.
            </p>
          </div>

          <div className={styles.timelineCard}>
            <h3>Growth</h3>
            <p>
              Expanded infrastructure, introduced modern teaching methods, and
              built a strong academic reputation.
            </p>
          </div>

          <div className={styles.timelineCard}>
            <h3>Transformation</h3>
            <p>
              Evolved into a future-ready institution focused on innovation and
              holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={styles.sectionDark}>
        <div className={styles.vmGrid}>
          <div className={styles.card}>
            <h2>Our Vision</h2>
            <p>
              To create globally responsible, confident, and compassionate
              learners who inspire positive change.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Our Mission</h2>
            <ul>
              <li>Deliver academic excellence</li>
              <li>Promote innovation and creativity</li>
              <li>Develop leadership qualities</li>
              <li>Encourage moral responsibility</li>
              <li>Support holistic growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className={styles.section}>
        <div className={styles.messageCard}>
          <div className={styles.avatar}></div>
          <div>
            <h2>Founder’s Message</h2>
            <h4>{schoolConfig.founderName}</h4>
            <p>{schoolConfig.founderMessage}</p>
          </div>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className={styles.section}>
        <div className={styles.messageCardReverse}>
          <div>
            <h2>Principal’s Message</h2>
            <h4>{schoolConfig.principalName}</h4>
            <p>{schoolConfig.principalMessage}</p>
          </div>
          <div className={styles.avatar}></div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionHeader}>
          <h2>School Philosophy</h2>
          <p>
            We believe education should nurture intellect, character, creativity,
            and compassion.
          </p>
        </div>

        <div className={styles.philosophyGrid}>
          <div className={styles.card}>Student-Centric Learning</div>
          <div className={styles.card}>Learning by Doing</div>
          <div className={styles.card}>Discipline with Compassion</div>
          <div className={styles.card}>Academic + Moral Excellence</div>
        </div>
      </section>
            {/* CORE VALUES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Core Values</h2>
          <p>The principles that guide our students and institution.</p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <span className={styles.valueNumber}>
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3>{value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionHeader}>
          <h2>Achievements</h2>
          <p>Milestones that reflect our commitment to excellence.</p>
        </div>

        <div className={styles.achievementGrid}>
          <div className={styles.card}>
            <h3>Academic Excellence</h3>
            <p>
              Consistently strong board examination performance with top-ranking
              students.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Sports Excellence</h3>
            <p>
              District and state-level achievements in athletics, cricket,
              football, and more.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cultural Success</h3>
            <p>
              Awards in debates, arts, music competitions, and cultural
              festivals.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Innovation Awards</h3>
            <p>
              Recognition for STEM education, robotics, and modern educational
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <h2>{countStudents}+</h2>
          <p>Students</p>
        </div>

        <div className={styles.statCard}>
          <h2>{countFaculty}+</h2>
          <p>Faculty Members</p>
        </div>

        <div className={styles.statCard}>
          <h2>{countAwards}+</h2>
          <p>Awards</p>
        </div>

        <div className={styles.statCard}>
          <h2>25+</h2>
          <p>Years of Excellence</p>
        </div>
      </section>

      {/* ACCREDITATION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Accreditation & Affiliation</h2>
          <p>Recognized standards ensuring quality education.</p>
        </div>

        <div className={styles.accreditationBox}>
          <div className={styles.card}>
            <h3>Board</h3>
            <p>{schoolConfig.board}</p>
          </div>

          <div className={styles.card}>
            <h3>Affiliation Number</h3>
            <p>{schoolConfig.affiliationNumber}</p>
          </div>

          <div className={styles.card}>
            <h3>Recognition</h3>
            <p>Government Approved Institution</p>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionHeader}>
          <h2>Infrastructure Overview</h2>
          <p>
            A modern learning environment built for academic and personal
            excellence.
          </p>
        </div>

        <div className={styles.infrastructureGrid}>
          {infrastructure.map((item, index) => (
            <div key={index} className={styles.infrastructureCard}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Join Our Learning Community</h2>
        <p>
          Discover an environment where knowledge, discipline, and innovation
          come together.
        </p>

        <div className={styles.heroButtons}>
          <button>Apply Now</button>
          <button className={styles.secondaryBtn}>Contact Us</button>
        </div>
      </section>
    </div>
  );
}
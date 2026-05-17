"use client";

import styles from "./academics.module.css";

export default function AcademicsPage() {
  const academicSections = [
    {
      id: "preprimary",
      title: "Pre-Primary",
      curriculum:
        "A play-based foundational curriculum focused on literacy, numeracy, creativity, and social-emotional development.",
      subjects: [
        "English",
        "Hindi",
        "Math Readiness",
        "General Awareness",
        "Art & Craft",
        "Music",
        "Physical Activities",
      ],
      methodology: [
        "Storytelling",
        "Activity-based learning",
        "Interactive games",
        "Visual learning",
        "Hands-on exploration",
      ],
      approach: [
        "Child-centric learning",
        "Experiential learning",
        "Learning through play",
      ],
      assessment: [
        "Observation-based evaluation",
        "Activity assessment",
        "Milestone tracking",
      ],
      programs: [
        "Phonics Program",
        "Story Sessions",
        "Creative Art",
        "Parent Interaction Activities",
      ],
    },

    {
      id: "primary",
      title: "Primary",
      curriculum:
        "Strong academic foundation through concept-based learning and interactive classroom engagement.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "EVS",
        "Computer Basics",
        "General Knowledge",
        "Art",
        "Music",
      ],
      methodology: [
        "Smart classroom teaching",
        "Interactive worksheets",
        "Group activities",
        "Demonstration learning",
      ],
      approach: [
        "Inquiry-based learning",
        "Collaborative participation",
        "Activity-oriented education",
      ],
      assessment: [
        "Periodic tests",
        "Assignments",
        "Projects",
        "Annual examination",
      ],
      programs: [
        "Reading Club",
        "Olympiad Foundation",
        "Coding Basics",
        "Robotics Introduction",
      ],
    },

    {
      id: "middle",
      title: "Middle School",
      curriculum:
        "Structured academic progression with deeper conceptual understanding and analytical thinking.",
      subjects: [
        "English",
        "Hindi",
        "Sanskrit",
        "Mathematics",
        "Science",
        "Social Science",
        "Computer Science",
      ],
      methodology: [
        "Concept-driven teaching",
        "Digital learning",
        "Lab demonstrations",
        "Collaborative projects",
      ],
      approach: [
        "Analytical thinking",
        "Problem-solving",
        "Research-oriented learning",
      ],
      assessment: [
        "Unit tests",
        "Assignments",
        "Projects",
        "Term examinations",
      ],
      programs: [
        "Science Exhibition",
        "Coding Workshops",
        "Debate Club",
        "Leadership Development",
      ],
    },

    {
      id: "secondary",
      title: "Secondary",
      curriculum:
        "Board-focused curriculum designed for conceptual clarity, academic excellence, and exam readiness.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Science",
        "Information Technology",
        "Physical Education",
      ],
      methodology: [
        "Smart board teaching",
        "Exam-focused revision",
        "Mock testing",
        "Doubt clearing sessions",
      ],
      approach: [
        "Concept mastery",
        "Analytical reasoning",
        "Time management",
      ],
      assessment: [
        "Periodic tests",
        "Internal assessments",
        "Mock board exams",
        "Final board examination",
      ],
      programs: [
        "Career Counseling",
        "Board Revision Camp",
        "Olympiad Prep",
        "Exam Strategy Sessions",
      ],
    },
  ];

  const seniorStreams = [
    {
      stream: "Science",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "Computer Science",
        "English",
      ],
    },
    {
      stream: "Commerce",
      subjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "English",
        "Informatics Practices",
      ],
    },
    {
      stream: "Humanities",
      subjects: [
        "History",
        "Political Science",
        "Geography",
        "Economics",
        "Sociology",
        "English",
      ],
    },
  ];

  return (
    <div className={styles.academicsPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>Academic Excellence</p>
          <h1>Academics</h1>
          <p className={styles.tagline}>
            Building strong foundations, inspiring excellence, shaping futures.
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className={styles.stickyNav}>
        <a href="#preprimary">Pre-Primary</a>
        <a href="#primary">Primary</a>
        <a href="#middle">Middle School</a>
        <a href="#secondary">Secondary</a>
        <a href="#senior">Senior Secondary</a>
      </nav>

      {/* ACADEMIC SECTIONS */}
      {academicSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={styles.academicSection}
        >
          <div className={styles.sectionHeader}>
            <h2>{section.title}</h2>
            <p>{section.curriculum}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Subjects</h3>
              <ul>
                {section.subjects.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Teaching Methodology</h3>
              <ul>
                {section.methodology.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Learning Approach</h3>
              <ul>
                {section.approach.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Assessment Pattern</h3>
              <ul>
                {section.assessment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Special Programs</h3>
              <ul>
                {section.programs.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
            {/* SENIOR SECONDARY */}
      <section id="senior" className={styles.seniorSection}>
        <div className={styles.sectionHeader}>
          <h2>Senior Secondary</h2>
          <p>
            Advanced academic preparation designed for higher education,
            competitive readiness, and career direction.
          </p>
        </div>

        <div className={styles.streamGrid}>
          {seniorStreams.map((stream, index) => (
            <div key={index} className={styles.streamCard}>
              <h3>{stream.stream}</h3>
              <ul>
                {stream.subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Teaching Methodology</h3>
            <ul>
              <li>Advanced conceptual teaching</li>
              <li>Practical demonstrations</li>
              <li>Research-based learning</li>
              <li>Interactive discussions</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Learning Approach</h3>
            <ul>
              <li>Independent learning</li>
              <li>Critical thinking</li>
              <li>Career readiness</li>
              <li>Competitive preparation</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Assessment Pattern</h3>
            <ul>
              <li>Unit tests</li>
              <li>Internal assessments</li>
              <li>Practical exams</li>
              <li>Pre-board exams</li>
              <li>Final board exams</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Special Programs</h3>
            <ul>
              <li>JEE / NEET Foundation</li>
              <li>CUET Guidance</li>
              <li>Career Counseling</li>
              <li>University Mentorship</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEACHING EXCELLENCE */}
      <section className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Teaching Excellence</h2>
          <p>
            Our academic strength is powered by experienced educators and modern
            teaching systems.
          </p>
        </div>

        <div className={styles.excellenceGrid}>
          <div className={styles.card}>Experienced Faculty</div>
          <div className={styles.card}>Smart Classrooms</div>
          <div className={styles.card}>Digital Learning</div>
          <div className={styles.card}>Student Mentorship</div>
          <div className={styles.card}>Performance Tracking</div>
          <div className={styles.card}>Skill-Based Learning</div>
        </div>
      </section>

      {/* ENRICHMENT */}
      <section className={styles.academicSection}>
        <div className={styles.sectionHeader}>
          <h2>Academic Enrichment Programs</h2>
          <p>
            Beyond textbooks, we create opportunities for broader intellectual
            growth.
          </p>
        </div>

        <div className={styles.excellenceGrid}>
          <div className={styles.card}>Olympiad Training</div>
          <div className={styles.card}>Coding & Robotics</div>
          <div className={styles.card}>Language Lab</div>
          <div className={styles.card}>STEM Innovation</div>
          <div className={styles.card}>Public Speaking</div>
          <div className={styles.card}>Debate Club</div>
        </div>
      </section>

      {/* ASSESSMENT PHILOSOPHY */}
      <section className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Assessment Philosophy</h2>
          <p>
            We assess understanding, practical application, creativity, and
            consistent progress—not memorization alone.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Shape Your Child’s Future With Excellence</h2>
        <p>
          Join an institution where academic rigor meets innovation, discipline,
          and opportunity.
        </p>

        <div className={styles.heroButtons}>
          <button>Apply for Admission</button>
          <button className={styles.secondaryBtn}>Contact Academic Office</button>
        </div>
      </section>
    </div>
  );
}
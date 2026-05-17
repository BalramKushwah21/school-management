"use client";

import styles from "./admissions.module.css";
import { useState } from "react";

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      question: "What is the age criteria for admission?",
      answer:
        "Admission eligibility depends on the class level and school admission policy.",
    },
    {
      question: "Can I apply online?",
      answer:
        "Yes, parents can submit the admission form through the online application portal.",
    },
    {
      question: "Is entrance assessment required?",
      answer:
        "Assessment may be required for selected classes depending on seat availability.",
    },
    {
      question: "Can admission fees be paid online?",
      answer:
        "Yes, secure online payment options are available.",
    },
  ];

  const importantDates = [
    "Admissions Open: 1 January",
    "Application Deadline: 31 March",
    "Entrance Assessment: 10 April",
    "Result Declaration: 20 April",
    "Session Begins: 1 July",
  ];

  const documents = [
    "Birth Certificate",
    "Previous School Report Card",
    "Transfer Certificate",
    "Passport Size Photographs",
    "Aadhar Card Copy",
    "Parent Identity Proof",
    "Address Proof",
    "Medical Certificate",
  ];

  const feeStructure = [
    { class: "Pre-Primary", fee: "₹25,000 / Year" },
    { class: "Primary", fee: "₹35,000 / Year" },
    { class: "Middle School", fee: "₹45,000 / Year" },
    { class: "Secondary", fee: "₹55,000 / Year" },
    { class: "Senior Secondary", fee: "₹70,000 / Year" },
  ];

  return (
    <div className={styles.admissionsPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>Join Our Institution</p>
          <h1>Admissions</h1>
          <p className={styles.tagline}>
            Begin your child’s journey toward academic excellence and holistic
            development.
          </p>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className={styles.stickyNav}>
        <a href="#process">Process</a>
        <a href="#eligibility">Eligibility</a>
        <a href="#documents">Documents</a>
        <a href="#fees">Fees</a>
        <a href="#form">Apply</a>
        <a href="#faq">FAQs</a>
      </nav>

      {/* ADMISSION PROCESS */}
      <section id="process" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Admission Process</h2>
          <p>Simple and transparent steps to secure admission.</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.stepCard}>
            <span>01</span>
            <h3>Inquiry</h3>
            <p>Contact our admissions office or submit an inquiry online.</p>
          </div>

          <div className={styles.stepCard}>
            <span>02</span>
            <h3>Application</h3>
            <p>Complete and submit the admission form.</p>
          </div>

          <div className={styles.stepCard}>
            <span>03</span>
            <h3>Assessment</h3>
            <p>Entrance evaluation where applicable.</p>
          </div>

          <div className={styles.stepCard}>
            <span>04</span>
            <h3>Confirmation</h3>
            <p>Document verification and fee payment.</p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Eligibility Criteria</h2>
          <p>Admission eligibility by academic level.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Pre-Primary</h3>
            <p>Minimum age as per school policy.</p>
          </div>

          <div className={styles.card}>
            <h3>Primary</h3>
            <p>Age eligibility and previous academic readiness.</p>
          </div>

          <div className={styles.card}>
            <h3>Middle School</h3>
            <p>Previous academic qualification required.</p>
          </div>

          <div className={styles.card}>
            <h3>Secondary & Senior Secondary</h3>
            <p>Previous board/class qualification and entrance criteria.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section id="documents" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Required Documents</h2>
        </div>

        <div className={styles.grid}>
          {documents.map((doc, index) => (
            <div key={index} className={styles.card}>
              {doc}
            </div>
          ))}
        </div>
      </section>
            {/* FEES */}
      <section id="fees" className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Fee Structure</h2>
          <p>Transparent academic fee details.</p>
        </div>

        <div className={styles.feeTable}>
          <div className={styles.tableHeader}>
            <span>Academic Level</span>
            <span>Annual Fee</span>
          </div>

          {feeStructure.map((item, index) => (
            <div key={index} className={styles.tableRow}>
              <span>{item.class}</span>
              <span>{item.fee}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ONLINE FORM */}
      <section id="form" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Online Admission Form</h2>
          <p>Apply directly through our online portal.</p>
        </div>

        <form className={styles.admissionForm}>
          <input type="text" placeholder="Student Full Name" />
          <input type="date" />
          <input type="text" placeholder="Parent / Guardian Name" />
          <input type="tel" placeholder="Mobile Number" />
          <input type="email" placeholder="Email Address" />
          <select>
            <option>Select Class Applying For</option>
            <option>Pre-Primary</option>
            <option>Primary</option>
            <option>Middle School</option>
            <option>Secondary</option>
            <option>Senior Secondary</option>
          </select>

          <textarea
            rows="5"
            placeholder="Additional Information"
          ></textarea>

          <button type="submit">Submit Application</button>
        </form>

        <div className={styles.downloadBox}>
          <h3>Prefer Offline Submission?</h3>
          <a href="/admission-form.pdf" download>
            Download Admission Form PDF
          </a>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Important Dates</h2>
        </div>

        <div className={styles.grid}>
          {importantDates.map((date, index) => (
            <div key={index} className={styles.card}>
              {date}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqContainer}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqButton}
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                {faq.question}
              </button>

              {openFaq === index && (
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Admission Contact Person</h2>
        </div>

        <div className={styles.contactCard}>
          <h3>Admissions Coordinator</h3>
          <p>Mr. Admissions Officer</p>
          <p>📞 +91 9876543210</p>
          <p>✉ admissions@schoolname.com</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Take the First Step Toward Excellence</h2>
        <p>
          Secure your child’s future with a world-class educational experience.
        </p>

        <div className={styles.heroButtons}>
          <button>Apply Now</button>
          <button className={styles.secondaryBtn}>
            Contact Admissions
          </button>
        </div>
      </section>
    </div>
  );
}
"use client";

import styles from "./contact.module.css";

export default function ContactPage() {
  const departmentContacts = [
    {
      department: "Admissions Office",
      phone: "+91 9876543210",
      email: "admissions@schoolname.com",
    },
    {
      department: "Academic Office",
      phone: "+91 9876543211",
      email: "academics@schoolname.com",
    },
    {
      department: "Accounts Department",
      phone: "+91 9876543212",
      email: "accounts@schoolname.com",
    },
    {
      department: "Transport Department",
      phone: "+91 9876543213",
      email: "transport@schoolname.com",
    },
  ];

  return (
    <div className={styles.contactPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <p className={styles.smallHeading}>Get In Touch</p>
          <h1>Contact Us</h1>
          <p className={styles.tagline}>
            We’re here to answer your questions and help you connect with the
            right department.
          </p>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className={styles.stickyNav}>
        <a href="#details">Contact Details</a>
        <a href="#form">Contact Form</a>
        <a href="#map">Location</a>
        <a href="#departments">Departments</a>
      </nav>

      {/* CONTACT DETAILS */}
      <section id="details" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Contact Information</h2>
          <p>Reach us through your preferred communication channel.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Address</h3>
            <p>
              Chetna Good Life School,
              <br />
              Bhopal, Madhya Pradesh,
              <br />
              India
            </p>
          </div>

          <div className={styles.card}>
            <h3>Phone Numbers</h3>
            <p>+91 9876543210</p>
            <p>+91 9876543211</p>
          </div>

          <div className={styles.card}>
            <h3>Email</h3>
            <p>info@schoolname.com</p>
            <p>support@schoolname.com</p>
          </div>

          <div className={styles.card}>
            <h3>Office Timings</h3>
            <p>Monday – Saturday</p>
            <p>8:00 AM – 4:00 PM</p>
          </div>
        </div>
      </section>
            {/* CONTACT FORM */}
      <section id="form" className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Send Us a Message</h2>
          <p>We would love to hear from you.</p>
        </div>

        <form className={styles.contactForm}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
          <textarea rows="6" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* MAP */}
      <section id="map" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Find Us</h2>
          <p>Visit our campus location.</p>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29375.58174870368!2d77.3859!3d23.2599"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location"
          ></iframe>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section id="departments" className={styles.darkSection}>
        <div className={styles.sectionHeader}>
          <h2>Department-wise Contacts</h2>
          <p>Connect directly with the relevant department.</p>
        </div>

        <div className={styles.grid}>
          {departmentContacts.map((dept, index) => (
            <div key={index} className={styles.card}>
              <h3>{dept.department}</h3>
              <p>{dept.phone}</p>
              <p>{dept.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Let’s Connect</h2>
        <p>
          Whether it’s admissions, academics, or general inquiries—we’re ready
          to help.
        </p>

        <div className={styles.heroButtons}>
          <button>Call Now</button>
          <button className={styles.secondaryBtn}>Email Us</button>
        </div>
      </section>
    </div>
  );
}
import styles from "./department.module.css";

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Mathematics",
      hod: "Mrs. Sharma",
      teachers: 12,
      students: 450,
      performance: "96%",
    },
    {
      name: "Science",
      hod: "Mr. Verma",
      teachers: 15,
      students: 500,
      performance: "94%",
    },
    {
      name: "Computer Science",
      hod: "Mr. Singh",
      teachers: 8,
      students: 350,
      performance: "98%",
    },
    {
      name: "English",
      hod: "Mrs. Gupta",
      teachers: 10,
      students: 420,
      performance: "92%",
    },
    {
      name: "Hindi",
      hod: "Mrs. Mishra",
      teachers: 9,
      students: 400,
      performance: "91%",
    },
    {
      name: "Social Science",
      hod: "Mr. Tiwari",
      teachers: 11,
      students: 380,
      performance: "93%",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Departments Management</h1>
        <p>Manage academic departments and faculty records</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h2>8</h2>
          <p>Departments</p>
        </div>

        <div className={styles.statCard}>
          <h2>78</h2>
          <p>Teachers</p>
        </div>

        <div className={styles.statCard}>
          <h2>3050+</h2>
          <p>Students</p>
        </div>

        <div className={styles.statCard}>
          <h2>95%</h2>
          <p>Attendance</p>
        </div>
      </div>

      <div className={styles.grid}>
        {departments.map((dept, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.top}>
              <h3>{dept.name}</h3>
              <span className={styles.active}>Active</span>
            </div>

            <div className={styles.details}>
              <p>👨‍🏫 HOD: {dept.hod}</p>
              <p>📚 Teachers: {dept.teachers}</p>
              <p>🎓 Students: {dept.students}</p>
              <p>📈 Performance: {dept.performance}</p>
            </div>

            <button className={styles.btn}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
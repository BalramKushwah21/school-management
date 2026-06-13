export const roles = ["admin", "teacher", "parent", "student"];

export const roleHome = {
  admin: "/admin",
  teacher: "/teacher",
  parent: "/parent",
  student: "/student",
};

export const roleNavigation = {
  visitor: [
    { label: "Home", href: "/" },
    { label: "About", href: "/visitor/about" },
    { label: "Contact", href: "/visitor/contact" },
    { label: "Admission", href: "/visitor/admission" },
  ],
  admin: [
    { label: "Home", href: "/" },
    { label: "Admin", href: "/admin" },
    { label: "Manage Students", href: "/admin/manage-students" },
    { label: "Manage Teachers", href: "/admin/manage-teachers" },
    { label: "Fees", href: "/admin/fees" },
    { label: "Reports", href: "/admin/reports" },
  ],
  teacher: [
    { label: "Home", href: "/" },
    { label: "Teacher", href: "/teacher" },
    { label: "Attendance", href: "/teacher/attendance" },
    { label: "Marks", href: "/teacher/marks" },
    { label: "Student Progress", href: "/teacher/student-progress" },
  ],
  parent: [
    { label: "Home", href: "/" },
    { label: "Parent", href: "/parent" },
    { label: "Fees Status", href: "/parent/fees-status" },
    { label: "Notifications", href: "/parent/notifications" },
    { label: "Child Progress", href: "/parent/child-progress" },
  ],
  student: [
    { label: "Home", href: "/" },
    { label: "Student", href: "/student" },
    { label: "Profile", href: "/student/profile" },
    { label: "Results", href: "/student/results" },
    { label: "Notifications", href: "/student/notifications" },
  ],
};

export const publicRoutes = [
  "/",
  "/login",
  "/visitor",
  "/visitor/home",
  "/visitor/about",
  "/visitor/contact",
  "/visitor/admission",
];

export function getRoleHome(role) {
  return roleHome[role] || "/login";
}

export function getNavigationForRole(role) {
  return roleNavigation[role] || roleNavigation.visitor;
}

export function canAccessPath(role, pathname) {
  if (publicRoutes.includes(pathname)) {
    return true;
  }

  if (!role) {
    return false;
  }

  if (role === "admin") {
    return pathname.startsWith("/admin");
  }

  if (role === "teacher") {
    return pathname.startsWith("/teacher");
  }

  if (role === "parent") {
    return pathname.startsWith("/parent");
  }

  if (role === "student") {
    return pathname.startsWith("/student");
  }

  return false;
}
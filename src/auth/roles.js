export const roles = ["admin", "teacher", "parent", "student"];

export const roleHome = {
  admin: "/admin/dashboard",
  teacher: "/teacher/dashboard",
  parent: "/parent/dashboard",
  student: "/student/dashboard",
};

export const roleNavigation = {
  visitor: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Admission", href: "/admission" },
  ],
  admin: [
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "Manage Students", href: "/admin/manage-students" },
    { label: "Manage Teachers", href: "/admin/manage-teachers" },
    { label: "Fees", href: "/admin/fees" },
    { label: "Reports", href: "/admin/reports" },
  ],
  teacher: [
    { label: "Dashboard", href: "/teacher/dashboard" },
    { label: "Attendance", href: "/teacher/attendance" },
    { label: "Marks", href: "/teacher/marks" },
    { label: "Student Progress", href: "/teacher/student-progress" },
  ],
  parent: [
    { label: "Dashboard", href: "/parent/dashboard" },
    { label: "Fees Status", href: "/parent/fees-status" },
    { label: "Notifications", href: "/parent/notifications" },
    { label: "Child Progress", href: "/parent/child-progress" },
  ],
  student: [
    { label: "Dashboard", href: "/student/dashboard" },
    { label: "Profile", href: "/student/profile" },
    { label: "Results", href: "/student/results" },
    { label: "Notifications", href: "/student/notifications" },
  ],
};

export const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/auth/register",
  "/pricing",
  "/register-school",
  "/about",
  "/contact",
  "/admission",
];

export const loginRoutes = ["/login"];

export function stripSchoolPath(pathname) {
  const match = pathname.match(/^\/school\/([^/]+)(\/.*)?$/);
  if (!match) {
    return { school: null, rest: pathname };
  }

  return { school: match[1], rest: match[2] || "/" };
}

export function getRoleHome(role, school = null) {
  const home = roleHome[role] || "/login";
  if (!school) {
    return home;
  }

  return home === "/" ? `/school/${school}` : `/school/${school}${home}`;
}

export function getNavigationForRole(role) {
  return roleNavigation[role] || roleNavigation.visitor;
}

export function isPublicPath(pathname) {
  const { rest } = stripSchoolPath(pathname);
  return publicRoutes.includes(rest);
}

export function isLoginPath(pathname) {
  const { rest } = stripSchoolPath(pathname);
  return loginRoutes.includes(rest);
}

export function canAccessPath(role, pathname) {
  if (isPublicPath(pathname)) {
    return true;
  }

  if (!role) {
    return false;
  }

  const { rest } = stripSchoolPath(pathname);

  if (rest.startsWith("/admin")) {
    return role === "admin";
  }

  if (rest.startsWith("/teacher")) {
    return role === "teacher";
  }

  if (rest.startsWith("/parent")) {
    return role === "parent";
  }

  if (rest.startsWith("/student")) {
    return role === "student";
  }

  return false;
}

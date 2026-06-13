import Link from "next/link";

export const metadata = {
  title: "School Portal",
};

const navGroups = [
  {
    title: "Visitor",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Admission", href: "/admission" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Admin",
    links: [
      { label: "Dashboard", href: "/admin/dashboard" },
      { label: "Manage Students", href: "/admin/manage-students" },
      { label: "Manage Teachers", href: "/admin/manage-teachers" },
      { label: "Fees", href: "/admin/fees-management" },
      { label: "Reports", href: "/admin/reports" },
    ],
  },
  {
    title: "Teacher",
    links: [
      { label: "Dashboard", href: "/teacher/dashboard" },
      { label: "Attendance", href: "/teacher/attendance" },
      { label: "Marks Entry", href: "/teacher/marks-entry" },
      { label: "Student Progress", href: "/teacher/student-progress" },
    ],
  },
  {
    title: "Parent",
    links: [
      { label: "Dashboard", href: "/parent/dashboard" },
      { label: "Fees Status", href: "/parent/fees-status" },
      { label: "Notifications", href: "/parent/notifications" },
      { label: "Child Progress", href: "/parent/child-progress" },
    ],
  },
  {
    title: "Student",
    links: [
      { label: "Dashboard", href: "/student/dashboard" },
      { label: "Profile", href: "/student/profile" },
      { label: "Results", href: "/student/results" },
      { label: "Notifications", href: "/student/notifications" },
    ],
  },
];

function buildSchoolHref(school, href) {
  if (href === "/") {
    return `/school/${school}`;
  }

  return `/school/${school}${href}`;
}

export default function SchoolLayout({ children, params }) {
  const school = params.school;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-700">{school}</p>
            <h1 className="mt-3 text-2xl font-semibold text-slate-900">Tenant Portal</h1>
            <p className="mt-2 text-sm text-slate-600">School subdomain navigation for visitors and all roles.</p>
          </div>

          <div className="space-y-6">
            {navGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{group.title}</p>
                <nav className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={buildSchoolHref(school, link.href)}
                      className="block rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        <main className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">{children}</main>
      </div>
    </div>
  );
}

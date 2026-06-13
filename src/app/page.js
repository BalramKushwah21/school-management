import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200/70">
      <section className="grid gap-8 bg-gradient-to-br from-violet-700 via-purple-700 to-slate-900 px-8 py-14 text-white lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">
            Visitor Landing Page
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
            A school portal built for visitors, students, parents, teachers, and
            admins.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-violet-100">
            Explore the school as a visitor or sign in to reach your role-based
            dashboard with only the permissions you are allowed to use.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="rounded-full bg-white px-6 py-3 font-semibold text-violet-800 transition hover:bg-violet-50"
            >
              Login
            </Link>
            <Link
              href="/visitor/about"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore as Visitor
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[28px] bg-white/10 p-6 backdrop-blur">
          {[
            ["Admin", "Manage Students, Manage Teachers, Fees, Reports"],
            ["Teacher", "Attendance, Marks, Student Progress"],
            ["Parent", "Fees Status, Notifications, Child Progress"],
            ["Student", "Profile, Results, Notifications"],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-2xl bg-white/10 p-4">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-violet-100">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 px-8 py-8 md:grid-cols-3 lg:px-12">
        {[
          ["About", "/visitor/about"],
          ["Contact", "/visitor/contact"],
          ["Admission", "/visitor/admission"],
        ].map(([title, href]) => (
          <Link
            key={title}
            href={href}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900 transition hover:border-violet-300 hover:bg-white"
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">
              Open the visitor section for {title.toLowerCase()}.
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}

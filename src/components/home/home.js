import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-6xl px-6 flex justify-end mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
            Premium
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Secure - Modern - Multi-tenant
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900">
              SchoolGrid - The Heartbeat of Modern Schools
            </h1>
            <p className="max-w-xl text-lg text-slate-700">
              Reduce administrative workload, improve efficiency, and automate
              school tasks. Trusted security, powerful features, and a
              SaaS-ready architecture designed for multiple schools.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/register-school"
                className="rounded-full bg-violet-600 px-6 py-3 font-semibold text-white"
              >
                Book a Demo
              </Link>
              <Link
                href="/register-school"
                className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white"
              >
                Get Premium
              </Link>
              <Link href="/login" className="mt-2 text-sm text-slate-600">
                Login
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              {[
                "Free Setup",
                "Free Data Migration",
                "Staff Training Included",
                "Secure Cloud Platform",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white/60 px-4 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Core Features
            </h3>
            <ul id="features" className="mt-4 grid gap-3 text-slate-700">
              <li>Student Management</li>
              <li>Attendance Tracking</li>
              <li>Fee Management and Billing</li>
              <li>Parent Communication</li>
              <li>Role-based Dashboards</li>
            </ul>

            <div id="security" className="mt-6 rounded-lg bg-slate-50 p-4">
              <h4 className="font-semibold">Security and Isolation</h4>
              <p className="mt-2 text-sm text-slate-600">
                Designed for multi-tenant SaaS: subdomains, tenant-aware
                routing, school_id filtering, and optional PostgreSQL Row-Level
                Security.
              </p>
            </div>
        </div>
      </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow">
            <h5 className="font-semibold">For Principals</h5>
            <p className="mt-2 text-sm text-slate-600">
              Manage staff, oversee reports, and keep the school running
              smoothly.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h5 className="font-semibold">For Teachers</h5>
            <p className="mt-2 text-sm text-slate-600">
              Take attendance, record marks, and track student progress in one
              place.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h5 className="font-semibold">For Parents</h5>
            <p className="mt-2 text-sm text-slate-600">
              View fees, receive notifications, and track child progress.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-600">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              Copyright {new Date().getFullYear()} SchoolGrid. All rights
              reserved.
            </div>
            <div className="flex gap-4">
              <Link href="/pricing" className="text-slate-600">
                Pricing
              </Link>
              <Link href="/register-school" className="text-slate-600">
                Demo
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

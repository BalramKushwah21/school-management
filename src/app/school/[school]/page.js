import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function SchoolHomePage({ params }) {
  const school = await prisma.school.findUnique({
    where: { subdomain: params.school },
  });

  if (!school) {
    return (
      <main className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm uppercase tracking-[0.24em] text-red-600">Tenant Not Found</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-950">School not found</h1>
        <p className="mt-4 text-slate-600">The school subdomain <strong>{params.school}</strong> does not exist in the system.</p>
      </main>
    );
  }

  const schoolName = school.schoolName;
  const description = school.description ||
    "A modern school portal designed to manage academic operations, communication, and student progress for your institution.";
  const mission = school.mission || "Deliver quality education while creating a safe and supportive learning environment.";
  const vision = school.vision || "Empower every student to reach their full potential through innovation and care.";

  return (
    <main className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-r from-violet-700 via-slate-900 to-slate-700 p-10 text-white shadow-sm ring-1 ring-slate-200">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.24em] text-violet-200">{school.plan === "trial" ? "Trial School Portal" : "School Portal"}</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Welcome to {schoolName}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-violet-100 sm:text-lg">{description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/school/${params.school}/login`}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Login to School
            </Link>
            <Link
              href={`/school/${params.school}/about`}
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-700">About {school.schoolName}</p>
            <p className="mt-4 text-slate-600">{school.description || description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500">Mission</p>
                <p className="mt-2 text-slate-900">{school.mission || mission}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Vision</p>
                <p className="mt-2 text-slate-900">{school.vision || vision}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">City</p>
                <p className="mt-2 text-slate-900">{school.city || "Not specified"}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Established</p>
                <p className="mt-2 text-slate-900">{school.establishedYear || "—"}</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-violet-700 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em]">Students</p>
                <p className="mt-3 text-3xl font-semibold">{school.studentCount ?? 0}</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Teachers</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{school.teacherCount ?? 0}</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Plan</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 capitalize">{school.plan}</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-700">Contact</p>
            <div className="mt-4 space-y-3 text-slate-700">
              <p><strong>Admin:</strong> {school.adminName}</p>
              <p><strong>Email:</strong> {school.email}</p>
              <p><strong>Phone:</strong> {school.contactNo || "Not set"}</p>
              <p><strong>Website:</strong> {school.website ? <a href={school.website} className="text-violet-700 underline">{school.website}</a> : "Not set"}</p>
              <p><strong>Address:</strong> {school.address || "Not set"}</p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-700">Quick Actions</p>
            <div className="mt-6 space-y-3">
              <Link href={`/school/${params.school}/login`} className="block rounded-2xl bg-violet-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-800">
                Login to Tenant
              </Link>
              <Link href={`/school/${params.school}/about`} className="block rounded-2xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                View About Page
              </Link>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

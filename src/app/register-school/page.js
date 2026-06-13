"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterSchoolPage() {
  const [form, setForm] = useState({
    schoolName: "",
    adminName: "",
    subdomain: "",
    email: "",
    contactNo: "",
    address: "",
    city: "",
    website: "",
    description: "",
    mission: "",
    vision: "",
    establishedYear: "",
    studentCount: "",
    teacherCount: "",
    plan: "trial",
  });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [createdSchool, setCreatedSchool] = useState(null);

  function update(e) {
    const { name, value } = e.target;
    // auto-generate a safe subdomain from schoolName when subdomain is empty
    setForm((s) => {
      const next = { ...s, [name]: value };
      if (name === "schoolName" && (!s.subdomain || s.subdomain.trim() === "")) {
        const generated = String(value)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        next.subdomain = generated;
      }
      return next;
    });
  }

  function validate(values) {
    const e = {};
    if (!values.schoolName || !values.schoolName.trim()) e.schoolName = "School name is required";
    if (!values.adminName || !values.adminName.trim()) e.adminName = "Admin / contact person name is required";
    if (!values.subdomain || !/^[a-z0-9-]+$/.test(values.subdomain)) e.subdomain = "Subdomain is required and may contain only lowercase letters, numbers and hyphens";
    if (!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) e.email = "A valid admin email is required";
    if (values.website && !/^https?:\/\//.test(values.website)) e.website = "Website must start with http:// or https://";
    if (values.establishedYear && !/^\d{4}$/.test(values.establishedYear)) e.establishedYear = "Enter a valid four-digit year";
    if (values.studentCount && Number(values.studentCount) < 0) e.studentCount = "Student count cannot be negative";
    if (values.teacherCount && Number(values.teacherCount) < 0) e.teacherCount = "Teacher count cannot be negative";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    setErrors({});
    setCreatedSchool(null);

    try {
      const clientErrors = validate(form);
      if (Object.keys(clientErrors).length > 0) {
        setErrors(clientErrors);
        setStatus("error");
        return;
      }

      const res = await fetch("/api/schools/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Unknown error");
        setStatus("error");
        return;
      }

      setStatus("success");
      setCreatedSchool(json.school);
      setForm({
        schoolName: "",
        adminName: "",
        subdomain: "",
        email: "",
        contactNo: "",
        address: "",
        city: "",
        website: "",
        description: "",
        mission: "",
        vision: "",
        establishedYear: "",
        studentCount: "",
        teacherCount: "",
        plan: "trial",
      });
    } catch (err) {
      setError("Network or server error");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">School onboarding</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">Register a school and create its subdomain</h1>
          <p className="mt-4 text-slate-600">
            This form creates the tenant record in the database and stores the school’s public landing details.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            After registering the school, create an admin account separately at the user registration page.
          </p>
          <Link href="/auth/register" className="inline-flex items-center rounded-full bg-violet-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-800">
            Go to Admin Sign Up
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            School name
            <input value={form.schoolName} name="schoolName" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" />
            {errors.schoolName && <div className="text-sm text-red-600">{errors.schoolName}</div>}
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Admin / contact person
            <input value={form.adminName} name="adminName" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" placeholder="Full name" />
            {errors.adminName && <div className="text-sm text-red-600">{errors.adminName}</div>}
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Preferred subdomain
            <input value={form.subdomain} name="subdomain" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" placeholder="green-valley" />
            {form.subdomain ? (
              <div className="text-sm text-slate-500">Reserved: {form.subdomain}.your-domain.example</div>
            ) : null}
            {errors.subdomain && <div className="text-sm text-red-600">{errors.subdomain}</div>}
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Admin email
            <input value={form.email} name="email" type="email" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" placeholder="admin@school.edu" />
            {errors.email && <div className="text-sm text-red-600">{errors.email}</div>}
          </label>


          <div className="grid gap-4 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Contact number
              <input value={form.contactNo} name="contactNo" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Website
              <input value={form.website} name="website" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" placeholder="https://www.school.edu" />
              {errors.website && <div className="text-sm text-red-600">{errors.website}</div>}
            </label>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              City
              <input value={form.city} name="city" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Established year
              <input value={form.establishedYear} name="establishedYear" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" placeholder="2020" />
              {errors.establishedYear && <div className="text-sm text-red-600">{errors.establishedYear}</div>}
            </label>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Student count
              <input value={form.studentCount} name="studentCount" type="number" min="0" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" />
              {errors.studentCount && <div className="text-sm text-red-600">{errors.studentCount}</div>}
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Teacher count
              <input value={form.teacherCount} name="teacherCount" type="number" min="0" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" />
              {errors.teacherCount && <div className="text-sm text-red-600">{errors.teacherCount}</div>}
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Address
            <textarea value={form.address} name="address" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            School description
            <textarea value={form.description} name="description" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" rows={4} placeholder="Tell visitors about this school" />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Mission statement
            <textarea value={form.mission} name="mission" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" rows={3} />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Vision statement
            <textarea value={form.vision} name="vision" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500" rows={3} />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Plan
            <select value={form.plan} name="plan" onChange={update} className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-violet-500">
              <option value="trial">14-day free trial</option>
              <option value="growth">Growth</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </label>

          <div className="mt-2">
            <button type="submit" className="rounded-lg bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800" disabled={status === "loading"}>
              {status === "loading" ? "Registering..." : "Start free trial"}
            </button>
          </div>

          {status === "success" && createdSchool && (
            <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800 ring-1 ring-emerald-200">
              Registration successful — tenant is created for <strong>{createdSchool.schoolName}</strong>.
              <div className="mt-2">School URL: <strong>{createdSchool.subdomain}.your-domain.example</strong></div>
            </div>
          )}
          {status === "success" && !createdSchool && (
            <div className="mt-4 text-green-600">Registration successful — school details are saved in the database.</div>
          )}
          {status === "error" && <div className="mt-4 text-red-600">{error}</div>}
        </form>
      </section>
    </main>
  );
}

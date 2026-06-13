"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function update(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = "Your name is required.";
    if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email)) next.email = "A valid email is required.";
    if (!values.password || values.password.length < 8) next.password = "Password must be at least 8 characters.";
    if (values.password !== values.confirmPassword) next.confirmPassword = "Passwords must match.";
    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setErrors({});

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const json = await res.json();

    if (!res.ok) {
      setStatus("error");
      setErrors({ form: json.error || "Unable to register." });
      return;
    }

    setStatus("success");
    router.push("/login");
  }

  return (
    <main className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200/70">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Create account</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">Register</h1>
      <p className="mt-3 text-slate-600">Create your login with email and password.</p>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full name
          <input
            name="name"
            value={form.name}
            onChange={update}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          />
          {errors.name && <div className="text-sm text-red-600">{errors.name}</div>}
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          />
          {errors.email && <div className="text-sm text-red-600">{errors.email}</div>}
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={update}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          />
          {errors.password && <div className="text-sm text-red-600">{errors.password}</div>}
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={update}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          />
          {errors.confirmPassword && <div className="text-sm text-red-600">{errors.confirmPassword}</div>}
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Role
          <select
            name="role"
            value={form.role}
            onChange={update}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          >
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button
          type="submit"
          className="rounded-2xl bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800"
        >
          {status === "loading" ? "Registering..." : "Create account"}
        </button>

        {errors.form && <div className="text-sm text-red-600">{errors.form}</div>}
        {status === "success" && <div className="text-sm text-green-600">Registration successful. Redirecting to login...</div>}
      </form>
    </main>
  );
}

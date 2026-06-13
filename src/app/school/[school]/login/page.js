"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function SchoolLoginPage({ params }) {
  const router = useRouter();
  const pathname = usePathname();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  function update(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setStatus("loading");

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
      callbackUrl: pathname,
    });

    if (res?.error) {
      setError(res.error);
      setStatus("error");
      return;
    }

    setStatus("success");
    router.push(res?.url || pathname);
  }

  return (
    <main className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200/70">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Tenant Login</p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">School Login</h1>
      <p className="mt-3 text-slate-600">Sign in with your school account for this tenant.</p>
      <p className="mt-3 text-sm text-slate-500">After sign in, you will land on the dashboard for your role within this school.</p>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={update}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-2xl bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Signing in..." : "Sign in"}
        </button>

        {error && <div className="text-sm text-red-600">{error}</div>}
      </form>
    </main>
  );
}

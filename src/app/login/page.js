"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { roles, getRoleHome } from "@/auth/roles";
import { useAuth } from "@/auth/auth-provider";

const roleDetails = {
  admin: "Full administrative access",
  teacher: "Attendance, marks, and progress",
  parent: "Fees status and child updates",
  student: "Profile, results, and notifications",
};

export default function LoginPage() {
  const router = useRouter();
  const { login, role } = useAuth();
  const [selectedRole, setSelectedRole] = useState(role || "admin");

  const homePath = useMemo(() => getRoleHome(selectedRole), [selectedRole]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextPath = login(selectedRole);
    router.push(nextPath);
  };

  return (
    <main className="mx-auto max-w-3xl rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200/70">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
        Role based login
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">Login</h1>
      <p className="mt-3 text-slate-600">
        Choose the role you want to enter as. Each role sees only its permitted
        section.
      </p>

      <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Select role
          <select
            value={selectedRole}
            onChange={(event) => setSelectedRole(event.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-violet-500"
          >
            {roles.map((nextRole) => (
              <option key={nextRole} value={nextRole}>
                {nextRole[0].toUpperCase() + nextRole.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          {roleDetails[selectedRole]}
          <div className="mt-2 font-medium text-slate-900">
            Redirects to: {homePath}
          </div>
        </div>

        <button
          type="submit"
          className="rounded-2xl bg-violet-700 px-5 py-3 font-semibold text-white transition hover:bg-violet-800"
        >
          Continue as {selectedRole[0].toUpperCase() + selectedRole.slice(1)}
        </button>
      </form>
    </main>
  );
}
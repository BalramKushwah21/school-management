import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ManageSchoolsPage() {
  const schools = await prisma.school.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold">Manage School Registrations</h1>
        <p className="text-sm text-slate-600 mt-2">Approve or delete pending school registrations.</p>

        <div className="mt-6 space-y-4">
          {schools.map((s) => (
            <div key={s.id} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200 flex justify-between items-center">
              <div>
                <div className="font-semibold">{s.schoolName} {s.status === 'pending' && <span className="text-sm text-orange-600">(pending)</span>}</div>
                <div className="text-sm text-slate-600">{s.adminName} • {s.email} • {s.subdomain}</div>
                <div className="text-xs text-slate-500">{new Date(s.createdAt).toLocaleString()}</div>
              </div>

              <div className="flex gap-2">
                {s.status !== 'approved' && (
                  <button
                    onClick={async () => {
                      await fetch(`/api/schools/${s.id}/approve`, { method: 'POST' });
                      location.reload();
                    }}
                    className="rounded-lg bg-green-600 px-3 py-2 text-white"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={async () => {
                    if (!confirm('Delete this registration?')) return;
                    await fetch(`/api/schools/${s.id}/approve`, { method: 'DELETE' });
                    location.reload();
                  }}
                  className="rounded-lg bg-red-600 px-3 py-2 text-white"
                >
                  Delete
                </button>
                <Link href={`/school/${s.subdomain}`} className="rounded-lg bg-slate-100 px-3 py-2">Open Tenant (placeholder)</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

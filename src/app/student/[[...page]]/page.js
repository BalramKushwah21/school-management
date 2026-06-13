export default async function StudentPage({ params }) {
  const resolvedParams = await params;
  const page = resolvedParams.page?.[0] || "dashboard";

  return (
    <main className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">Student • {page.replace(/-/g, " ")}</p>
      <h1 className="mt-4 text-3xl font-bold text-slate-950">Student {page[0].toUpperCase() + page.slice(1)}</h1>
      <p className="mt-4 text-slate-600">This is the student portal placeholder for the {page} page.</p>
    </main>
  );
}

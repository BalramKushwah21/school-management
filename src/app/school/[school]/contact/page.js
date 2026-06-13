export default function SchoolContactPage({ params }) {
  return (
    <main className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">Visitor • Contact</p>
      <h1 className="mt-4 text-3xl font-bold text-slate-950">Contact {params.school}</h1>
      <p className="mt-4 text-slate-600">
        Use this page to share the school's address, phone number, and admission contact details.
      </p>
    </main>
  );
}

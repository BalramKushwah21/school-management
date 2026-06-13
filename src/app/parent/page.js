import Link from "next/link";

const items = [
  ["Fees Status", "/parent/fees-status"],
  ["Notifications", "/parent/notifications"],
  ["Child Progress", "/parent/child-progress"],
];

export default function ParentPage() {
  return (
    <main className="space-y-6 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200/70">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          Parent
        </p>
        <h1 className="text-3xl font-bold text-slate-900">Parent</h1>
        <p className="max-w-2xl text-slate-600">
          Family-facing tools for fee updates, notifications, and progress tracking.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {items.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-medium text-slate-800 transition hover:border-violet-300 hover:bg-white"
          >
            {label}
          </Link>
        ))}
      </section>
    </main>
  );
}
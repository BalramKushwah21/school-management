const plans = [
  {
    name: "Starter",
    price: "Free trial",
    details: "For small schools validating the platform.",
    features: ["Student records", "Attendance", "Basic parent notices"],
  },
  {
    name: "Growth",
    price: "Subscription",
    details: "For schools ready to run daily operations online.",
    features: ["Fees management", "Teacher workflows", "Role dashboards"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    details: "For school groups that need deeper controls.",
    features: ["Multi-branch setup", "Advanced reports", "Priority support"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          Pricing
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">
          Subscription plans for every school stage
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Start with a free trial, then upgrade into the plan that matches your
          enrollment, staff size, and operations.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h2 className="text-xl font-semibold text-slate-950">
                {plan.name}
              </h2>
              <p className="mt-2 text-2xl font-bold text-violet-700">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-slate-600">{plan.details}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

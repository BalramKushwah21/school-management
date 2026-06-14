import Link from "next/link";

export default function Home() {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      description: "Perfect for small schools",
      features: [
        "Up to 200 Students",
        "Student Management",
        "Attendance Tracking",
        "Fee Management",
        "Parent Portal",
        "Email Support",
      ],
      button: "Start Free Trial",
      featured: false,
    },
    {
      name: "Growth",
      price: "₹2499",
      description: "Most Popular",
      features: [
        "Up to 1000 Students",
        "Attendance & Academics",
        "Exam Management",
        "Timetable Management",
        "Transport Management",
        "Teacher Portal",
        "Parent App",
        "Priority Support",
      ],
      button: "Get Started",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large institutions",
      features: [
        "Unlimited Students",
        "Multi-Branch Support",
        "Custom Branding",
        "Dedicated Account Manager",
        "API Access",
        "Advanced Analytics",
        "Custom Integrations",
        "24/7 Support",
      ],
      button: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-violet-600">SchoolGrid</h1>

          <nav className="hidden gap-8 md:flex">
            <Link
              href="#features"
              className="text-slate-700 hover:text-violet-600"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-slate-700 hover:text-violet-600"
            >
              Pricing
            </Link>
            <Link href="#faq" className="text-slate-700 hover:text-violet-600">
              FAQ
            </Link>
            <Link
              href="/login"
              className="text-slate-700 hover:text-violet-600"
            >
              Login
            </Link>
          </nav>

          <Link
            href="/register-school"
            className="rounded-full bg-violet-600 px-5 py-2 text-white hover:bg-violet-700"
          >
            Book Demo
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex rounded-full bg-amber-400 px-4 py-1 text-sm font-semibold text-black">
                Premium School Management SaaS
              </div>

              <h1 className="text-5xl font-bold leading-tight md:text-6xl">
                The Complete School Management Platform
              </h1>

              <p className="mt-6 max-w-xl text-lg text-violet-100">
                Manage students, attendance, fees, academics, teachers, parents,
                and communication from one secure cloud platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/register-school"
                  className="rounded-full bg-white px-8 py-4 font-semibold text-violet-700"
                >
                  Start 14-Day Free Trial
                </Link>

                <Link
                  href="/register-school"
                  className="rounded-full border border-white px-8 py-4 font-semibold"
                >
                  Book Demo
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white/10 p-5">
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p>Schools</p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <h3 className="text-3xl font-bold">25K+</h3>
                  <p>Students</p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <h3 className="text-3xl font-bold">99.9%</h3>
                  <p>Uptime</p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <h3 className="text-3xl font-bold">24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Everything Your School Needs
            </h2>

            <p className="mt-4 text-slate-600">
              Powerful modules designed for modern educational institutions.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Student Management",
              "Attendance Tracking",
              "Fee Management",
              "Examination System",
              "Teacher Portal",
              "Parent Portal",
              "Transport Management",
              "Analytics & Reports",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-semibold text-slate-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Why Schools Choose SchoolGrid
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-6 text-center">
              <h3 className="font-bold">Multi-Tenant SaaS</h3>
              <p className="mt-2 text-sm text-slate-600">
                Dedicated environment for every school.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center">
              <h3 className="font-bold">Secure Cloud</h3>
              <p className="mt-2 text-sm text-slate-600">
                Enterprise-grade security.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center">
              <h3 className="font-bold">Role-Based Access</h3>
              <p className="mt-2 text-sm text-slate-600">
                Admin, Teacher, Parent & Student.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6 text-center">
              <h3 className="font-bold">Fast Setup</h3>
              <p className="mt-2 text-sm text-slate-600">
                Go live within days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Simple Pricing</h2>

            <p className="mt-4 text-slate-300">
              Flexible plans for every school size.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 ${
                  plan.featured ? "scale-105 bg-violet-600" : "bg-slate-800"
                }`}
              >
                {plan.featured && (
                  <div className="mb-4 inline-block rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-black">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-3xl font-bold">{plan.name}</h3>

                <p className="mt-2 text-slate-200">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span>/month</span>}
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <button className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-black">
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">Trusted by Schools</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-8 shadow">
                <p className="text-slate-600">
                  "SchoolGrid transformed our administration process and reduced
                  paperwork significantly."
                </p>

                <h4 className="mt-4 font-bold">Principal</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Is there a free trial?</h3>
              <p className="mt-2 text-slate-600">
                Yes, every school gets a 14-day free trial.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Do you provide data migration?</h3>
              <p className="mt-2 text-slate-600">
                Yes, migration assistance is included.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Is support included?</h3>
              <p className="mt-2 text-slate-600">
                Yes, all plans include support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-600 py-24 text-center text-white">
        <h2 className="text-5xl font-bold">Ready to Modernize Your School?</h2>

        <p className="mt-4 text-lg">
          Join hundreds of schools already using SchoolGrid.
        </p>

        <Link
          href="/register-school"
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-violet-600"
        >
          Start Free Trial
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h3 className="text-2xl font-bold text-white">SchoolGrid</h3>

          <p className="mt-2">The complete school management solution.</p>

          <p className="mt-6 text-sm">
            © {new Date().getFullYear()} SchoolGrid. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

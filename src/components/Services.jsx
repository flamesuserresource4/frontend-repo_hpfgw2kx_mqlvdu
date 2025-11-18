export default function Services() {
  const services = [
    {
      title: "End-of-life Panel Recycling",
      desc: "Mechanical and thermal processes to recover glass, aluminum, silicon, and precious metals.",
    },
    {
      title: "On-site Collection & Logistics",
      desc: "Secure pickup across the region with compliant transport and tracking.",
    },
    {
      title: "Audit & Compliance",
      desc: "Certificates, WEEE documentation, and full chain-of-custody reporting.",
    },
    {
      title: "Bulk & B2B Programs",
      desc: "Tailored contracts for installers, utilities, and decommissioning projects.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">What we do</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">From pickup to certified recycling, we manage the entire lifecycle of photovoltaic modules.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="h-full rounded-xl border border-emerald-400/20 bg-slate-800/40 p-5 text-slate-100">
              <h3 className="font-semibold text-emerald-300">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

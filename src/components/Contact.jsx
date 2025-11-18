import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    consent: true,
  });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  async function submit(e) {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });
    try {
      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus({ type: "success", msg: "Thanks! We'll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "", consent: true });
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white">Request a quote</h2>
        <p className="mt-2 text-slate-300">Tell us about your panels and we’ll prepare a recycling plan.</p>

        <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <input className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" placeholder="Company" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
          <input className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 sm:col-span-2" placeholder="Service of interest" value={form.service} onChange={e=>setForm({...form, service:e.target.value})} />
          <textarea className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 sm:col-span-2" rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />

          <div className="sm:col-span-2 flex items-center gap-3 text-slate-300">
            <input type="checkbox" checked={form.consent} onChange={e=>setForm({...form, consent:e.target.checked})} />
            <span>I agree to be contacted about my request.</span>
          </div>

          <div className="sm:col-span-2 flex items-center gap-4">
            <button disabled={status.type==="loading"} className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition disabled:opacity-60">
              {status.type === "loading" ? "Sending..." : "Send request"}
            </button>
            {status.type !== "idle" && (
              <span className={
                status.type === "success" ? "text-emerald-400" : status.type === "error" ? "text-red-400" : "text-slate-300"
              }>
                {status.msg}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

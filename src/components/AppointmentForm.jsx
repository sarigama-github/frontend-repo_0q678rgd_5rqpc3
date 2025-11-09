import { useState } from "react";
import { CalendarDays, User, Mail, Phone } from "lucide-react";

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", notes: "" });
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // In a full app this would POST to the backend. For now, simulate success.
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setForm({ name: "", email: "", phone: "", date: "", notes: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="appointment" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Book an appointment</h2>
            <p className="mt-2 text-slate-600">Choose a date and we’ll match you with the right specialist.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Same‑day and next‑day slots</li>
              <li>• Virtual and in‑clinic visits</li>
              <li>• Insurance accepted</li>
            </ul>
          </div>
          <form onSubmit={submit} className="rounded-2xl bg-white p-6 shadow border border-slate-200">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-slate-700 flex items-center gap-2"><User className="h-4 w-4"/> Full name</span>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Jane Doe" />
              </label>
              <label className="block text-sm">
                <span className="text-slate-700 flex items-center gap-2"><Mail className="h-4 w-4"/> Email</span>
                <input name="email" type="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="jane@email.com" />
              </label>
              <label className="block text-sm">
                <span className="text-slate-700 flex items-center gap-2"><Phone className="h-4 w-4"/> Phone</span>
                <input name="phone" value={form.phone} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="(555) 123‑4567" />
              </label>
              <label className="block text-sm">
                <span className="text-slate-700 flex items-center gap-2"><CalendarDays className="h-4 w-4"/> Preferred date</span>
                <input name="date" type="date" value={form.date} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </label>
            </div>
            <label className="block text-sm mt-4">
              <span className="text-slate-700">Notes</span>
              <textarea name="notes" value={form.notes} onChange={onChange} rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Describe your concern" />
            </label>
            <button disabled={status === "loading"} className="mt-6 inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white font-medium shadow hover:bg-teal-700 transition-colors w-full">
              {status === "loading" ? "Booking..." : status === "success" ? "Booked!" : "Confirm booking"}
            </button>
            {status === "error" && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

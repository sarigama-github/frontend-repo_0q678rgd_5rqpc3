import { HeartPulse, Brain, Baby, Syringe, Activity, TestTubes } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Cardiology", desc: "Heart health screening, EKG, cholesterol management." },
  { icon: Brain, title: "Neurology", desc: "Migraine clinic, sleep studies, epilepsy care." },
  { icon: Baby, title: "Pediatrics", desc: "Well‑child visits, vaccinations, urgent care." },
  { icon: Syringe, title: "Immunizations", desc: "Flu, COVID‑19, travel vaccines and boosters." },
  { icon: Activity, title: "Physiotherapy", desc: "Rehab programs and sports medicine." },
  { icon: TestTubes, title: "Lab & Imaging", desc: "On‑site labs, X‑ray, ultrasound, and MRI." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Our medical services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Integrated, patient‑first care delivered by board‑certified specialists.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

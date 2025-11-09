import { Stethoscope, CalendarDays, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-sky-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Compassionate healthcare for every family
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Same‑day appointments, 24/7 telemedicine, and specialists across
              cardiology, pediatrics, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#appointment" className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white font-medium shadow hover:bg-teal-700 transition-colors">
                Book an appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-teal-700 font-medium ring-1 ring-slate-200 hover:ring-teal-300 transition-all">
                Explore services
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-2 text-slate-700"><Stethoscope className="h-4 w-4 text-teal-600"/> Primary care</div>
              <div className="flex items-center gap-2 text-slate-700"><CalendarDays className="h-4 w-4 text-teal-600"/> 24/7 booking</div>
              <div className="flex items-center gap-2 text-slate-700"><ShieldCheck className="h-4 w-4 text-teal-600"/> HIPAA secure</div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white ring-1 ring-slate-200 shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1470&auto=format&fit=crop"
                alt="Doctors"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

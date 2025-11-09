import { Hospital, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-teal-700 font-semibold">
            <Hospital className="h-6 w-6" />
            <span>MedicaCare</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-teal-700 transition-colors">Services</a>
            <a href="#doctors" className="hover:text-teal-700 transition-colors">Doctors</a>
            <a href="#appointment" className="hover:text-teal-700 transition-colors">Book</a>
          </nav>
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-full bg-teal-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-teal-700 transition-colors">
            <Phone className="h-4 w-4" />
            Call us
          </a>
        </div>
      </div>
    </header>
  );
}

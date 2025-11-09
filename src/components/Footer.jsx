import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} MedicaCare. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" aria-label="Facebook" className="hover:text-teal-700"><Facebook className="h-5 w-5"/></a>
            <a href="#" aria-label="Twitter" className="hover:text-teal-700"><Twitter className="h-5 w-5"/></a>
            <a href="#" aria-label="Instagram" className="hover:text-teal-700"><Instagram className="h-5 w-5"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

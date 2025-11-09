import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

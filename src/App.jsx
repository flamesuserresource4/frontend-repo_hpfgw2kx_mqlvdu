import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-emerald-400/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500" />
            <span className="font-semibold text-white">MKW Tartak</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-emerald-400/10 py-10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} MKW Tartak — Solar Panel Recycling</p>
          <p className="text-slate-500 text-sm">WEEE & ISO 14001 compliant</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
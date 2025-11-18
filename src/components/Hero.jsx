import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/30 via-teal-700/20 to-slate-900" />
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            >
              MKW Tartak
              <span className="block text-emerald-300">Solar Panel Recycling</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-lg text-emerald-100/90"
            >
              We give solar panels a second life through safe, efficient, and certified recycling.
              Reduce waste, recover value, and meet regulatory requirements with a trusted partner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition">
                Get a Quote
              </a>
              <a href="#services" className="px-6 py-3 rounded-xl border border-emerald-400/40 text-emerald-200 hover:bg-emerald-400/10 transition">
                Explore Services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-emerald-400/20 p-1">
              <div className="h-full w-full rounded-xl bg-slate-900 p-6 flex items-center justify-center text-center">
                <div>
                  <p className="text-emerald-300 font-semibold">Certified WEEE & ISO 14001</p>
                  <p className="mt-2 text-emerald-100/90">Collection • Dismantling • Material Recovery • Documentation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

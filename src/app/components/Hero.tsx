"use client"
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-4 tracking-tight">
          Md. Musfiqur Rahman
        </h1>
        <p className="text-2xl md:text-3xl text-slate-700 font-light mb-2">
          Data Scientist
        </p>
        <p className="text-xl md:text-2xl text-slate-600 font-light mb-8">
          Transforming data into actionable insights
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-all duration-300 font-light"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-slate-800 text-slate-800 rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300 font-light"
          >
            View Work
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </a>
    </section>
  );
}

"use client"
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-light text-slate-300">
          &copy; {new Date().getFullYear()} Data Scientist Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

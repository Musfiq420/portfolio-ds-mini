"use client"
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-light text-slate-800 mb-12 text-center">Contact</h2>
        <div className="bg-slate-50 p-10 rounded-lg">
          <p className="text-center text-slate-600 text-lg mb-8">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mrifat46@gmail.com"
              target='_blank'
              className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <Mail className="w-6 h-6 text-slate-800" />
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="text-slate-800">mrifat46@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/md-musfiqur-rahman-86999a12a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <Linkedin className="w-6 h-6 text-slate-800" />
              <div>
                <p className="text-sm text-slate-500">LinkedIn</p>
                <p className="text-slate-800">linkedin.com/in/md-musfiqur-rahman-86999a12a</p>
              </div>
            </a>
            <a
              href="https://github.com/Musfiq420"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <Github className="w-6 h-6 text-slate-800" />
              <div>
                <p className="text-sm text-slate-500">GitHub</p>
                <p className="text-slate-800">github.com/Musfiq420</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
              <MapPin className="w-6 h-6 text-slate-800" />
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="text-slate-800">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

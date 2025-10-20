"use client"
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'BSc Engineering in Industrial and Production Engineering',
    institution: 'Shahjalal University of Science and Technology',
    period: '2015 - 2020',
    details: 'Achieved CGPA: 2.86 out of 4.00.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Gurudayal Govt. College',
    period: '2012 - 2014',
    details: 'Achieved GPA: 4.70 out of 5.00',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-light text-slate-800 mb-12 text-center">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-3 top-0 bg-slate-800 rounded-full p-2">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-2xl font-light text-slate-800 mb-1">{edu.degree}</h3>
                <p className="text-slate-500 mb-2">{edu.institution}</p>
                <p className="text-sm text-slate-400 mb-4">{edu.period}</p>
                <p className="text-slate-500 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

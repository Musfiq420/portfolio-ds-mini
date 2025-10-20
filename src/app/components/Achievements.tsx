"use client"
import { Award, Medal, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: 'Data Scientist: Machine Learning Specialist',
    issuer: 'Coodecademy',
    date: '2025',
    type: 'certification',
    certificateUrl: 'https://www.codecademy.com/profiles/musfiqgildan/certificates/8e9e59de3f924b33ad2371faf667129b',
  },
  {
    title: 'Data Scientist: Natural Language Processing Specialist',
    issuer: 'Coodecademy',
    date: '2025',
    type: 'certification',
    certificateUrl: 'https://www.codecademy.com/profiles/musfiqgildan/certificates/9c35fed4f15a487385d52456712e0da9',
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Coursera',
    date: '2025',
    type: 'certification',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/MRLANKBZQC22',
  },
  // {
  //   title: 'Associate AI Engineer for Developers',
  //   issuer: 'DataCamp',
  //   date: '2025',
  //   type: 'certification',
  //   certificateUrl: '#',
  // },
  // {
  //   title: 'Kaggle Competition - Top 5%',
  //   issuer: 'Kaggle',
  //   date: '2021',
  //   type: 'achievement',
  //   certificateUrl: '#',
  // },
  // {
  //   title: 'Data Science Professional Certificate',
  //   issuer: 'IBM',
  //   date: '2020',
  //   type: 'certification',
  //   certificateUrl: '#',
  // },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-light text-slate-800 mb-12 text-center">
          Achievements & Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-slate-800 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3 flex-1">
                {item.type === 'certification' ? (
                  <Award className="w-6 h-6 text-slate-800 flex-shrink-0 mt-1" />
                ) : (
                  <Medal className="w-6 h-6 text-slate-800 flex-shrink-0 mt-1" />
                )}
                <div>
                  <h3 className="text-lg font-light text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.issuer}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <p className="text-slate-400 text-sm">{item.date}</p>
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-600 hover:text-slate-800 transition-colors text-sm font-light"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

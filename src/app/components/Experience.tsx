"use client"
import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: 'Business Intelligence Analyst',
    company: 'Gildan Inc.',
    period: 'Aug 2023 - Present',
    description: 'Developed and automated end-to-end data and machine learning solutions for manufacturing. Built predictive models and AI-driven dashboards that optimized production efficiency, reduced downtime, and improved data-driven decision-making.',
    details: [
  'Developed and automated ETL pipelines from SQL Server (Orgatex) to Snowflake using GitHub Actions, enabling continuous data integration for advanced analytics and machine learning workflows',
  'Built and deployed ML solutions in manufacturing, including predictive models and analytical tools to improve production efficiency',
  'Predicted the relationship between jet machine downtime and color service machine performance',
  'Built ML models to predict dyeing color categories before and after production',
  'Applied EDA, correlation analysis, and predictive modeling to identify root causes of inefficiency',
  'Designed a machine learning–based tool to dynamically predict and optimize dyeing machine allocation',
  'Designed and deployed AI-driven dashboards that transformed raw manufacturing data into predictive insights, supporting faster and more accurate operational decisions'
]

  },
  {
    title: 'Executive - Industrial Engineering',
    company: 'Square Fashions Ltd.',
    period: 'June 2022 - July 2023',
    description: 'Developed and managed end-to-end data systems using JavaScript and PostgreSQL. Designed relational databases, performed analytical reporting, and created visual dashboards that improved data integrity and enhanced decision-making across operations.',
    details: [
  'Developed an integrated data collection, management, and visualization system using JavaScript and PostgreSQL',
  'Designed relational database structures, including schema and ER diagrams, to support analytical needs and ensure data integrity',
  'Analyzed data to support decision-making processes across operations and production',
  'Created insightful data visualizations and reports using charts and graphs to effectively communicate findings to stakeholders'
]

  },
  // {
  //   title: 'Junior Executive - Industrial Engineering',
  //   company: 'Desh Garments Ltd.',
  //   period: 'Sep 2021 - May 2022',
  //   description: 'Performed exploratory data analysis and created interactive dashboards. Supported senior team members in developing statistical models.',
  //   details: [
  //     'Conducted exploratory data analysis on customer behavior datasets',
  //     'Created 15+ interactive Tableau dashboards for business stakeholders',
  //     'Performed statistical hypothesis testing to validate business assumptions',
  //     'Automated data quality checks reducing manual review time by 60%',
  //     'Assisted in developing regression models for sales forecasting'
  //   ]
  // },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-light text-slate-800 mb-12 text-center">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-3 top-0 bg-slate-800 rounded-full p-2">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-slate-800 mb-1">{exp.title}</h3>
                    <p className="text-slate-500 mb-2">{exp.company}</p>
                    <p className="text-sm text-slate-400 mb-4">{exp.period}</p>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                  <button
                    className="ml-4 p-2 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                  >
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    )}
                  </button>
                </div>

                {expandedIndex === index && (
                  <div className="mt-6 pt-6 border-t border-slate-200 animate-fadeIn">
                    <h4 className="text-lg font-light text-slate-800 mb-3">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-2">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-slate-600 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

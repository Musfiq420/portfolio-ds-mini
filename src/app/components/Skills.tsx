"use client"
const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'SQL', 'Javascript', 'Dart', 'C#'],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Keras'],
  },
  {
    category: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'SciPy', 'Statistical Modeling', 'A/B Testing'],
  },
  {
    category: 'Visualization',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
  },
  {
    category: 'Big Data',
    skills: ['Snowflake', 'Talend'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Google Cloud', 'Git'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-light text-slate-800 mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-light text-slate-800 mb-4 border-b border-slate-200 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

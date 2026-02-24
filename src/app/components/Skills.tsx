"use client"
const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'SQL', 'Javascript', 'Dart', 'C#'],
  },
  {
    category: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Keras', 
             'Regression', 'Classification', 'Predictive Modeling', 
             'Feature Engineering', 'OCR (Tesseract)', 'Prompt Engineering'],
  },
  {
    category: 'Deep Learning & NLP',
    skills: ['BERT', 'BiLSTM', 'Transformers', 'Word2Vec', 'Bangla NLP', 
             'RAG (Retrieval-Augmented Generation)', 'LLMs (Groq, OpenAI APIs)', 
             'LangChain', 'Pydantic'],
  },
  {
    category: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'SciPy', 'Statistical Modeling', 'A/B Testing', 'EDA'],
  },
  {
    category: 'Visualization & BI',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI', 'Streamlit'],
  },
  {
    category: 'Web / Full-Stack Development',
    skills: ['Next.js', 'Django', 'FastAPI', 'REST APIs', 'Frontend (React/JavaScript)',
             'Backend (Python/Django/FastAPI)', 'API Integration', 'OpenAI API',
             'Web Deployment', 'Vercel / Hosting'],
  },
  {
    category: 'Big Data & ETL',
    skills: ['Snowflake', 'Talend', 'ETL pipelines', 'Data Warehousing', 
             'Pinecone (Vector Database)', 'Vector Search'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Google Cloud', 'Git', 'GitHub Actions', 'Docker', 'CI/CD', 
             'Hugging Face Spaces', 'AWS (EC2)', 'Nginx', 'Linux Server Management'], // Added Nginx & Linux
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

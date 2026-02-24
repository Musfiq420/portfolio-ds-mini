"use client"
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Conceptiq',
    description: 'Full-stack ed-tech platform. Backend deployed on AWS EC2 using Docker & Nginx reverse proxy. Integrated OpenAI API for content generation.', // Updated description
    tags: ['Next.js', 'Django', 'OpenAI API', 'AWS', 'Docker', 'Nginx', 'Full-Stack'], // Updated tags
    github: 'https://github.com/Musfiq420/Conceptiq-frontend',
    demo: 'https://conceptiq.io/'
  },
  {
    title: 'AI MCQ Test Generator',
    description: 'A full-stack MCQ generator using FastAPI and Next.js. Features OCR (Tesseract), RAG with Pinecone/LangChain, and Prompt Chaining for high-quality question generation.',
    tags: ['FastAPI', 'LangChain', 'Pinecone', 'OCR', 'Next.js', 'Docker', 'OpenAI'],
    github: 'https://github.com/Musfiq420/ai-mcq-test-generator-fastapi-backend', 
    demo: 'https://ai-mcq-test-generator.vercel.app/', 
  },
  {
    title: 'Aquaculture Data Analysis and Prediction',
    description: 'Water quality data from Montería, Colombia is analyzed to track temperature, pH, and dissolved oxygen. A machine learning model predicts turbidity (water clarity).',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit'],
    github: 'https://github.com/Musfiq420/aquaculture-prediction',
    demo: 'https://aquaculture-prediction.streamlit.app/',
  },
  {
    title: 'A Symptom to Disease Model using BERT',
    description: 'Built a Symptom-to-Disease prediction model using BERT, achieving 94% accuracy. NLP preprocessing, EDA, and model comparison across ML, BiLSTM, and BERT.',
    tags: ['Python', 'BERT', 'NLTK', 'BiLSTM', 'NLP'],
    github: 'https://www.kaggle.com/code/mdmusfiqri/a-symptom-to-disease-model-using-bert',
  },
  {
    title: 'Extrovert vs Introvert Personality Predictor',
    description: 'A machine learning project predicting Introvert or Extrovert based on behavioral traits. Uses Random Forest/XGBoost with 92%+ accuracy and a Streamlit app for real-time predictions.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit'],
    github: 'https://github.com/Musfiq420/personality-prediction',
    demo: 'https://personality-prediction-123.streamlit.app/',
  },
  {
    title: 'Depression Prediction',
    description: 'Developed a depression classifier using XGBoost, achieving 98.3% accuracy. Implemented feature encoding, scaling, and imbalance handling with scikit-learn and Python.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit'],
    github: 'https://www.kaggle.com/code/mdmusfiqri/depression-professional-prediction-xgboost-98',
  },
  {
    title: 'Bangla NLP: Symptoms Analysis',
    description: 'Applied Bangla NLP to RuqyahBD Facebook posts to detect mental, physical, and spiritual symptoms, using Word2Vec and clustering for thematic analysis.',
    tags: ['Python', 'BNLP', 'matplotlib', 'BengaliWord2Vec', 'wordcloud'],
    github: 'https://www.kaggle.com/code/mdmusfiqri/ruqyahbd-bangla-nlp-symptoms-analysis-word-embed',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-light text-slate-800 mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-light text-slate-800 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github?<a
                  href={project.github} target="_blank"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">Code</span>
                </a>:null}
                {project.demo?<a
                  href={project.demo} target="_blank"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Demo</span>
                </a>:null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

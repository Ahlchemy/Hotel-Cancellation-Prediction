import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../layout/Section';
import { Code2, Database, Brain, LineChart, Layout, Server, GitBranch, FileCode } from 'lucide-react';

const techCategories = [
  {
    title: 'Data Science',
    icon: Brain,
    color: 'primary',
    tools: [
      { name: 'Python', description: 'Core programming language' },
      { name: 'Pandas', description: 'Data manipulation & analysis' },
      { name: 'NumPy', description: 'Numerical computing' },
      { name: 'Scikit-learn', description: 'Machine learning models' },
    ],
  },
  {
    title: 'Visualization',
    icon: LineChart,
    color: 'amber',
    tools: [
      { name: 'Matplotlib', description: 'Static visualizations' },
      { name: 'Seaborn', description: 'Statistical graphics' },
      { name: 'Recharts', description: 'React chart library' },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'cyan',
    tools: [
      { name: 'React', description: 'UI component library' },
      { name: 'Vite', description: 'Build tool & dev server' },
      { name: 'Tailwind CSS', description: 'Utility-first styling' },
      { name: 'Framer Motion', description: 'Animations' },
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    color: 'success',
    tools: [
      { name: 'Jupyter Notebook', description: 'Interactive analysis' },
      { name: 'Git', description: 'Version control' },
      { name: 'VS Code', description: 'Code editor' },
    ],
  },
];

const skills = [
  'Machine Learning',
  'Classification Models',
  'Exploratory Data Analysis',
  'Feature Engineering',
  'Model Evaluation',
  'Cross-Validation',
  'Hyperparameter Tuning',
  'Data Visualization',
  'React Development',
  'Responsive Design',
  'Technical Writing',
  'Business Analytics',
];

const colorClasses = {
  primary: 'bg-primary-500/10 border-primary-500/30 text-primary-400',
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  success: 'bg-success-500/10 border-success-500/30 text-success-400',
};

export default function TechStack() {
  return (
    <Section id="tech" dark>
      <SectionHeader
        badge="Tech Stack"
        title="Tools & Technologies"
        subtitle="The complete toolkit used to build this end-to-end data science project."
      />

      {/* Tech Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className={`p-3 rounded-xl border w-fit mb-4 ${colorClasses[category.color]}`}>
              <category.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-4">{category.title}</h3>
            <ul className="space-y-3">
              {category.tools.map((tool) => (
                <li key={tool.name} className="flex items-start gap-2">
                  <FileCode className="w-4 h-4 text-dark-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-sm">{tool.name}</span>
                    <p className="text-xs text-dark-500">{tool.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Skills Cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="text-xl font-semibold mb-6">Skills Demonstrated</h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="px-4 py-2 bg-dark-700 border border-dark-600 rounded-full text-sm hover:border-primary-500/50 hover:bg-primary-500/5 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Project Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card max-w-2xl mx-auto text-center"
      >
        <GitBranch className="w-8 h-8 text-primary-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">View the Code</h3>
        <p className="text-dark-400 mb-6">
          Explore the complete source code, Jupyter notebooks, and documentation for this project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Repository
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-700 hover:bg-dark-600 border border-dark-600 font-medium rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

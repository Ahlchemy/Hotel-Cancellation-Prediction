import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../layout/Section';
import { DollarSign, Users, Clock, TrendingDown, Target, Lightbulb, Database, Brain, AlertCircle } from 'lucide-react';
import { projectStory } from '../../data/insights';

const impacts = [
  {
    icon: DollarSign,
    title: 'Direct Revenue Loss',
    description: 'Unsold rooms after last-minute cancellations',
    amount: '$1.34M',
    detail: 'annually',
    color: 'danger',
  },
  {
    icon: TrendingDown,
    title: 'Discounting Costs',
    description: 'Last-minute price cuts to fill vacant rooms',
    amount: '$187K',
    detail: '14% avg discount',
    color: 'warning',
  },
  {
    icon: Users,
    title: 'Operational Overhead',
    description: 'Staff time managing cancellations & rebooking',
    amount: '$42K',
    detail: 'labor costs',
    color: 'primary',
  },
  {
    icon: Clock,
    title: 'Total Annual Impact',
    description: 'Combined cost of cancellation problem',
    amount: '$1.57M',
    detail: 'recoverable',
    color: 'danger',
  },
];

const methodology = [
  {
    step: '01',
    title: 'Data Collection',
    description: 'Gathered 9,069 historical booking records with 19 features',
    icon: Database,
  },
  {
    step: '02',
    title: 'Exploratory Analysis',
    description: 'Identified patterns and correlations in cancellation behavior',
    icon: Lightbulb,
  },
  {
    step: '03',
    title: 'Model Development',
    description: 'Built and compared Decision Trees and Random Forest classifiers',
    icon: Brain,
  },
  {
    step: '04',
    title: 'Evaluation & Insights',
    description: 'Selected best model and extracted actionable recommendations',
    icon: Target,
  },
];

export default function ProblemStatement() {
  const colorClasses = {
    danger: 'bg-danger-500/10 border-danger-500/30 text-danger-400',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    primary: 'bg-primary-500/10 border-primary-500/30 text-primary-400',
    info: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  };

  return (
    <Section id="problem" dark>
      <SectionHeader
        badge="The Challenge"
        title="Understanding the Problem"
        subtitle="Hotel booking cancellations create significant operational and financial challenges that require data-driven solutions."
      />

      {/* Industry Context Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 p-6 bg-danger-500/10 border border-danger-500/30 rounded-2xl"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-danger-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">INN Hotels is Underperforming Industry Benchmarks</h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-4">
              <div>
                <p className="text-3xl font-bold text-danger-400">32.8%</p>
                <p className="text-dark-300 text-sm">INN Hotels Cancellation Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-dark-200">24%</p>
                <p className="text-dark-300 text-sm">Industry Average (2024)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">+36%</p>
                <p className="text-dark-300 text-sm">Above Industry Benchmark</p>
              </div>
            </div>
            <p className="text-dark-300 text-sm mt-4">
              Leading hotel chains (Marriott, Hilton) have deployed ML-based cancellation prediction since 2019-2021,
              achieving 12-18% revenue uplift. INN Hotels has an opportunity to close this competitive gap.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Context */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-4">Business Context</h3>
          <p className="text-dark-300 leading-relaxed">
            {projectStory.context}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
          <p className="text-dark-300 leading-relaxed">
            {projectStory.challenge}
          </p>
        </motion.div>
      </div>

      {/* Financial Impact Cards */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold mb-6 text-center">Financial Impact of Cancellations</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover"
            >
              <div className={`p-3 rounded-xl border w-fit mb-4 ${colorClasses[impact.color]}`}>
                <impact.icon className="w-6 h-6" />
              </div>
              <p className={`text-2xl font-bold mb-1 ${
                impact.color === 'danger' ? 'text-danger-400' :
                impact.color === 'warning' ? 'text-amber-400' :
                'text-primary-400'
              }`}>
                {impact.amount}
              </p>
              <p className="text-xs text-dark-500 mb-2">{impact.detail}</p>
              <h4 className="font-semibold mb-1">{impact.title}</h4>
              <p className="text-sm text-dark-400">{impact.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-dark-400 text-sm mt-4">
          * Based on 32.8% cancellation rate, $150/night average, 3-night average stay, 9,069 annual bookings
        </p>
      </div>

      {/* Methodology */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-center">Solution Approach</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < methodology.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent z-0" />
              )}

              <div className="card-hover relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-bold text-primary-500/30">{step.step}</span>
                  <step.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-dark-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Objective */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 p-6 bg-primary-500/10 border border-primary-500/30 rounded-2xl text-center"
      >
        <Target className="w-8 h-8 text-primary-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Project Objective</h3>
        <p className="text-dark-300 max-w-2xl mx-auto">
          Build a machine learning model to predict which bookings are likely to be canceled,
          enabling the hotel to take proactive measures and recover up to <span className="text-success-400 font-semibold">$201,000 annually</span> through
          targeted intervention strategies.
        </p>
      </motion.div>
    </Section>
  );
}

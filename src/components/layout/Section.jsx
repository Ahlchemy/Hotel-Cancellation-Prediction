import { motion } from 'framer-motion';

export default function Section({
  id,
  children,
  className = '',
  dark = false,
  noPadding = false,
}) {
  return (
    <section
      id={id}
      className={`
        ${noPadding ? '' : 'py-16 md:py-24'}
        ${dark ? 'bg-dark-800/50' : ''}
        ${className}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, badge, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

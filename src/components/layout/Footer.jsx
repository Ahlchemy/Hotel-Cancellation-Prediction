import { Github, Linkedin, Mail, Hotel, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary-500/10">
                <Hotel className="w-5 h-5 text-primary-400" />
              </div>
              <span className="font-display font-bold text-lg">
                Hotel Cancellation Prediction
              </span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              A machine learning project predicting hotel booking cancellations
              to help hotels optimize revenue and inventory management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-dark-200">Project Sections</h3>
            <ul className="space-y-2">
              {['Problem', 'Data', 'Analysis', 'Models', 'Results', 'Insights'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-dark-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-dark-200">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-dark-400 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-dark-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-dark-400 group-hover:text-white" />
              </a>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              View Source Code
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Data Source Attribution */}
        <div className="mt-8 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <p className="text-dark-400 text-sm text-center">
            Dataset sourced from{' '}
            <a
              href="https://www.kaggle.com/datasets/youssefaboelwafa/hotel-booking-cancellation-prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Kaggle: Hotel Booking Cancellation Prediction
            </a>
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-center md:text-left">
              <p className="text-dark-200 font-medium">
                Dean Ahlgren
              </p>
              <p className="text-dark-500 text-sm">
                Data Science & Machine Learning
              </p>
            </div>
            <div className="flex items-center gap-2 text-dark-500 text-sm">
              <span>Powered by</span>
              <span className="text-primary-400">Advanced Machine Learning</span>
              <span>&bull;</span>
              <span className="text-dark-400">Real-time Prediction Capabilities</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-dark-500 text-xs">
            <p>
              &copy; {currentYear} Dean Ahlgren. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              <span>Created with</span>
              <span className="text-primary-400 font-medium">Claude Code</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

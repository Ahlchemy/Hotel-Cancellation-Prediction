import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ExecutiveSummary from './components/sections/ExecutiveSummary';
import ProblemStatement from './components/sections/ProblemStatement';
import DataOverview from './components/sections/DataOverview';
import EDASection from './components/sections/EDASection';
import ModelingSection from './components/sections/ModelingSection';
import ResultsSection from './components/sections/ResultsSection';
import InsightsSection from './components/sections/InsightsSection';
import TechStack from './components/sections/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />

      <main>
        <Hero />
        <ExecutiveSummary />
        <ProblemStatement />
        <DataOverview />
        <EDASection />
        <ModelingSection />
        <ResultsSection />
        <InsightsSection />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}

export default App;

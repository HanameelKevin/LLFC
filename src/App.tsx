import { PlanVisit } from './components/layout/plan-visit';
import { Navbar, Hero } from './components/layout/hero-nav';
import { AboutPastor, Ministries } from './components/layout/about-bento';
import { CreativeExperience } from './components/layout/creative-experience';
import { Giving, Footer } from './components/layout/giving-footer';

function App() {
  return (
    <main className="relative">
      {/* Global Texture Overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <AboutPastor />
      <PlanVisit />
      <CreativeExperience />
      <Ministries />
      <Giving />
      <Footer />
    </main>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import TechniqueIntelligence from "./components/TechniqueIntelligence";
import ResearchLab from "./components/ResearchLab";
import Academies from "./components/Academies";
import Professionals from "./components/Professionals";
import KnowledgeGraph from "./components/KnowledgeGraph";
import ProductPreview from "./components/ProductPreview";
import { Vision, FinalCTA, Footer } from "./components/Closing";

export default function Page() {
  return (
    <main className="min-h-screen bg-ink text-ivory">
      <Navbar />
      <Hero />
      <Problem />
      <TechniqueIntelligence />
      <ResearchLab />
      <Academies />
      <Professionals />
      <KnowledgeGraph />
      <ProductPreview />
      <Vision />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      
      <footer className="py-6 sm:py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center text-sm sm:text-base text-muted-foreground">
          <p>&copy; 2025 Samiksha Musale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

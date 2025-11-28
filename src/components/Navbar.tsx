import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-foreground font-poppins"
          >
            Samiksha Musale
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Skills
            </button>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/samiksha-musale/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/SamikshaMusale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:samikshamusale.11@gmail.com"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-blue"
            >
              Contact me
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-lg text-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("education")}
                    className="text-lg text-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    Education
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-lg text-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-lg text-foreground/80 hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>
                  
                  <div className="border-t border-border pt-6 mt-4">
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.linkedin.com/in/samiksha-musale/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href="https://github.com/SamikshaMusale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a
                        href="mailto:samikshamusale.11@gmail.com"
                        className="text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

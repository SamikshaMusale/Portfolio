import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import DeskScene from "./DeskScene";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight font-poppins">
            Shaping{" "}
            <span className="inline-block overflow-hidden h-[1.2em] align-middle">
              <motion.span
                animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="flex flex-col"
              >
                <span className="flex items-center gap-2 h-[1.2em]">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                  <span>Concepts</span>
                </span>
                <span className="flex items-center gap-2 h-[1.2em] text-secondary">
                  <span className="text-2xl sm:text-3xl md:text-5xl">💡</span>
                  <span>Ideas</span>
                </span>
                <span className="flex items-center gap-2 h-[1.2em] text-accent">
                  <span className="text-2xl sm:text-3xl md:text-5xl">⚙️</span>
                  <span>Logic</span>
                </span>
                <span className="flex items-center gap-2 h-[1.2em] text-primary">
                  <span className="text-2xl sm:text-3xl md:text-5xl">🚀</span>
                  <span>Projects</span>
                </span>
              </motion.span>
            </span>
            <br />
            into real Projects
            <br />
            that Deliver Results
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground">
            Hi, I am <span className="text-primary font-semibold">Samiksha Musale</span>, a Web Developer who loves building real, impactful applications.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow-blue font-semibold text-sm sm:text-base"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              SEE MY WORK
            </Button>
            <a
              href="/Samiksha_Musale_Resume.pdf"   // put the correct file path here
              download="Samiksha_Musale_Resume.pdf"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 neon-glow-blue font-semibold text-sm sm:text-base"
              >
                DOWNLOAD RESUME
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[400px] sm:h-[500px] md:h-[600px] relative hidden sm:block"
        >
          <DeskScene />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

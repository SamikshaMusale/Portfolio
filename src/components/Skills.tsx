import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Github,
  GitBranch,
  Figma,
  Globe,
} from "lucide-react";



import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGreensock,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiPython,
  SiTypescript,
  SiNetlify,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";




const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React JS", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "GSAP", icon: SiGreensock },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: Zap },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: Code2 },
      { name: "Vercel", icon: Globe },
      { name: "Netlify", icon: SiNetlify },
      { name: "Figma", icon: Figma },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-poppins">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => {
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="relative h-full min-h-[300px] sm:min-h-[350px] rounded-2xl bg-card/40 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 p-6 sm:p-8 flex flex-col hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                    <h3 className="text-xl sm:text-3xl font-bold font-poppins text-foreground mb-6 sm:mb-8 text-center">
                      {category.title}
                    </h3>
                    
                    <div className="flex-1 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-3 w-full">
                        {category.skills.map((skill, skillIndex) => {
                          const Icon = skill.icon;
                          return (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-full px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,217,255,0.3)] cursor-pointer">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                </div>
                                <span className="text-sm sm:text-lg font-medium font-poppins text-foreground/90 hover:text-primary transition-colors truncate">
                                  {skill.name}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

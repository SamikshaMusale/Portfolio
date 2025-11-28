import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    years: "2024 - 2028",
    grade: "CGPA: 9.45 (Till 1st Year)",
    institution: "Pimpri Chinchwad College of Engineering and Research (PCCOER), Pune",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    years: "2022 - 2024",
    grade: "Percentage: 81.17%",
    institution: "Sandip Junior College, Zodage, Nashik",
  },
  {
    degree: "Secondary School (10th Grade)",
    years: "2021 - 2022",
    grade: "Percentage: 95.8%",
    institution: "Podar International School, Dhule",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-poppins">Education</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Gradient line - hidden on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative sm:pl-24"
              >
                {/* Icon */}
                <div className="absolute left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-blue mb-4 sm:mb-0">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-primary transition-all duration-300 neon-glow-purple ml-16 sm:ml-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 font-poppins">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm sm:text-base">{edu.years}</span>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-accent mb-1">{edu.grade}</p>
                  <p className="text-sm sm:text-base text-muted-foreground italic">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

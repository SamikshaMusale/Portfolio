import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Figma } from "lucide-react";

const figmaProjects = [
  {
    title: "ABUN – SEO & Growth Marketing Toolkit",
    description: "A compact dashboard combining analytics, keyword tools, and marketing insights.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.figma.com/proto/u3dCHh7EbAUmR1uSUkzm7X/ABUN?node-id=11-180&t=Odh6347ONo4xoYQS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Restaurant Table Booking App",
    description: "A smooth reservation experience with real-time availability and effortless booking flow.",
    image: "https://plus.unsplash.com/premium_photo-1670984939638-01d1854a5d12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.figma.com/proto/D6xIPlt7LZFwZE0Rf9sqLV/Restaurant?node-id=0-1&t=N1ydT33OOe1T93bX-1",
  },
];

const technicalProjects = [
  {
    title: "EcoLens — Climate & Forest Insight Analyzer",
    description: "Visualizes forest loss, climate trends, and environmental correlations for any location.",
    image: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Tailwind CSS", "Vite", "API Integration", "JavaScript", "Charts", "TypeScript", "Supabase"],
    github: "https://github.com/SamikshaMusale/EcoLens",
    live: "https://ecolens.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "Showcasing creativity, code, and clean design—all in one place.",
    image: "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Tailwind CSS", "Vite", "GSAP", "TypeScript", "Framer Motion", "Three.js", "Emailjs"],
    github: "#",
    live: "https://plantitude.vercel.app/",
  },
  {
    title: "Plantitude — Your Plant Care Assistant",
    description: "A smart plant management website with search, care tips, and chatbot support.",
    image: "https://images.unsplash.com/photo-1673853233774-34a726cfc335?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["HTML", "Tailwind CSS", "Vite", "JavaScript", "API Integration", "Firebase"],
    github: "https://github.com/SamikshaMusale/Plantidude",
    live: "https://plantitude.vercel.app/",
  },
  {
    title: "Movie Finder",
    description: "A smooth movie discovery experience powered by live API data.",
    image: "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["HTML", "Tailwind CSS", "Vite", "JavaScript", "API Integration"],
    github: "#",
    live: "#",
  },
  {
    title: "Dumb Charades",
    description: "A web-based game with turn timers, scoring, and smooth player flow.",
    image: "https://plus.unsplash.com/premium_photo-1687854992749-e15cba89631d?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SamikshaMusale/DumbCharades",
    live: "https://dumbcharades.netlify.app/",
  },
  {
    title: "Tic Tac Toe",
    description: "A classic strategy game with a clean, modern interface.",
    image: "https://images.unsplash.com/photo-1692514355472-85d1a498e505?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SamikshaMusale/TicTacToe",
    live: "https://spb-tic-tac-toe.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-poppins">Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            A mix of UI/UX creations and full-stack technical builds.
          </p>
        </motion.div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary flex items-center gap-2">
            <Figma className="w-5 h-5 sm:w-6 sm:h-6" />
            Figma Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {figmaProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 neon-glow-blue overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-poppins">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Design
                    </Button> */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Design
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-secondary flex items-center gap-2">
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            Technical Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {technicalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-card border-border hover:border-secondary transition-all duration-300 neon-glow-purple overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-poppins">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-secondary text-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 border-secondary text-secondary hover:bg-secondary/10" onClick={() => window.open(project.github, "_blank")}>
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                      <Button className="flex-1 bg-secondary hover:bg-secondary/90" onClick={() => window.open(project.live, "_blank")}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

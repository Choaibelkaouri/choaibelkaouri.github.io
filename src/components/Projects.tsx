import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A simple portfolio to showcase my profile, skills, and projects. Built with clean design and responsive layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Manager Web App",
    description: "A small app to manage tasks (add, edit, delete, mark as done). Features include task filtering and local storage persistence.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. You can edit these details to showcase your actual work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:glow-effect flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10 flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 flex-1"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

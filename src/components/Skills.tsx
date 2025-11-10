import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "Java", "C", "Python (basic)"]
  },
  {
    title: "Web Development",
    icon: Layout,
    skills: ["HTML5", "CSS3", "Responsive Design"]
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React (basics)", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "PHP"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "SQL"]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:glow-effect"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

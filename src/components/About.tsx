import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <Card className="glass-card p-8 sm:p-10 border-primary/20 hover:border-primary/40 transition-all duration-300">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a professional bachelor's student in <span className="text-primary font-semibold">"Licence d'Université Spécialisée Génie Logiciel : Développement Frontend et Backend"</span>. 
            I am passionate about web development, both frontend and backend, and I enjoy building complete web applications from scratch. 
            Currently, I am focusing on personal projects to improve my skills, learn modern web technologies, 
            and prepare myself for future professional opportunities as a web developer.
          </p>
        </Card>
      </div>
    </section>
  );
};

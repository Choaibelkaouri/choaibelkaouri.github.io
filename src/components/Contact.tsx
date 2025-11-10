import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm currently looking for opportunities. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </p>
        
        <Card className="glass-card p-8 sm:p-10 border-primary/20">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center sm:text-left flex-grow">
                <h3 className="font-semibold mb-1">Email</h3>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  Send Email
                </a>
              </Button>
            </div>
            
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-4 text-center sm:text-left">Connect with me</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 flex-1"
                  asChild
                >
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 flex-1"
                  asChild
                >
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground mt-12">
          Designed & Built by CHOAIB EL KAOURI © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

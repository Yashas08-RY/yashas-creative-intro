import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
//import logo from '../logo.png';

const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Work Together</h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Have a project in mind? Let's create something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a href="mailto:ryyashas05@gmail.com" className="w-full sm:w-auto">
            <Button size="lg" className="w-full group">
              <Mail className="mr-2 h-5 w-5" />
              ryyashas05@gmail.com
            </Button>
          </a>
          <a href="https://github.com/Yashas08-RY" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full group">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/yashas-ry?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full group">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-border text-center text-muted-foreground flex justify-center items-center">
        <p>© 2025 Yashas R Y Portfolio. All rights reserved, Developed using AI</p>
        
        <p>.</p>
      </div>
    </section>
  );
};

export default Contact;

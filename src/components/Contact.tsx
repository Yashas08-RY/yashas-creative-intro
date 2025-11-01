import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Let's Work Together</h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Have a project in mind? Let's create something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button size="lg" className="w-full sm:w-auto group">
            <Mail className="mr-2 h-5 w-5" />
            hello@example.com
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto group">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto group">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
        <p>© 2024 Portfolio. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;

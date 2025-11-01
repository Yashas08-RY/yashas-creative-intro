import { Badge } from "@/components/ui/badge";

const skills = [
  "Python","Java","c","AI","Data Structures","Data Visualization",
  "HTML","CSS","JavaScript","TypeScript",
  "React","Next.js","Tailwind CSS","Git","GitHub",
  "DBMS","Operating Systems"
];

const Skills = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Skills & Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className="justify-center py-3 text-sm md:text-base hover:bg-primary/20 transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;

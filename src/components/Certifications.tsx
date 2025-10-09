import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "Coursera",
    icon: Award
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    icon: Award
  },
  {
    title: "Machine Learning with Python",
    issuer: "Coursera",
    icon: Award
  },
  {
    title: "Tableau Desktop Specialist",
    issuer: "LinkedIn Learning",
    icon: Award
  },
  {
    title: "Data Engineering on Google Cloud Platform",
    issuer: "Coursera",
    icon: Award
  }
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <CertCard
                key={index}
                certification={cert}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CertCard = ({ 
  certification, 
  index, 
  inView 
}: { 
  certification: typeof certifications[0]; 
  index: number; 
  inView: boolean;
}) => {
  const Icon = certification.icon;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={inView ? { opacity: 1, rotateY: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card className="p-6 text-center card-glow group h-full">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-lg font-bold mb-2 text-foreground">{certification.title}</h3>
        <p className="text-sm text-muted-foreground">{certification.issuer}</p>
      </Card>
    </motion.div>
  );
};

export default Certifications;

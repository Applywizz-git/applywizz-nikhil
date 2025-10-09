import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, BarChart, Brain, Shield, Table } from "lucide-react";
import { Provider } from "@radix-ui/react-toast";

const skillCategories = [
  {
    title: "Programming & Analytics",
    icon: Code,
    skills: ["Python (Pandas, NumPy, Scikit-learn, PySpark)", "R", "SAS"]
  },
  {
    title: "Databases & Querying",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Hive", "Snowflake", "PrestoSQL"]
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS (S3, Redshift, SageMaker)", "Azure (Databricks, Synapse)", "GCP (BigQuery)"]
  },
  {
    title: "Data Visualization & BI",
    icon: BarChart,
    skills: ["Tableau", "Power BI", "Looker", "Excel (VBA, Pivots)"]
  },
  {
    title: "Statistics & ML",
    icon: Brain,
    skills: ["Regression", "Hypothesis Testing", "Time Series", "A/B Testing", "Predictive Modeling", "Classification & Clustering"]
  },
  {
    title: "Healthcare & Compliance",
    icon: Shield,
    skills: ["CDISC (SDTM, ADaM)", "MedDRA", "CDASH", "HL7/FHIR", "HIPAA", "FDA"]
  },
  {
    title: "Productivity & Collaboration",
    icon: Table,
    skills: ["VBA", "Pivot Tables", "Jira", "Confluence", " Git "]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                category={category}
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

const SkillCard = ({ 
  category, 
  index, 
  inView 
}: { 
  category: typeof skillCategories[0]; 
  index: number; 
  inView: boolean;
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="p-6 h-full card-glow group">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-foreground">{category.title}</h3>
        
        <div className="space-y-2">
          {category.skills.map((skill, i) => (
            <div key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 rounded-full" />

          {/* Summary Paragraph */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Nikhil M is a Data Analyst with 8+ years of experience spanning healthcare, finance, and marketing. 
              He specializes in data analytics, business intelligence, and clinical/financial data management. 
              With deep expertise in SQL, Python, PySpark, and R, he builds automated ETL pipelines using AWS Glue, 
              Airflow, and Azure Data Factory, improving data quality and operational efficiency. He delivers 
              actionable insights using Tableau, Power BI, Looker, and advanced Excel, and applies statistical 
              modeling, predictive analytics, and time series forecasting to guide business decisions. His work 
              complies with CDISC, MedDRA, CDASH, and HIPAA/FDA standards, and he has a proven track record of 
              translating complex datasets into revenue-impacting insights.
            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Counter end={10} suffix="+" label="Projects" delay={0.2} inView={inView} />
            <Counter end={8} suffix="+" label="Years Experience" delay={0.4} inView={inView} />
            <Counter end={100} suffix="%" label="Satisfaction" delay={0.6} inView={inView} />
          </div>

          {/* Mini Highlights */}
          <div className="max-w-3xl mx-auto space-y-4">
            <Highlight 
              text="Cross-functional collaborator across Marketing, Finance, and Clinical teams" 
              delay={0.8} 
              inView={inView}
            />
            <Highlight 
              text="Expertise in predictive modeling and ETL automation" 
              delay={1} 
              inView={inView}
            />
            <Highlight 
              text="Strong compliance experience (HIPAA/FDA/CDISC)" 
              delay={1.2} 
              inView={inView}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Counter = ({ 
  end, 
  suffix, 
  label, 
  delay, 
  inView 
}: { 
  end: number; 
  suffix: string; 
  label: string; 
  delay: number; 
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-muted-foreground font-medium">{label}</div>
    </motion.div>
  );
};

const Highlight = ({ 
  text, 
  delay, 
  inView 
}: { 
  text: string; 
  delay: number; 
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex items-start gap-3"
    >
      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
      <p className="text-lg text-foreground">{text}</p>
    </motion.div>
  );
};

export default About;

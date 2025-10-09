import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Data Analyst",
    company: "Swift Strategic Solutions",
    location: "Boston, USA",
    period: "Nov 2024 – Present",
    achievements: [
      "Consolidated 10M+ POS & loyalty datasets using Python + SQL → found price elasticity patterns → +15% promotion ROI",
      "Automated AWS Glue + Snowflake pipelines → saved 42 hrs/month, improved readiness +35%",
      "Built Power BI dashboards (DAX + RLS) for 30+ district managers → real-time promotion monitoring",
      "Deployed uplift models (scikit-learn) → +18% conversion lift",
      "Enforced data validation in SQL/Snowflake → −30% errors, improved reporting reliability",
      "Led 12 cross-functional analytics initiatives → influenced $5M budget allocation",
      "Implemented Databricks time series forecasts → +20% inventory accuracy across 2,000+ stores",
      "Standardized Tableau frameworks → −22% inconsistent reporting"
    ]
  },
  {
    title: "Business Analyst",
    company: "WIPRO PVT LTD",
    location: "Karnataka, India",
    period: "Jan 2021 – Aug 2023",
    achievements: [
      "Translated requirements from 50+ stakeholders into Jira user stories → −28% rework",
      "Optimized 20M+ row SQL & Hive queries → −32% refresh time, near real-time dashboards",
      "Built Tableau drill-down dashboards → +20% quicker insights for leadership",
      "Validated 15 APIs via Postman/Python → +22% monthly finance accuracy",
      "Documented pipelines in Visio → −35% onboarding time",
      "Developed Python regression test framework for BI → −18% recurring errors",
      "Co-built Azure NLP Conversational BI Assistant → eliminated 38% ad-hoc requests",
      "Streamlined 40+ UAT sessions → −25% testing cycle time, improved adoption"
    ]
  },
  {
    title: "Data Analyst",
    company: "NTT DATA",
    location: "Gurgaon, India",
    period: "Jan 2021 – May 2022",
    achievements: [
      "Analyzed clinical trial & claims data (Python/R) → +12% model accuracy",
      "Standardized SQL pipelines → +5% market penetration",
      "Built R clustering segmentation models → +25% campaign ROI",
      "Delivered Tableau & SPSS dashboards → faster insights for 10+ stakeholders",
      "Competitor SWOT analysis → identified gaps → +1.7% revenue lift",
      "Explored utilization patterns → guided healthcare redesign",
      "Built logistic regression & survival models → +17% claims forecast accuracy",
      "Embedded HIPAA/FDA compliance in analytics workflows"
    ]
  },
  {
    title: "Data Platform Engineer",
    company: "American Express",
    location: "India",
    period: "Aug 2018 – Dec 2020",
    achievements: [
      "Built Spark+Python pipelines → −20% ETL time",
      "Hive data models on Hadoop → standardized feeds, improved BI accuracy",
      "Automated refresh with Airflow → −70% manual delays",
      "Optimized Redshift queries → −30% dashboard refresh time",
      "Python anomaly detection for financial data → −18% quality issues",
      "Migrated batch pipelines to AWS S3/Glue → scaled for 1 TB/month data",
      "Real-time Kafka streaming for fraud detection",
      "Embedded GDPR/PCI compliance in pipelines"
    ]
  },
  {
    title: "Clinical Data Analyst",
    company: "Avantsy Technologies Pvt Ltd",
    location: "Hyderabad, India",
    period: "Aug 2014 – June 2016",
    achievements: [
      "Standardized clinical data (SQL + Excel) → +10% enrollment accuracy",
      "Tableau dashboards for site performance → +25% compliance",
      "R segmentation → +15% retention",
      "Automated adverse event reporting → −70% manual effort",
      "SQL joins + Excel pivots → actionable insights",
      "R predictive dropout models → −12% attrition",
      "Python validation checks → −20% reporting errors",
      "Clinical insights → improved workflow & compliance"
    ]
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-16 rounded-full" />

          {/* Timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />

            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
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

const ExperienceCard = ({ 
  experience, 
  index, 
  inView 
}: { 
  experience: typeof experiences[0]; 
  index: number; 
  inView: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative mb-12 md:mb-16 ${isEven ? 'md:pr-1/2' : 'md:pl-1/2'}`}
    >
      <div className={`md:w-[calc(50%-2rem)] ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <Card className="p-6 card-glow">
          {/* Timeline Dot */}
          <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
          
          {/* Icon */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">{experience.title}</h3>
              <div className="text-primary font-semibold">{experience.company}</div>
              <div className="text-sm text-muted-foreground">{experience.location}</div>
              <div className="text-sm text-muted-foreground">{experience.period}</div>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-2 mt-4">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-secondary mt-1">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </motion.div>
  );
};

export default Experience;

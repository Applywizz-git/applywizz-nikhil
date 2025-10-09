import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Database, Users, Shield } from "lucide-react";

const projects = [
  {
    title: "Clinical Trial Patient Analytics Platform",
    icon: Users,
    image: "/clinical-analytics.png", 

    description: "Comprehensive patient data processing and predictive analytics system.",
    highlights: [
      "Processed 500K+ patient records (Python + SQL) → +18% reporting accuracy",
      "Built predictive models (R, Scikit-learn) for patient dropout",
      "Interactive Tableau dashboards for real-time trial monitoring",
    ],
    tags: ["Python", "R", "SQL", "Tableau", "Machine Learning"],
  },
  {
    title: "Retail Customer Behavior & Segmentation Engine",
    icon: Database,
    image:
      "/retail-segmentation.png",
    description: "Large-scale customer analytics and segmentation platform.",
    highlights: [
      "Ingested 20M+ transactional records (PySpark + SQL)",
      "K-Means clustering → +22% targeting efficiency",
      "Dynamic Power BI dashboards (DAX)",
      "Integrated with Azure ML for continuous model retraining",
    ],
    tags: ["PySpark", "SQL", "Power BI", "Azure ML", "Clustering"],
  },
  {
    title: "Financial Services Fraud Detection Pipeline",
    icon: Shield,
    image:
      "fraud-detection.png",
    description: "Real-time fraud detection and risk monitoring system.",
    highlights: [
      "Python + Spark + Hive ETL → −25% data latency",
      "Logistic Regression & Random Forest → +17% fraud detection accuracy",
      "Real-time Tableau & Power BI dashboards for risk teams",
    ],
    tags: ["Python", "Spark", "Hive", "ML", "Real-time Analytics"],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-16 rounded-full" />

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-16"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

  return (
    <Card className="h-[520px] flex flex-col p-0 overflow-hidden">
      {/* 🖼 Plain <img>, fixed height */}
      <div className="w-full h-40 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">
            {project.description}
          </p>

          <ul className="space-y-1 mb-3">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li
                key={i}
                className="text-xs text-muted-foreground flex items-start gap-2"
              >
                <span className="text-secondary mt-1">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Projects;

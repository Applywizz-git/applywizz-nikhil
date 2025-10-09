// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Card } from "@/components/ui/card";
// import { GraduationCap } from "lucide-react";

// const education = [
//   {
//     degree: "Masters in Business Analytics",
//     school: "Suffolk University, Sawyer Business School",
//     location: "Boston, MA"
//   },
//   {
//     degree: "MBA in Marketing & Finance",
//     school: "NALSAR University, DOMS School of Business",
//     location: "Hyderabad, India"
//   }
// ];

// const Education = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <section id="education" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
//             <span className="gradient-text">Education</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-16 rounded-full" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {education.map((edu, index) => (
//               <EducationCard
//                 key={index}
//                 education={edu}
//                 index={index}
//                 inView={inView}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// type EducationItem = {
//   degree: string;
//   school: string;
//   location: string;
// };

// const EducationCard = ({ 
//   education, 
//   index, 
//   inView 
// }: { 
//   education: EducationItem; 
//   index: number; 
//   inView: boolean;
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay: index * 0.2, duration: 0.6 }}
//     >
//       <Card className="p-6 card-glow h-full">
//         <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
//           <GraduationCap className="w-7 h-7 text-white" />
//         </div>
        
//         <h3 className="text-xl font-bold mb-2 text-foreground">{education.degree}</h3>
//         <p className="text-muted-foreground font-medium mb-1">{education.school}</p>
//         <p className="text-sm text-muted-foreground">{education.location}</p>
//       </Card>
//     </motion.div>
//   );
// };

// export default Education;

// src/components/Education.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const SCHOOLS = [
  {
    degree: "Masters in Business Analytics",
    school: "Suffolk University, Sawyer Business School",
    location: "Boston, MA",
  },
  {
    degree: "MBA in Marketing & Finance",
    school: "NALSAR University, DOMS School of Business",
    location: "Hyderabad, India",
  },
];

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Formal education and academic highlights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCHOOLS.map((ed, idx) => (
              <Card key={idx} className="p-6 card-glow h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{ed.degree}</h3>
                <p className="text-muted-foreground font-medium mb-1">{ed.school}</p>
                <p className="text-sm text-muted-foreground">{ed.location}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <SocialIcon
              icon={Linkedin}
              href="https://www.linkedin.com/in/nikhil-s-50a538141/"
              label="LinkedIn"
            />
            <SocialIcon
              icon={Github}
              href="https://nikhil-applywizz.vercel.app/"
              label="Portfolio"
            />
            <SocialIcon
              icon={Mail}
              href="mailto:nikhilmagsai17@gmail.com"
              label="Email"
            />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground pulse-glow">
              © {new Date().getFullYear()} Nikhil M. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top FAB */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </motion.div>
    </footer>
  );
};

const SocialIcon = ({ 
  icon: Icon, 
  href, 
  label 
}: { 
  icon: any; 
  href: string; 
  label: string;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "primary" | "dark";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    light: "bg-slate-50",
    primary: "bg-green-800",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        bgStyles[background],
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {children}
      </div>
    </section>
  );
}

export function AnimatedSection({ children, className, ...props }: SectionProps) {
  return (
    <Section className={className} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Section>
  );
}

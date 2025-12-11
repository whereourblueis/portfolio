"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

function getIconUrl(icon: string): string {
  const iconMap: Record<string, string> = {
    react: "react/react-original",
    nextjs: "nextjs/nextjs-original",
    typescript: "typescript/typescript-original",
    javascript: "javascript/javascript-original",
    html5: "html5/html5-original",
    css3: "css3/css3-original",
    tailwindcss: "tailwindcss/tailwindcss-original",
    java: "java/java-original",
    spring: "spring/spring-original",
    nodejs: "nodejs/nodejs-original",
    python: "python/python-original",
    mysql: "mysql/mysql-original",
    git: "git/git-original",
    github: "github/github-original",
    vscode: "vscode/vscode-original",
    docker: "docker/docker-original",
  };
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconMap[icon] || icon}.svg`;
}

interface SkillCardProps {
  name: string;
  icon: string;
  index: number;
}

function SkillCard({ name, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        y: -8,
        rotateY: 10,
        rotateX: 5,
      }}
      className="glass-card p-6 flex flex-col items-center gap-4 cursor-pointer group"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="w-14 h-14 relative"
        whileHover={{ scale: 1.2, rotateZ: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={getIconUrl(icon)}
          alt={name}
          fill
          className="object-contain drop-shadow-lg"
        />
      </motion.div>
      <span className="text-sm font-medium text-secondary group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; icon: string }>;
  color: string;
}

function SkillCategory({ title, skills, color }: SkillCategoryProps) {
  return (
    <ScrollReveal>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <h3 className="text-2xl font-bold">{title}</h3>
          <div
            className="flex-1 h-px opacity-20"
            style={{ backgroundColor: color }}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium mb-4 block">
              My Skills
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">기술 스택</span>
            </h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              다양한 프로젝트를 통해 익힌 기술들입니다
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Categories */}
        <SkillCategory
          title="Frontend"
          skills={skills.frontend}
          color="#6366f1"
        />
        <SkillCategory
          title="Backend"
          skills={skills.backend}
          color="#8b5cf6"
        />
        <SkillCategory
          title="Tools & Others"
          skills={skills.tools}
          color="#ec4899"
        />
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { projects } from '@/lib/data';
import { SectionHeader } from '@/components/ui-components';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const categories = [...new Set(projects.map((p) => p.category))];

  const filtered = activeFilter
    ? projects.filter((p) => p.category === activeFilter)
    : projects;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Portfolio"
          title="Projects & Solutions"
          description="Enterprise-grade solutions that solve real problems, reduce costs, and accelerate delivery at scale."
        />

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              !activeFilter
                ? 'bg-brand-600 text-white'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category === activeFilter ? null : category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-brand-600 text-white'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              layout
              className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Screenshot placeholder */}
              <div className="h-48 bg-gradient-to-br from-brand-500/10 to-rose-500/10 flex items-center justify-center border-b border-border">
                <div className="text-center text-muted-foreground">
                  <Globe className="w-10 h-10 mx-auto mb-2 opacity-50" />
                  <p className="text-xs">Screenshot Placeholder</p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300">
                    {project.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <a href="#" className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground" aria-label="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground" aria-label="Live Demo">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-red-600 dark:text-red-400">Problem:</span>
                      <p className="text-xs text-muted-foreground">{project.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">Solution:</span>
                      <p className="text-xs text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.outcomes.map((outcome) => (
                      <span key={outcome} className="flex items-center gap-1 text-xs text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-950/30 px-2 py-1 rounded">
                        <CheckCircle2 className="w-3 h-3" />
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience } from '@/lib/data';
import { SectionHeader } from '@/components/ui-components';

export default function ExperiencePage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          badge="Career Journey"
          title="Professional Experience"
          description="A progressive trajectory from associate engineer to senior technical leader — built on consistent delivery, technical depth, and measurable business impact."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((role, index) => (
              <motion.div
                key={`${role.title}-${role.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-brand-600 border-4 border-background shadow-lg" />

                <div className="glass-card p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{role.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-medium text-sm">
                          <Briefcase className="w-4 h-4" />
                          {role.company}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                          <MapPin className="w-3 h-3" />
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {role.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4">{role.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {role.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800/30"
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
      </div>
    </section>
  );
}

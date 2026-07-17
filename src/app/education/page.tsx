'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { education } from '@/lib/data';
import { SectionHeader } from '@/components/ui-components';

export default function EducationPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          badge="Academic Background"
          title="Education"
          description="A strong academic foundation in Information Systems and Computer Science, complemented by professional certifications."
        />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-brand-600 border-4 border-background shadow-lg" />

                <div className="glass-card p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950/50 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-brand-600 dark:text-brand-400 font-medium text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-foreground/70 text-sm mb-4">{edu.description}</p>

                  {edu.coursework.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 rounded-lg text-xs bg-muted text-muted-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

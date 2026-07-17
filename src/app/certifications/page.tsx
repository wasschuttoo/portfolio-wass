'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { certifications } from '@/lib/data';
import { SectionHeader } from '@/components/ui-components';

export default function CertificationsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          badge="Credentials"
          title="Professional Certifications"
          description="Industry-recognized certifications earned while delivering full-time — demonstrating commitment to continuous professional growth."
        />

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-8 md:p-10 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold">{cert.title}</h3>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>

                  <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mb-3">
                    Issued by {cert.issuer}
                  </p>

                  <p className="text-foreground/70 mb-4">{cert.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.verifyUrl}
                    className="inline-flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify Credential
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8 text-center"
        >
          <p className="text-muted-foreground">
            More certifications in progress — always learning, always growing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

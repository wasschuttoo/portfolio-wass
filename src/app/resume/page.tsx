'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Printer } from 'lucide-react';
import { SectionHeader } from '@/components/ui-components';
import { basePath } from '@/lib/utils';

export default function ResumePage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          badge="Resume"
          title="Download My CV"
          description="Get a comprehensive overview of my experience, skills, and achievements."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12"
        >
          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href={`${basePath}/cv/Wassil_Chuttoo_CV.pdf`}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-brand-600/25"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
            >
              <Printer className="w-5 h-5" />
              Print Version
            </button>
          </div>

          {/* Embedded PDF viewer */}
          <div className="border border-border rounded-2xl overflow-hidden bg-muted">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Wassil_Chuttoo_CV.pdf</span>
            </div>
            <iframe
              src={`${basePath}/cv/Wassil_Chuttoo_CV.pdf`}
              className="w-full h-[600px] md:h-[800px]"
              title="Wassil Chuttoo CV"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

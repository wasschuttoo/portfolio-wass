'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Mail,
  Trophy,
  TrendingUp,
  BarChart3,
  Zap,
  Code2,
  TestTube2,
  GitBranch,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { stats, experience, certifications, skills, projects, yearsOfExperience } from '@/lib/data';
import { AnimatedCounter, SectionHeader, ScrollToTop } from '@/components/ui-components';
import { basePath } from '@/lib/utils';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollToTop />

      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-100/80 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for opportunities</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Engineering{' '}
                <span className="gradient-text">Quality</span>
                <br />
                at Enterprise Scale
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Senior SDET architecting automation frameworks that accelerate delivery for millions of users. 
                I bridge the gap between bulletproof quality and rapid innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-brand-600/25"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </Link>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <a
                  href="https://linkedin.com/in/wassilchuttoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/wassilchuttoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:chelsea.fc.wass@hotmail.com"
                  className="p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Logo showcase */}
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-red-500/10 to-gray-900/10 dark:from-red-500/20 dark:to-gray-800/20 border border-red-200/30 dark:border-red-800/30 flex items-center justify-center backdrop-blur-sm">
                  <motion.img
                    src={`${basePath}/CW.png`}
                    alt="CW Logo"
                    className="w-64 h-auto object-contain drop-shadow-2xl"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center space-x-2"
                >
                  <TestTube2 className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium">Playwright Expert</span>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-2 flex items-center space-x-2"
                >
                  <Code2 className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium">Full-Stack</span>
                </motion.div>

                <motion.div
                  animate={{ y: [-3, 7, -3] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-1/2 -right-8 glass-card px-4 py-2 flex items-center space-x-2"
                >
                  <GitBranch className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium">CI/CD</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Achievements */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Highlights"
            title="Driving Impact at Scale"
            description="Key accomplishments that demonstrate my ability to deliver measurable business value through quality engineering."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: '3x Promoted in 3 Years',
                description: 'Fastest career progression track — Associate to Senior SDET — through consistent delivery and technical leadership.',
              },
              {
                icon: BarChart3,
                title: '40% Less Manual Effort',
                description: 'Automated regression pipelines in Azure DevOps, giving back hundreds of engineering hours per quarter.',
              },
              {
                icon: Zap,
                title: '30%+ Coverage Growth',
                description: 'Expanded framework coverage across high-risk user journeys, directly improving release confidence.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Projects"
            title="What I&apos;ve Built"
            description="Enterprise-grade solutions that solve real problems at scale."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md text-xs bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Tech Stack"
            title="Technologies I Work With"
            description={`A curated toolkit refined over ${yearsOfExperience}+ years of enterprise automation and full-stack development.`}
          />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {[
              'Playwright', 'C#', 'TypeScript', 'React', 'Java', 'Python',
              'Azure DevOps', 'Docker', 'Selenium', 'Git', 'SQL', 'Node.js',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                variants={fadeInUp}
                className="glass-card p-4 text-center hover:scale-105 transition-transform cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-100 to-rose-100 dark:from-brand-950/50 dark:to-rose-950/50 mx-auto mb-2 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <p className="text-sm font-medium">{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionHeader
            badge="Certifications"
            title="Professional Credentials"
            description="Industry-recognized certifications validating my expertise."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950/50 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.issuer} • {cert.date}
                </p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Experience */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Experience"
            title="Where I&apos;ve Made an Impact"
            description="A progressive career journey from associate engineer to senior technical leader."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {experience.slice(0, 3).map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="font-semibold">{role.title}</h3>
                  <span className="text-sm text-muted-foreground">{role.period}</span>
                </div>
                <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mb-3">
                  {role.company} • {role.location}
                </p>
                <p className="text-foreground/70 text-sm mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md text-xs bg-muted text-foreground/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/experience"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
            >
              <span>Full Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-rose-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Build Something{' '}
                <span className="gradient-text">Exceptional</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Whether you&apos;re looking for a quality engineering leader, automation architect, or a hybrid developer who delivers on both fronts — I&apos;d love to connect.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-brand-600/25"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://linkedin.com/in/wassilchuttoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl border border-border hover:bg-muted font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

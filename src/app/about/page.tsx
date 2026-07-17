'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, Target, Users, Sparkles, BookOpen, Coffee } from 'lucide-react';
import { SectionHeader } from '@/components/ui-components';
import { basePath } from '@/lib/utils';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 mb-6">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Person Behind the{' '}
                <span className="gradient-text">Code</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m Wassil Chuttoo — a Senior Software Developer in Test who believes that quality isn&apos;t a phase; 
                it&apos;s a culture. Based in Mauritius, I architect automation frameworks that give enterprise teams 
                the confidence to ship fast without sacrificing reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-brand-500/10 to-rose-500/10 border border-brand-200/30 dark:border-brand-800/30 flex items-center justify-center">
                <img src={`${basePath}/CW.png`} alt="Wassil Chuttoo" className="w-64 h-auto object-contain drop-shadow-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Story */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            badge="My Story"
            title="From Curious Tester to Quality Architect"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                My journey into software quality started at Accenture Technologies in 2021, where I discovered 
                that great software isn&apos;t just about writing code — it&apos;s about building systems that validate 
                every assumption, catch every edge case, and give teams unwavering confidence in their releases.
              </p>
              <p>
                Within weeks of joining Dayforce in 2022, I was building the foundational automation framework 
                from scratch — establishing patterns that the team still uses today. That appetite for impact 
                led to three promotions in under three years, taking me from Associate to Senior SDET — one of 
                the fastest progressions in the organization.
              </p>
              <p>
                Today, I architect the end-to-end automation strategy for a global HCM platform, lead a team of 
                5+ SDETs, and serve as a certified Scrum Master. But what I&apos;m most passionate about is the 
                intersection of development and quality — I&apos;m a hybrid developer who delivers production React 
                features alongside enterprise-grade test frameworks.
              </p>
              <p>
                I believe the best quality engineers aren&apos;t just testers — they&apos;re software architects who 
                happen to focus on reliability. They write production-quality code, understand system design, 
                and champion shift-left practices that prevent defects rather than just catching them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            badge="Philosophy"
            title="What Drives Me"
            description="The principles that guide my work and leadership."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Quality-First Mindset',
                description: 'I believe quality should be embedded from the first line of code, not bolted on at the end. Shift-left testing isn\'t a buzzword — it\'s how I work.',
              },
              {
                icon: Users,
                title: 'Servant Leadership',
                description: 'As a Scrum Master and team lead, I focus on removing blockers, amplifying my team\'s strengths, and creating environments where engineers thrive.',
              },
              {
                icon: Sparkles,
                title: 'Continuous Improvement',
                description: 'Whether it\'s earning certifications while working full-time or refactoring flaky tests, I\'m always pushing for better — incrementally and relentlessly.',
              },
              {
                icon: Heart,
                title: 'Empathy in Engineering',
                description: 'Great automation serves people — developers who need fast feedback, PMs who need confidence, and users who deserve reliability.',
              },
              {
                icon: BookOpen,
                title: 'Knowledge Sharing',
                description: 'I document everything I build, mentor teammates through pair programming, and believe that the best frameworks are the ones others can extend.',
              },
              {
                icon: Coffee,
                title: 'Pragmatic Innovation',
                description: 'I adopt new tools and patterns when they solve real problems — not for the sake of novelty. Every architectural decision should earn its complexity.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            badge="Quick Facts"
            title="At a Glance"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: MapPin, label: 'Location', value: 'Vacoas, Mauritius' },
              { icon: Calendar, label: 'Experience', value: '4+ years in Quality Engineering' },
              { icon: Users, label: 'Industry', value: 'Enterprise HCM (Human Capital Management)' },
              { icon: Target, label: 'Specialization', value: 'Test Automation Architecture' },
            ].map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-background"
              >
                <div className="p-2 rounded-lg bg-brand-100 dark:bg-brand-950/50">
                  <fact.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="font-medium">{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

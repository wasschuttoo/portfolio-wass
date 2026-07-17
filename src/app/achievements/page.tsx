'use client';

import { motion } from 'framer-motion';
import { Trophy, TrendingUp, BarChart3, Code2, Layers, Award } from 'lucide-react';
import { achievements } from '@/lib/data';
import { SectionHeader } from '@/components/ui-components';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  'trending-up': TrendingUp,
  'bar-chart': BarChart3,
  code: Code2,
  layers: Layers,
  award: Award,
};

export default function AchievementsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Milestones"
          title="Key Achievements"
          description="Measurable outcomes and career milestones that demonstrate consistent high-impact delivery."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-colors" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-950/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                      {achievement.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-foreground/80">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional accomplishments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 md:p-12"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Other Notable Contributions</h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Team Mentoring: Guided 3+ junior engineers through structured mentorship programs',
              'Knowledge Sharing: Authored comprehensive documentation, onboarding guides, and runbooks',
              'Cross-functional Leadership: Bridged QA, dev, and release management teams to align sprint delivery',
              'Shift-Left Advocacy: Embedded quality practices earlier in SDLC, reducing post-release defects',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

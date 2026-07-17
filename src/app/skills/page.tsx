'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { yearsOfExperience } from '@/lib/data';
import { skills } from '@/lib/data';
import { SectionHeader } from '@/components/ui-components';

export default function SkillsPage() {
  const [filter, setFilter] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Object.keys(skills);

  const filteredSkills = Object.entries(skills).reduce(
    (acc, [category, items]) => {
      if (activeCategory && category !== activeCategory) return acc;
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
      if (filtered.length > 0) acc[category] = filtered;
      return acc;
    },
    {} as Record<string, { name: string; level: number }[]>
  );

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="Technical Expertise"
          title="Skills & Competencies"
          description={`A comprehensive toolkit refined through ${yearsOfExperience}+ years of enterprise automation, full-stack development, and quality leadership.`}
        />

        {/* Search & Filter */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search skills..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !activeCategory
                  ? 'bg-brand-600 text-white'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(filteredSkills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                {category}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-rose-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filter && Object.keys(filteredSkills).length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skills found matching &quot;{filter}&quot;</p>
          </div>
        )}
      </div>
    </section>
  );
}

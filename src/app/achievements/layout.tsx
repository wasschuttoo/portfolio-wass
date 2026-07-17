import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements',
  description: 'Career milestones: 3 promotions in 3 years, 40% regression reduction, 30%+ automation coverage growth, and dual-track development delivery.',
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Technical skills and competencies: Playwright, C#, TypeScript, React, Azure DevOps, CI/CD, BDD, and more — refined through 4+ years of enterprise automation.',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Enterprise-grade automation projects: E2E frameworks, CI/CD pipelines, BDD patterns, and React features — built for scale and reliability.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

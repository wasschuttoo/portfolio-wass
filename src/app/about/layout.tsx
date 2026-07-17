import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Wassil Chuttoo — Senior SDET, quality engineering leader, and hybrid developer building enterprise automation frameworks at Dayforce.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

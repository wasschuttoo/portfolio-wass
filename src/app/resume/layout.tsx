import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Download Wassil Chuttoo's CV — Senior SDET with ${new Date().getFullYear() - 2021}+ years of enterprise automation experience.`,
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

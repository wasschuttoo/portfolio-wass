import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Wassil Chuttoo — open to opportunities in quality engineering, automation architecture, and full-stack development.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

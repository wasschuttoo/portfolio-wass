import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Professional certifications: ISTQB CTFL and Professional Scrum Master I (PSM I) — earned while delivering full-time at an enterprise level.',
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Academic background: BSc (Hons) Information Systems from University of Mauritius and BCS Certificate in IT.',
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return children;
}

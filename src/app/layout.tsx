import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AnimatedBackground } from '@/components/animated-background';
import { CookieBanner } from '@/components/cookie-banner';
import { siteConfig } from '@/lib/data';
import { basePath } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'SDET',
    'Software Developer in Test',
    'Test Automation',
    'Playwright',
    'Quality Engineering',
    'C#',
    'TypeScript',
    'React',
    'Azure DevOps',
    'CI/CD',
    'Dayforce',
    'BDD',
    'SpecFlow',
    'ReqnRoll',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${basePath}/CW.png`} type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Wassil Chuttoo',
              jobTitle: 'Senior Software Developer in Test',
              url: 'https://wassilchuttoo.dev',
              email: 'chelsea.fc.wass@hotmail.com',
              telephone: '+230 5488 5938',
              address: { '@type': 'PostalAddress', addressLocality: 'Vacoas', addressCountry: 'MU' },
              sameAs: ['https://linkedin.com/in/wassilchuttoo', 'https://github.com/wassilchuttoo'],
              worksFor: { '@type': 'Organization', name: 'Dayforce' },
              alumniOf: { '@type': 'EducationalOrganization', name: 'University of Mauritius' },
              knowsAbout: ['Test Automation', 'Playwright', 'C#', 'TypeScript', 'React', 'Azure DevOps', 'CI/CD'],
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>
          <AnimatedBackground />
          <Navbar />
          <main className="min-h-screen pt-16 md:pt-20">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}

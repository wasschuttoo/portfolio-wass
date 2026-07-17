import { siteConfig } from '@/lib/data';

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p><strong>Last updated:</strong> January 2025</p>

          <h2 className="text-foreground">Information We Collect</h2>
          <p>
            This portfolio website is primarily informational. We may collect limited data through:
          </p>
          <ul>
            <li><strong>Contact Form:</strong> When you submit a message through the contact form, we collect your name, email address, and message content solely to respond to your inquiry.</li>
            <li><strong>Analytics:</strong> We may use privacy-respecting analytics to understand page views and visitor patterns. No personally identifiable information is tracked.</li>
            <li><strong>Cookies:</strong> We use a single cookie to store your theme preference (light/dark mode). No tracking cookies are used.</li>
          </ul>

          <h2 className="text-foreground">How We Use Your Information</h2>
          <p>
            Information submitted via the contact form is used exclusively to respond to your message. We do not sell, trade, or share your personal information with third parties.
          </p>

          <h2 className="text-foreground">Data Retention</h2>
          <p>
            Contact form submissions are retained only as long as necessary to respond to your inquiry. Theme preferences are stored locally in your browser.
          </p>

          <h2 className="text-foreground">Your Rights</h2>
          <p>
            You may request deletion of any data you&apos;ve submitted by contacting us at{' '}
            <a href={`mailto:${siteConfig.links.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">
              {siteConfig.links.email}
            </a>.
          </p>

          <h2 className="text-foreground">Contact</h2>
          <p>
            For privacy-related questions, reach out to{' '}
            <a href={`mailto:${siteConfig.links.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">
              {siteConfig.links.email}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

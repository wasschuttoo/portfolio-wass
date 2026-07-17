import { siteConfig } from '@/lib/data';

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <p><strong>Last updated:</strong> January 2025</p>

          <h2 className="text-foreground">Acceptance of Terms</h2>
          <p>
            By accessing and using this website ({siteConfig.url}), you accept and agree to be bound by these terms. If you do not agree, please do not use this website.
          </p>

          <h2 className="text-foreground">Intellectual Property</h2>
          <p>
            All content on this website — including text, design, graphics, and code — is the intellectual property of {siteConfig.name} unless otherwise stated. You may not reproduce, distribute, or create derivative works without explicit permission.
          </p>

          <h2 className="text-foreground">Use of Content</h2>
          <p>
            You are welcome to reference or link to this website. However, copying substantial portions of content, including project descriptions and professional biography, is prohibited without written consent.
          </p>

          <h2 className="text-foreground">Disclaimer</h2>
          <p>
            This website is provided &quot;as is&quot; without warranties of any kind. The information presented is for professional and informational purposes and may be updated at any time.
          </p>

          <h2 className="text-foreground">Limitation of Liability</h2>
          <p>
            {siteConfig.name} shall not be liable for any damages arising from the use or inability to use this website.
          </p>

          <h2 className="text-foreground">Contact</h2>
          <p>
            For questions about these terms, contact{' '}
            <a href={`mailto:${siteConfig.links.email}`} className="text-brand-600 dark:text-brand-400 hover:underline">
              {siteConfig.links.email}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

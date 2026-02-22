import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Ember",
  description: "Terms of Service for Ember — Quotes & Reflections.",
};

export default function TermsPage() {
  return (
    <>
      <div className="mb-8 flex items-center gap-3">
        <Link
          href="/ember"
          className="font-mono text-xs transition-colors"
          style={{ color: "var(--c-muted)" }}
        >
          ← back
        </Link>
        <span className="font-mono text-xs px-2 py-0.5 border" style={{ color: "var(--c-accent)", borderColor: "var(--c-accent)", background: "var(--c-accent-2)" }}>
          terms-of-service.md
        </span>
      </div>

      <article className="prose-ember">
        <h1>Terms of Service</h1>
        <p className="meta">Ember — Quotes &amp; Reflections · Last Updated: February 22, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, accessing, or using Ember ("the App," "we," "us," or "our"), you agree to be
          bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and Ember regarding your use of
          the App and any services offered through it.
        </p>

        <h2>2. Description of Service</h2>
        <p>Ember is a mobile application that provides:</p>
        <ul>
          <li>Daily inspirational quotes and reflections</li>
          <li>Personal journaling features</li>
          <li>Quote discovery and exploration</li>
          <li>Streak tracking for journaling habits</li>
          <li>Optional premium subscription features</li>
        </ul>

        <h2>3. Eligibility</h2>
        <p>
          You must be at least 13 years old to use Ember. By using the App, you represent and warrant
          that you are at least 13 years of age, have the legal capacity to enter into these Terms, and
          will comply with all applicable laws and regulations.
        </p>
        <p>If you are under 18, you represent that you have parental or guardian consent to use the App.</p>

        <h2>4. Account Registration</h2>
        <h3>4.1 Anonymous Accounts</h3>
        <p>
          Ember allows you to use the App with an anonymous account. Your data is stored locally on your
          device and optionally synced to our servers if you choose to enable cloud features.
        </p>
        <h3>4.2 Apple Sign-In</h3>
        <p>
          You may link your anonymous account to Apple Sign-In to secure your data and enable cloud
          backup. When you do so, your existing data is preserved and your account becomes associated
          with your Apple ID, allowing data recovery on other devices.
        </p>
        <h3>4.3 Account Security</h3>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials. Notify
          us immediately if you suspect unauthorized access to your account.
        </p>

        <h2>5. User Content</h2>
        <h3>5.1 Your Content</h3>
        <p>
          You retain ownership of any content you create in Ember, including journal entries and
          reflections, favorite quotes, and personal notes.
        </p>
        <h3>5.2 License Grant</h3>
        <p>
          By using Ember, you grant us a limited, non-exclusive license to store your content on our
          servers (if cloud backup is enabled), display your content to you within the App, and process
          your content for the purpose of providing App features.
        </p>
        <h3>5.3 Content Restrictions</h3>
        <p>You agree not to create content that violates any laws or regulations, infringes on
          intellectual property rights, contains hate speech or harassment, contains sexually explicit
          content, or promotes illegal activities. We reserve the right to remove content that violates
          these restrictions.</p>

        <h2>6. Subscriptions and Payments</h2>
        <h3>6.1 Free Tier</h3>
        <p>Ember offers a free tier including: daily quote, up to 3 additional browsable quotes per day, limited journal history, and up to 10 saved favorites.</p>
        <h3>6.2 Premium Subscription</h3>
        <p>Premium subscriptions unlock: unlimited quote browsing, full journal history, unlimited favorites, AI-personalized prompts, cloud backup, and custom collections.</p>
        <h3>6.3 Subscription Terms</h3>
        <ul>
          <li>Subscriptions are billed through Apple App Store</li>
          <li>Subscription automatically renews unless cancelled</li>
          <li>You can manage subscriptions in your App Store account settings</li>
          <li>Prices are subject to change with notice</li>
        </ul>
        <h3>6.4 Free Trial</h3>
        <p>
          We may offer a free trial period for premium features. After the trial, your subscription
          automatically converts to a paid subscription unless you cancel before the trial ends.
        </p>
        <h3>6.5 Refunds</h3>
        <p>Refund requests are handled by Apple according to App Store policies. Contact Apple Support for refund requests.</p>

        <h2>7. Intellectual Property</h2>
        <h3>7.1 Our Rights</h3>
        <p>
          Ember and all related content (except user-generated content) are protected by copyright,
          trademark, and other intellectual property laws. This includes the app design and user
          interface, quote collections and curation, graphics, logos, and branding, and software code.
        </p>
        <h3>7.2 Limited License</h3>
        <p>
          We grant you a limited, non-exclusive, non-transferable license to download and install the
          App on devices you own or control and use the App for personal, non-commercial purposes.
        </p>
        <h3>7.3 Restrictions</h3>
        <p>You may not copy, modify, or create derivative works of the App; reverse engineer or decompile the App; remove copyright or proprietary notices; use the App for commercial purposes without authorization; or distribute or sublicense the App.</p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          EMBER IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
          INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY OF
          CONTENT, OR UNINTERRUPTED SERVICE. We do not warrant that the App will meet your
          requirements, will be error-free or uninterrupted, or that any defects will be corrected.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL,
          SPECIAL, OR CONSEQUENTIAL DAMAGES. Our total liability is limited to the amount you paid for
          the App in the past 12 months. We are not responsible for data loss due to device failure or
          user error.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Ember and its affiliates from any claims, damages,
          or expenses arising from your use of the App, your violation of these Terms, your violation
          of any third-party rights, or content you submit to the App.
        </p>

        <h2>11. Termination</h2>
        <p>
          You may stop using the App at any time. We may suspend or terminate your access if you
          violate these Terms, engage in fraudulent activity, or if required by law. Upon termination,
          your license ends and we may delete your data from our servers; local data on your device
          remains unless you delete it.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [YOUR JURISDICTION], without regard to conflict of
          law principles. Any disputes arising from these Terms will be resolved in the courts of
          [YOUR JURISDICTION].
        </p>

        <h2>13. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of significant changes by
          updating the "Last Updated" date, providing notice within the App, or sending an email if
          we have your contact information. Continued use of the App after changes constitutes
          acceptance of the updated Terms.
        </p>

        <h2>14. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions will
          remain in effect.
        </p>

        <h2>15. Contact Information</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:ember@caqlayan.dev">ember@caqlayan.dev</a>.
        </p>

        <hr />
        <p>
          By using Ember, you acknowledge that you have read, understood, and agree to be bound by
          these Terms of Service.
        </p>
      </article>

      <style>{`
        .prose-ember { color: var(--c-text); }
        .prose-ember h1 { font-family: var(--font-geist-mono); font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--c-text); }
        .prose-ember .meta { font-family: var(--font-geist-mono); font-size: 0.75rem; color: var(--c-muted); margin-bottom: 2.5rem; }
        .prose-ember h2 { font-family: var(--font-geist-mono); font-size: 1rem; font-weight: 600; color: var(--c-accent); margin-top: 2rem; margin-bottom: 0.75rem; }
        .prose-ember h3 { font-family: var(--font-geist-mono); font-size: 0.85rem; font-weight: 600; color: var(--c-text); margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .prose-ember p { font-size: 0.875rem; line-height: 1.75; color: var(--c-muted); margin-bottom: 0.75rem; }
        .prose-ember ul { font-size: 0.875rem; line-height: 1.75; color: var(--c-muted); margin-bottom: 0.75rem; padding-left: 1.25rem; list-style: disc; }
        .prose-ember li { margin-bottom: 0.25rem; }
        .prose-ember a { color: var(--c-accent); text-decoration: underline; text-underline-offset: 3px; }
        .prose-ember hr { border: none; border-top: 1px solid var(--c-border); margin: 2rem 0; }
      `}</style>
    </>
  );
}

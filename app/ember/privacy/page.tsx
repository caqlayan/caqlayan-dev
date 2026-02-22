import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Ember",
  description: "Privacy Policy for Ember — Quotes & Reflections.",
};

export default function PrivacyPage() {
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
          privacy-policy.md
        </span>
      </div>

      <article className="prose-ember">
        <h1>Privacy Policy</h1>
        <p className="meta">Ember — Quotes &amp; Reflections · Last Updated: February 22, 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Ember ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you use our
          mobile application ("the App").
        </p>
        <p>
          By using Ember, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Information You Provide</h3>
        <p><strong>Journal Entries:</strong> Your written reflections and responses to prompts. These are stored locally on your device by default and only synced to cloud if you enable cloud backup or sign in with Apple.</p>
        <p><strong>User Preferences:</strong> Selected topics of interest, notification time preferences, theme preferences, and streak/activity data.</p>
        <p><strong>Account Information:</strong> Anonymous user ID (auto-generated) and Apple ID email address (only if you sign in with Apple).</p>

        <h3>2.2 Automatically Collected Information</h3>
        <p><strong>Device Information:</strong> Device type and model, operating system version, unique device identifiers, and app version.</p>
        <p><strong>Usage Data:</strong> Quotes viewed and favorited, journal entries created, time spent in the App, feature usage patterns, and crash reports.</p>
        <p><strong>Analytics Data:</strong> App opens, session duration, screen views, navigation patterns, and subscription/purchase events.</p>

        <h3>2.3 Information from Third Parties</h3>
        <p><strong>Apple Sign-In:</strong> Email address (if shared), full name (if shared), and Apple user identifier.</p>
        <p><strong>RevenueCat:</strong> Subscription status and tier, purchase history, and trial status.</p>
        <p><strong>Firebase Services:</strong> We use Firebase for authentication, Cloud Firestore (database), analytics, Crashlytics (error reporting), and Cloud Messaging (notifications).</p>

        <h2>3. How We Use Your Information</h2>
        <h3>3.1 Providing and Improving the App</h3>
        <ul>
          <li>Display daily quotes tailored to your interests</li>
          <li>Store and retrieve your journal entries</li>
          <li>Track your streak and progress</li>
          <li>Maintain your favorites and collections</li>
          <li>Sync data across devices (for premium users)</li>
        </ul>
        <h3>3.2 Personalization</h3>
        <p>Recommend quotes based on your selected topics, customize your daily notification time, and adapt the user interface to your preferences.</p>
        <h3>3.3 Analytics and Performance</h3>
        <p>Understand how users interact with the App, identify and fix bugs and crashes, improve App features, and measure subscription conversion and retention.</p>
        <h3>3.4 Communication</h3>
        <p>Send daily quote notifications (if enabled), send important service updates, and respond to support requests.</p>
        <h3>3.5 Legal Compliance</h3>
        <p>Comply with applicable laws and regulations, protect our rights and property, and prevent fraud and abuse.</p>

        <h2>4. Data Storage and Security</h2>
        <h3>4.1 Local Storage</h3>
        <p>By default, your data is stored locally on your device using Drift (SQLite) for journal entries, favorites, and preferences, and UserDefaults for app settings. This data remains on your device unless you enable cloud backup or sign in with Apple.</p>
        <h3>4.2 Cloud Storage</h3>
        <p>If you enable cloud features, your data is stored in Firebase Firestore (encrypted at rest and in transit) with secure Firebase Authentication tokens.</p>
        <h3>4.3 Security Measures</h3>
        <p>We implement encryption in transit (HTTPS/TLS), encryption at rest for cloud data, and secure authentication protocols. While we take reasonable precautions, no method of transmission or storage is 100% secure.</p>

        <h2>5. Data Sharing and Disclosure</h2>
        <h3>5.1 We Do Not Sell Your Data</h3>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>
        <h3>5.2 Service Providers</h3>
        <p>We may share data with trusted third-party service providers:</p>
        <ul>
          <li><strong>Google Firebase:</strong> Cloud infrastructure, analytics, and authentication</li>
          <li><strong>Apple:</strong> Sign-in services and App Store processing</li>
          <li><strong>RevenueCat:</strong> Subscription management</li>
        </ul>
        <p>These providers are contractually obligated to only use data for specified purposes, maintain data security, and comply with applicable privacy laws.</p>
        <h3>5.3 Legal Requirements</h3>
        <p>We may disclose your information if required by court order, law enforcement request, governmental authority, or for protection of our rights or property.</p>
        <h3>5.4 Business Transfers</h3>
        <p>If Ember is acquired or merged with another company, your information may be transferred. You will be notified of any change in ownership and your data remains subject to this Privacy Policy.</p>

        <h2>6. Your Rights and Choices</h2>
        <h3>6.1 Access and Export</h3>
        <p>You can request a copy of your data by contacting us at <a href="mailto:ember@caqlayan.dev">ember@caqlayan.dev</a>.</p>
        <h3>6.2 Correction</h3>
        <p>You can update your preferences and journal entries directly within the App.</p>
        <h3>6.3 Deletion</h3>
        <p>You can delete your data by deleting individual journal entries in the App, deleting the App from your device (removes local data), or requesting account deletion (removes cloud data). To request complete account deletion, email <a href="mailto:ember@caqlayan.dev">ember@caqlayan.dev</a> with subject "Account Deletion Request".</p>
        <h3>6.4 Opt-Out of Notifications</h3>
        <p>You can disable notifications in App Settings or in iOS Settings → Notifications → Ember.</p>
        <h3>6.5 Analytics Opt-Out</h3>
        <p>You can limit analytics collection by disabling "Share Analytics" in your device settings where available.</p>
        <h3>6.6 California Privacy Rights</h3>
        <p>California residents have additional rights under the CCPA: right to know what personal information is collected, right to delete personal information, right to opt-out of sale of personal information, and right to non-discrimination for exercising privacy rights.</p>

        <h2>7. Children's Privacy</h2>
        <p>Ember is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided personal information, contact us to request deletion.</p>

        <h2>8. International Data Transfers</h2>
        <p>Your information may be transferred to and processed in the United States (Firebase servers) and other countries where our service providers operate. By using the App, you consent to this transfer. We ensure appropriate safeguards are in place including standard contractual clauses.</p>

        <h2>9. Data Retention</h2>
        <p>We retain your information for as long as your account is active, necessary to provide services, or required by law. When you delete your account, cloud data is deleted within 30 days and analytics data may be retained in aggregated form.</p>

        <h2>10. Third-Party Links and Services</h2>
        <p>The App may contain links to third-party websites or services. We are not responsible for their privacy practices — review their privacy policies before providing information.</p>

        <h2>11. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically. We will notify you of significant changes by updating the "Last Updated" date, providing notice within the App, or sending an email if we have your contact information. Continued use of the App after changes constitutes acceptance of the updated policy.</p>

        <h2>12. Contact Us</h2>
        <p>
          For questions or concerns about this Privacy Policy or your data, email{" "}
          <a href="mailto:ember@caqlayan.dev">ember@caqlayan.dev</a>. We typically respond within 48 hours.
        </p>

        <h2>13. Specific Features</h2>
        <h3>13.1 Apple Sign-In</h3>
        <p>When you use Sign in with Apple, Apple shares limited information with us. You control what information is shared and Apple provides a unique identifier, not your Apple ID password.</p>
        <h3>13.2 Firebase Services</h3>
        <p>We use Google Firebase for authentication, storing user data and quotes (Firestore), understanding App usage (Analytics), identifying and fixing crashes (Crashlytics), and sending notifications (Messaging). Review <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</p>
        <h3>13.3 RevenueCat</h3>
        <p>We use RevenueCat for subscription management and in-app purchase processing. Review <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat's Privacy Policy</a>.</p>
        <h3>13.4 Notifications</h3>
        <p>We send daily quote notifications (at your chosen time) and important service updates (rarely). You can disable notifications at any time.</p>

        <hr />
        <p><strong>Summary:</strong></p>
        <ul>
          <li><strong>We collect:</strong> Device info, usage data, preferences, and journal entries (local by default)</li>
          <li><strong>We store:</strong> Data locally unless you enable cloud backup or sign in with Apple</li>
          <li><strong>We share:</strong> Only with essential service providers (Firebase, Apple, RevenueCat)</li>
          <li><strong>We don't:</strong> Sell your data or share it for advertising</li>
          <li><strong>You control:</strong> Your data, notifications, and account deletion</li>
        </ul>
        <p>By using Ember, you trust us with your reflections and personal growth journey. We take that responsibility seriously. Thank you for using Ember.</p>
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
        .prose-ember strong { color: var(--c-text); font-weight: 600; }
        .prose-ember a { color: var(--c-accent); text-decoration: underline; text-underline-offset: 3px; }
        .prose-ember hr { border: none; border-top: 1px solid var(--c-border); margin: 2rem 0; }
      `}</style>
    </>
  );
}

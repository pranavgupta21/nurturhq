import Layout from "@/components/Layout";
import { brand } from "@/lib/brand";

export default function Terms() {
  return (
    <Layout>
      <div className="pt-28 pb-14 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

        <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
          <p>Last updated: September 2026</p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">1. Acceptance of Terms</h2>
          <p>
            By installing, accessing, or using Nurtur Reader, including the Chrome extension, website, and related backend services, you agree to these Terms. If you do not agree, do not use Nurtur Reader.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">2. Description of Service</h2>
          <p>
            Nurtur Reader helps readers understand web pages by generating article recommendations, summaries, rewrites, explanations, diagrams, prerequisites, and contextual answers. AI-generated output may be incomplete, inaccurate, or unsuitable for your needs, so you are responsible for reviewing it before relying on it.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">3. Your Responsibilities</h2>
          <p>
            You are responsible for how you use Nurtur Reader, the content you choose to process, and any activity under your account. You agree not to use the service to violate laws, infringe rights, bypass access controls, process content you are not allowed to use, or interfere with the service or other users.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">4. Accounts and Access</h2>
          <p>
            Some features may require signing in with Google or another supported identity provider. You are responsible for maintaining access to your account and for notifying us if you believe your account has been misused.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">5. Content and AI Output</h2>
          <p>
            You retain your rights to content you submit or make available to Nurtur Reader. You grant us permission to process that content as needed to provide, maintain, secure, and improve the service. Nurtur Reader does not give legal, medical, financial, or professional advice.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">6. Intellectual Property</h2>
          <p>
            Nurtur Reader, including its software, design, branding, and service features, is owned by {brand.name} or its licensors. These Terms do not grant you ownership of our software or brand.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">7. Availability and Changes</h2>
          <p>
            The service is provided "as is" and "as available." We may change, suspend, or discontinue features at any time. We do not guarantee uninterrupted availability or error-free operation.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">8. Termination</h2>
          <p>
            We may suspend or terminate access to Nurtur Reader if you violate these Terms, create risk for the service or other users, or use the service in a way that we reasonably believe is harmful.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">9. Contact</h2>
          <p>
            For any questions about these Terms, please contact us at {brand.contactEmail}.
          </p>
        </div>
      </div>
    </Layout>
  );
}

import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
          <p>Last updated: October 2025</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the CoSell service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Description of Service</h2>
          <p>
            CoSell provides an AI-powered sales intelligence platform designed to assist revenue teams. The service is provided "as is" and "as available" without any warranties of any kind.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Obligations</h2>
          <p>
            You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of CoSell and its licensors.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Termination</h2>
          <p>
            We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact</h2>
          <p>
            For any questions about these Terms, please contact us at pranav@trycosell.com.
          </p>
        </div>
      </div>
    </Layout>
  );
}

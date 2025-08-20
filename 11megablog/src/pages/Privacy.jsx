import React from 'react'

function Privacy() {
  return (
    <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            How we collect, use, and protect your personal information
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-muted/20">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">1. Information We Collect</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, post content, 
                or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Name and email address</li>
                <li>Profile information and preferences</li>
                <li>Content you post or upload</li>
                <li>Communications with us</li>
                <li>Device and usage information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">2. How We Use Your Information</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Protect against fraudulent or illegal activity</li>
                <li>Develop new products and services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">3. Information Sharing</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>In connection with a business transfer</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">4. Data Security</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">5. Cookies and Tracking</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies 
                help us:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Remember your preferences and settings</li>
                <li>Analyze how our services are used</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">6. Your Rights</h2>
              <p className="text-secondary leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">7. Children's Privacy</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe your child has provided 
                us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">8. International Transfers</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that 
                such transfers comply with applicable data protection laws and that your information receives adequate protection.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">9. Changes to This Policy</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this 
                Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">10. Contact Us</h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-muted/20">
                <p className="text-secondary font-semibold">Email: privacy@nebula-press.com</p>
                <p className="text-secondary font-semibold">Address: 123 Nebula Street, Tech City, TC 12345</p>
                <p className="text-secondary font-semibold">Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-center">
          <p className="text-secondary text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy

import React from 'react'

function Cookies() {
  return (
    <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            How we use cookies and similar technologies to enhance your experience
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-muted/20">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">1. What Are Cookies?</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us 
                provide you with a better experience by remembering your preferences, analyzing how you use our site, 
                and personalizing content and advertisements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">2. Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">Essential Cookies</h3>
                  <p className="text-secondary leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation, access to secure areas, and form submissions.
                  </p>
                  <ul className="list-disc list-inside text-secondary space-y-1 ml-6">
                    <li>Authentication and security</li>
                    <li>Session management</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">Performance Cookies</h3>
                  <p className="text-secondary leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously.
                  </p>
                  <ul className="list-disc list-inside text-secondary space-y-1 ml-6">
                    <li>Website analytics</li>
                    <li>Error tracking</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">Functional Cookies</h3>
                  <p className="text-secondary leading-relaxed mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences 
                    and settings.
                  </p>
                  <ul className="list-disc list-inside text-secondary space-y-1 ml-6">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>User interface customization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-4">Marketing Cookies</h3>
                  <p className="text-secondary leading-relaxed mb-3">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <ul className="list-disc list-inside text-secondary space-y-1 ml-6">
                    <li>Ad targeting</li>
                    <li>Social media integration</li>
                    <li>Marketing analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">3. Third-Party Cookies</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We may use third-party services that place cookies on your device. These services help us:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Analyze website traffic and user behavior</li>
                <li>Provide social media features</li>
                <li>Deliver targeted advertisements</li>
                <li>Improve website performance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">4. Managing Your Cookie Preferences</h2>
              <p className="text-secondary leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Visit third-party websites to opt out of their cookies</li>
                <li><strong>Contact Us:</strong> Reach out to us for assistance with cookie management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">5. Cookie Duration</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                <li><strong>First-Party Cookies:</strong> Set by our website directly</li>
                <li><strong>Third-Party Cookies:</strong> Set by external services we use</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">6. Your Rights</h2>
              <p className="text-secondary leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Accept or decline cookies</li>
                <li>Delete existing cookies</li>
                <li>Set browser preferences to block cookies</li>
                <li>Request information about cookies we use</li>
                <li>Withdraw consent for non-essential cookies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">7. Impact of Disabling Cookies</h2>
              <p className="text-secondary leading-relaxed mb-4">
                While you can disable cookies, doing so may affect your experience on our website:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information</li>
                <li>Personalization features may be limited</li>
                <li>Website performance may be affected</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">8. Updates to This Policy</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">9. Contact Us</h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
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

export default Cookies

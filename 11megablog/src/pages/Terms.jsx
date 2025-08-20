import React from 'react'

function Terms() {
  return (
    <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using NebulaPress
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-muted/20">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">1. Acceptance of Terms</h2>
              <p className="text-secondary leading-relaxed mb-4">
                By accessing and using NebulaPress, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">2. Use License</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on NebulaPress's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-secondary space-y-2 ml-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on NebulaPress's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">3. User Content</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Users may post, upload, or contribute content to NebulaPress. By posting content, you grant NebulaPress a 
                worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content.
              </p>
              <p className="text-secondary leading-relaxed mb-4">
                You are responsible for ensuring that your content does not violate any laws or infringe on the rights of others.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">4. Privacy Policy</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">5. Disclaimer</h2>
              <p className="text-secondary leading-relaxed mb-4">
                The materials on NebulaPress's website are provided on an 'as is' basis. NebulaPress makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">6. Limitations</h2>
              <p className="text-secondary leading-relaxed mb-4">
                In no event shall NebulaPress or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on NebulaPress's website, even if NebulaPress or a NebulaPress authorized representative 
                has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">7. Revisions and Errata</h2>
              <p className="text-secondary leading-relaxed mb-4">
                The materials appearing on NebulaPress's website could include technical, typographical, or photographic errors. 
                NebulaPress does not warrant that any of the materials on its website are accurate, complete or current. 
                NebulaPress may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">8. Links</h2>
              <p className="text-secondary leading-relaxed mb-4">
                NebulaPress has not reviewed all of the sites linked to its website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by NebulaPress of the site. 
                Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">9. Modifications</h2>
              <p className="text-secondary leading-relaxed mb-4">
                NebulaPress may revise these terms of service for its website at any time without notice. By using this 
                website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">10. Contact Information</h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-muted/20">
                <p className="text-secondary font-semibold">Email: legal@nebula-press.com</p>
                <p className="text-secondary font-semibold">Address: 123 Nebula Street, Tech City, TC 12345</p>
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

export default Terms

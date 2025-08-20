import React, { useState } from 'react'

function Help() {
  const [activeCategory, setActiveCategory] = useState('general')

  const faqCategories = [
    { id: 'general', name: 'General', icon: '❓' },
    { id: 'account', name: 'Account', icon: '👤' },
    { id: 'writing', name: 'Writing', icon: '✍️' },
    { id: 'technical', name: 'Technical', icon: '🔧' }
  ]

  const faqs = {
    general: [
      {
        question: 'What is NebulaPress?',
        answer: 'NebulaPress is a modern blogging platform that allows creators to share their stories, ideas, and content with the world. Built with React and powered by Appwrite, it offers a beautiful, responsive experience for both writers and readers.'
      },
      {
        question: 'Is NebulaPress free to use?',
        answer: 'Yes! NebulaPress offers a free tier that includes basic features. We also offer premium plans with advanced features for serious creators and teams.'
      },
      {
        question: 'Can I use my own domain?',
        answer: 'Yes, premium users can connect their own custom domain to their NebulaPress blog for a more professional appearance.'
      }
    ],
    account: [
      {
        question: 'How do I create an account?',
        answer: 'Simply click the "Sign Up" button in the navigation and provide your email, password, and name. You\'ll be able to start creating content immediately after verification.'
      },
      {
        question: 'I forgot my password. How do I reset it?',
        answer: 'Click on the "Forgot Password" link on the login page. Enter your email address and we\'ll send you a password reset link.'
      },
      {
        question: 'Can I delete my account?',
        answer: 'Yes, you can delete your account at any time from your account settings. Please note that this action is irreversible and will permanently delete all your content.'
      }
    ],
    writing: [
      {
        question: 'How do I create a new post?',
        answer: 'After logging in, click "Add Post" in the navigation. You\'ll be taken to our rich text editor where you can write, format, and add images to your content.'
      },
      {
        question: 'What file types can I upload?',
        answer: 'We support common image formats including JPG, PNG, GIF, and WebP. For documents, you can embed PDFs and other files using our rich text editor.'
      },
      {
        question: 'Can I schedule posts for later?',
        answer: 'Currently, posts are published immediately when you click "Submit". We\'re working on adding scheduling features in future updates.'
      }
    ],
    technical: [
      {
        question: 'What browsers are supported?',
        answer: 'NebulaPress works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version for the best experience.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Absolutely! We use industry-standard encryption and security practices. Your data is stored securely on Appwrite\'s infrastructure with regular backups.'
      },
      {
        question: 'Can I export my content?',
        answer: 'Yes, you can export your posts in various formats. This feature is available in your account settings under the "Export" section.'
      }
    ]
  }

  return (
    <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Help Center</h1>
          <p className="text-xl lg:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions and learn how to make the most of NebulaPress
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-2xl scale-105'
                  : 'bg-white/90 text-primary border-2 border-muted/20 hover:border-primary/50 hover:shadow-2xl hover:scale-105'
              }`}
            >
              <span className="mr-3 text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          {faqs[activeCategory].map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-muted/20 hover:shadow-3xl transition-all duration-500"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">{faq.question}</h3>
              <p className="text-secondary leading-relaxed text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-16 border border-muted/20 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Still Need Help?</h2>
          <p className="text-xl text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
            Can't find what you're looking for? Our support team is here to help you get the most out of NebulaPress.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              Contact Support
            </button>
            <button className="px-10 py-4 border-2 border-primary text-primary rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105">
              View Documentation
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Getting Started', description: 'Learn the basics of NebulaPress', icon: '🚀' },
              { title: 'Writing Guide', description: 'Tips for creating great content', icon: '✍️' },
              { title: 'Account Settings', description: 'Manage your profile and preferences', icon: '⚙️' }
            ].map((link, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-muted/20 hover:shadow-3xl transition-all duration-500 text-center cursor-pointer hover:scale-105"
              >
                <div className="text-4xl mb-6">{link.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{link.title}</h3>
                <p className="text-secondary text-lg">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help

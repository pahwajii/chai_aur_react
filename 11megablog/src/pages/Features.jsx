import React from 'react'

function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Built with modern React and optimized for speed. Your content loads instantly.',
      color: 'from-primary to-secondary'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern UI with our signature purple palette. Every element is crafted for visual appeal.',
      color: 'from-secondary to-accent'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Responsive design that looks perfect on all devices, from phones to desktops.',
      color: 'from-accent to-muted'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Powered by Appwrite backend with enterprise-grade security and reliability.',
      color: 'from-muted to-blush'
    },
    {
      icon: '📝',
      title: 'Rich Editor',
      description: 'TinyMCE integration for creating beautiful, formatted content with ease.',
      color: 'from-blush to-primary'
    },
    {
      icon: '🌐',
      title: 'Global Access',
      description: 'Cloud-hosted platform accessible from anywhere in the world, 24/7.',
      color: 'from-primary to-accent'
    }
  ]

  return (
    <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Features</h1>
          <p className="text-xl lg:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Discover what makes NebulaPress the perfect platform for sharing your stories and ideas
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-muted/20 hover:shadow-3xl transition-all duration-500 ease-smooth hover:-translate-y-3 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">{feature.title}</h3>
              <p className="text-secondary leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-16 border border-muted/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators who trust NebulaPress to share their stories with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                Start Writing Today
              </button>
              <button className="px-10 py-4 border-2 border-primary text-primary rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-500 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

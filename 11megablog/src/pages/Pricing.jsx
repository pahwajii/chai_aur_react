import React from 'react'

function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Up to 10 posts per month',
        'Basic editor',
        'Community support',
        'Standard templates',
        '1GB storage'
      ],
      popular: false,
      color: 'from-gray-400 to-gray-500'
    },
    {
      name: 'Pro',
      price: '$9',
      period: 'per month',
      description: 'For serious creators',
      features: [
        'Unlimited posts',
        'Advanced editor with plugins',
        'Priority support',
        'Custom templates',
        '10GB storage',
        'Analytics dashboard',
        'Custom domain'
      ],
      popular: true,
      color: 'from-primary to-secondary'
    },
    {
      name: 'Enterprise',
      price: '$29',
      period: 'per month',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Advanced analytics',
        'API access',
        '100GB storage',
        'White-label options',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false,
      color: 'from-accent to-muted'
    }
  ]

  return (
    <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Simple, Transparent Pricing</h1>
          <p className="text-xl lg:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 transition-all duration-500 ease-smooth hover:-translate-y-3 ${
                plan.popular 
                  ? 'border-primary shadow-3xl scale-105' 
                  : 'border-muted/20 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-2xl">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-primary mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-xl text-secondary">/{plan.period}</span>
                </div>
                <p className="text-lg text-secondary">{plan.description}</p>
              </div>

              <ul className="space-y-6 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-4`}>
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-secondary text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl hover:scale-105'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105'
              }`}>
                {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-16 border border-muted/20">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Can I change plans anytime?</h3>
              <p className="text-secondary text-lg leading-relaxed">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Is there a free trial?</h3>
              <p className="text-secondary text-lg leading-relaxed">All paid plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">What payment methods do you accept?</h3>
              <p className="text-secondary text-lg leading-relaxed">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Can I cancel anytime?</h3>
              <p className="text-secondary text-lg leading-relaxed">Absolutely! You can cancel your subscription at any time with no cancellation fees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

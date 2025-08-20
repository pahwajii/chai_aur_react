import React, { useState } from 'react'
import { Button, Input } from '../components'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: '123 Nebula Street, Tech City, TC 12345, United States',
      color: 'from-primary to-secondary'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'hello@nebula-press.com',
      color: 'from-secondary to-accent'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      color: 'from-accent to-muted'
    },
    {
      icon: '🌐',
      title: 'Website',
      content: 'www.nebula-press.com',
      color: 'from-muted to-blush'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="py-12 px-6 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Get in Touch</h1>
          <p className="text-xl lg:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-12">Contact Information</h2>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-6 p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-muted/20 hover:shadow-3xl transition-all duration-500"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2">{info.title}</h3>
                    <p className="text-secondary text-lg">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Follow Us</h3>
              <div className="flex space-x-6">
                {[
                  { icon: '🐦', name: 'Twitter', color: 'from-blue-400 to-blue-600' },
                  { icon: '📘', name: 'Facebook', color: 'from-blue-600 to-blue-800' },
                  { icon: '📷', name: 'Instagram', color: 'from-pink-400 to-purple-600' },
                  { icon: '💼', name: 'LinkedIn', color: 'from-blue-700 to-blue-900' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center text-2xl text-white hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-3xl`}
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-muted/20">
            <h2 className="text-4xl font-bold text-primary mb-12">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
              <div>
                <label className="block text-lg font-semibold text-primary mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="8"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-accent focus:ring-4 focus:ring-accent/20 resize-none transition-all duration-300 text-lg"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full py-4 text-xl font-semibold rounded-2xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 border border-muted/20">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Visit Our Office</h2>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-6">🗺️</div>
                <p className="text-secondary text-xl">Interactive map would be embedded here</p>
                <p className="text-lg text-muted mt-4">123 Nebula Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

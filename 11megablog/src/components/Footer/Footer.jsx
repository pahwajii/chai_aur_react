import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-primary via-secondary to-primary border-t border-accent/20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-white/80">
                  &copy; {new Date().getFullYear()} NebulaPress. All rights reserved.
                </p>
                <p className="text-xs text-white/60 mt-2">
                  Built with ❤️ using React & Appwrite
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white/80">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/features"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/help"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white/80">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/help"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/features"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/pricing"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-white/80">
                Legal
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/terms"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-blush transition-colors duration-300"
                    to="/cookies"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
'use client'

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-serif text-xl font-bold">Amay Bistro</span>
            </div>
            <p className="text-light/70 text-sm">
              Premium café experience with authentic Indian, Asian, and modern cuisine in the heart of Jubilee Hills.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-primary-400">Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Clock size={16} className="text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p>Lunch: 12:00 PM - 3:30 PM</p>
                  <p>Dinner: 7:00 PM - 11:30 PM</p>
                  <p className="text-light/70 mt-2">Open Daily</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-primary-400">Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p>4th & 5th Floor, Venkatagiri</p>
                  <p>Road 10, Jubilee Hills</p>
                  <p>Hyderabad, 500033</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-primary-400">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+917207265544" className="flex gap-2 hover:text-primary-400 transition">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                +91 7207 265544
              </a>
              <a href="mailto:info@amaybistro.com" className="flex gap-2 hover:text-primary-400 transition">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                info@amaybistro.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light/70 text-sm">
            © {currentYear} Amay Bistro. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-light/70 hover:text-primary-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-light/70 hover:text-primary-400 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-light/70 hover:text-primary-400 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion';
import { GlassCard } from '../ui/core';
import { Heart, MessageSquare, Video, Camera, Mail, Phone } from 'lucide-react';

export function Giving() {
  return (
    <section
      id="giving"
      className="py-24 md:py-40 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-10">
        <img
          src="/assets/lifeline_logo.png"
          alt="Background"
          className="w-full h-full object-contain scale-150 rotate-12 blur-sm"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard className="py-16">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Heart size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Support the Vision.
              </h2>
              <p className="text-secondary/60 text-lg max-w-xl mx-auto">
                Your generosity helps us transform lives. Whether through
                tithes, offerings, or community projects, your support makes a
                difference.
              </p>

              <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 w-full max-w-md">
                <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
                  Payment Instructions
                </p>
                <p className="text-2xl font-bold">Send money to 0741 431 911</p>
              </div>

              <p className="text-xs text-secondary/30 mt-8">
                All donations are processed securely. Lifeline Family Church is
                a registered charity.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/church_logo.jpg"
                alt="Logo"
                className="h-10 w-auto"
              />
              <span className="font-display font-bold tracking-tighter text-2xl">
                LIFELINE
              </span>
            </div>
            <p className="text-secondary/40 max-w-sm leading-relaxed">
              A vibrant church family focused on developmental growth and
              community impact. Loving God, loving others, and serving the
              community.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-secondary/50 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} /> info@lifelinechurch.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} /> +44 000 000 000
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0" /> Mayfield School, RM8
                1XE
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {[MessageSquare, Video, Camera].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, color: '#3e7cb1' }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary/50 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/20">
          <p>© 2026 Lifeline Family Church. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-secondary/40">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary/40">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const MapPin = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowUpRight, Play, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';
import { Button, GlassCard } from '../ui/core';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.9]);
  const y = useTransform(scrollY, [0, 100], [0, 10]);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between p-2 rounded-full glass-card pointer-events-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 pl-4"
        >
          <img
            src="/assets/church_logo.jpg"
            alt="Lifeline Logo"
            className="h-8 w-auto"
          />
          <span className="font-display font-bold tracking-tighter text-lg hidden sm:block">
            LIFELINE
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-1">
          {['Sundays', 'Ministries', 'Events', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 text-sm font-medium text-secondary/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            className="hidden sm:flex py-2 px-5 text-sm"
            icon={<ArrowUpRight size={14} />}
          >
            Watch Online
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/pastor 2.jpg"
          alt="Pastor Preaching"
          className="w-full h-full object-cover scale-105 filter brightness-[0.5] contrast-[1.2] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary">
              Live every Sunday @ 10:30 AM
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Transforming <span className="text-primary italic">Lives</span>{' '}
            <br /> For Jesus.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary/60 mb-12 leading-relaxed">
            Welcome to Lifeline Family Church. A vibrant community focused on
            spiritual growth, loving others, and serving our neighborhood.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              icon={<Play size={18} />}
              className="w-full sm:w-auto"
            >
              Join Us This Sunday
            </Button>
            <Button
              variant="secondary"
              icon={<MapPin size={18} />}
              className="w-full sm:w-auto"
            >
              Get Directions
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Cards */}
      <div className="absolute bottom-12 left-0 right-0 hidden lg:block">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-6">
          {[
            {
              icon: <Heart className="text-primary" />,
              title: 'Give Back',
              desc: 'Support our community mission.',
            },
            {
              icon: <MapPin className="text-primary" />,
              title: 'Find Us',
              desc: 'Mayfield School, Pedley Road.',
            },
            {
              icon: <Play className="text-primary" />,
              title: 'Sermons',
              desc: 'Watch our latest messages.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            >
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{card.title}</h3>
                    <p className="text-sm text-secondary/50">{card.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

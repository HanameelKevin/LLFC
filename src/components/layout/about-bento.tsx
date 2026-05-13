import { motion } from 'framer-motion';
import { GlassCard } from '../ui/core';
import { ArrowRight, Users, Sparkles, BookOpen, Music } from 'lucide-react';

export function AboutPastor() {
  return (
    <section id="about" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-3 rounded-[3rem] bg-white/[0.02] border border-white/[0.05] overflow-hidden">
              <img
                src="/assets/pastor.png"
                alt="Lead Pastor"
                className="w-full h-auto rounded-[2.5rem] grayscale-[0.2] hover:grayscale-0 transition-all duration-700 contrast-[1.1] brightness-[1.05] saturate-[1.1]"
              />
            </div>
            {/* Watermark Logo */}
            <img
              src="/assets/church_logo.jpg"
              alt="Watermark"
              className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 blur-sm pointer-events-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary">
              Meet Our Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              A Vision for <br />{' '}
              <span className="text-primary italic">Dagenham</span> & Beyond.
            </h2>
            <p className="text-secondary/60 text-lg leading-relaxed">
              Led by our Lead Pastor, Lifeline Family Church is more than just a
              place of worship. It's a hub for personal development, community
              impact, and spiritual renewal. We believe in building a church
              that loves God unconditionally and serves its community with
              excellence.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Bible-Centered Teaching</h4>
                  <p className="text-sm text-secondary/40">
                    Grounded in the Word of God.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Community Growth</h4>
                  <p className="text-sm text-secondary/40">
                    Focused on personal development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Ministries() {
  const ministries = [
    {
      title: 'Youth Ministry',
      icon: <Music />,
      size: 'col-span-1 md:col-span-2',
      desc: 'Igniting passion for Christ in the next generation.',
    },
    {
      title: "Children's Church",
      icon: <Sparkles />,
      size: 'col-span-1',
      desc: 'Sparkers & Primary aged programs.',
    },
    {
      title: 'Life Groups',
      icon: <Users />,
      size: 'col-span-1',
      desc: 'Mid-week community and study.',
    },
    {
      title: 'Service Times',
      icon: <ArrowRight />,
      size: 'col-span-1 md:col-span-2',
      desc: 'Sundays @ 10:30 AM | Join us online or in person.',
    },
  ];

  return (
    <section id="ministries" className="py-24 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary">
            Explore What's On
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            Something for Everyone.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ministries.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={item.size}
            >
              <GlassCard className="h-full group hover:bg-white/[0.05] transition-all duration-500">
                <div className="flex flex-col h-full justify-between gap-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-secondary/50">{item.desc}</p>
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

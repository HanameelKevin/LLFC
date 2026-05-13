import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, ArrowRight, Shield, Zap } from 'lucide-react';

export function CreativeExperience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const pillars = [
    {
      title: 'Divine Faith',
      desc: 'Rooted in timeless truth, flourishing in modern grace.',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-blue-500/20',
    },
    {
      title: 'Radical Love',
      desc: 'Breaking barriers, building bridges, breathing life.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'bg-primary/20',
    },
    {
      title: 'Unstoppable Impact',
      desc: 'Empowering you to be the light in every dark room.',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-orange-500/20',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-60 px-6 relative overflow-hidden bg-[#080808]"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Column: The "Living" Portal */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop"
                alt="Community Experience"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

              {/* Floating Stat Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-primary text-xs uppercase tracking-widest font-bold">
                      Current Focus
                    </p>
                    <h4 className="text-xl font-bold mt-1">
                      Spiritual Renaissance
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center animate-spin-slow">
                    <ArrowRight
                      className="text-primary rotate-[-45deg]"
                      size={20}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Geometric Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/20 rounded-tr-[3rem]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/20 rounded-bl-[3rem]" />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6"
            >
              The Lifeline Experience
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-10"
            >
              Beyond the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-400 italic">
                Ordinary.
              </span>
            </motion.h2>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl ${pillar.color} border border-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-secondary/50 leading-relaxed max-w-md">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16"
            >
              <button className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey <ArrowRight size={18} />
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

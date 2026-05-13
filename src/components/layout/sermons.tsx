import { motion } from 'framer-motion';
import { Button } from '../ui/core';
import { Play } from 'lucide-react';

export function Sermons() {
  return (
    <section id="sermons" className="py-24 md:py-40 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8bef99c17?auto=format&fit=crop&w=1200&q=80"
                alt="Cinematic Dawn"
                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/10 opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 30px rgba(var(--primary), 0.5)',
                  }}
                  className="w-20 h-20 rounded-full bg-primary/30 backdrop-blur-xl border border-primary/50 flex items-center justify-center text-primary cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                  <Play size={32} fill="currentColor" />
                </motion.div>
              </div>
              {/* AI-style lens flare overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col gap-8"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary">
                Latest Message
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 leading-tight">
                When <span className="text-primary italic">Midnight</span> Turns{' '}
                <br /> Into Morning.
              </h2>
              <p className="text-secondary/60 text-lg leading-relaxed mt-6">
                Discover how God transforms pain into purpose and darkness into
                hope. Our latest message explores the power of perseverance and
                the promise of a new dawn.
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" icon={<Play size={18} />}>
                Watch Full Message
              </Button>
              <Button variant="secondary">Browse Series</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

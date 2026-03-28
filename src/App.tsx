import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Moon, 
  Bell, 
  User, 
  Edit3, 
  Box, 
  Bed, 
  History, 
  Cloud, 
  Hourglass,
  Coffee,
  BookOpen,
  Brain,
  Quote
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Sidebar = () => {
  const [active, setActive] = useState('Monologue');
  
  const navItems = [
    { id: 'Monologue', icon: Edit3, label: 'Monologue' },
    { id: 'Cube', icon: Box, label: 'Cube' },
    { id: 'Deprivation', icon: Bed, label: 'Deprivation' },
    { id: 'Archives', icon: History, label: 'Archives' },
  ];

  return (
    <aside className="hidden md:flex h-full w-64 fixed left-0 top-0 bg-surface-container-low flex-col py-8 gap-4 pt-24 z-40">
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center">
            <User className="text-primary w-5 h-5" />
          </div>
          <div>
            <div className="font-headline text-xl text-on-surface">Tired Student</div>
            <div className="text-[10px] text-on-surface-variant font-body">Sleep Level: 12%</div>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "w-[calc(100%-16px)] mx-2 px-4 py-3 flex items-center gap-3 rounded-xl transition-all duration-300 group",
              active === item.id 
                ? "bg-surface-container-high text-primary" 
                : "text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-body text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="px-4 mt-auto">
        <button className="w-full bg-gradient-to-r from-primary to-primary-container text-surface py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
          <Bed className="w-4 h-4" />
          Log Rest
        </button>
      </div>
    </aside>
  );
};

const TopBar = () => (
  <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 border-b border-white/5">
    <div className="text-2xl font-bold text-on-surface font-headline tracking-tight">The Ethereal Dorm</div>
    <div className="flex items-center gap-6">
      <div className="hidden md:flex gap-8">
        <a href="#" className="text-primary font-semibold hover:text-on-surface transition-colors">Monologue</a>
        <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">Archives</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <Moon className="w-5 h-5 text-primary" />
        </button>
        <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-primary" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/20">
          <img 
            className="w-full h-full object-cover" 
            src="https://picsum.photos/seed/student/200/200" 
            alt="Profile"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </header>
);

const Cube3D = () => (
  <div className="relative flex flex-col items-center mb-16">
    <div className="scene group">
      <div className="cube">
        <div className="cube-face front"><Brain className="text-primary/40 w-10 h-10" /></div>
        <div className="cube-face back"><Coffee className="text-primary/40 w-10 h-10" /></div>
        <div className="cube-face right"><BookOpen className="text-primary/40 w-10 h-10" /></div>
        <div className="cube-face left"><Quote className="text-primary/40 w-10 h-10" /></div>
        <div className="cube-face top"><Box className="text-primary/40 w-10 h-10" /></div>
        <div className="cube-face bottom"><Moon className="text-primary/40 w-10 h-10" /></div>
      </div>
    </div>
    <div className="w-32 h-6 bg-primary/20 blur-2xl rounded-full mt-8 animate-pulse" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30">
      <TopBar />
      <Sidebar />
      
      <main className="min-h-screen pt-24 pb-32 md:pl-64 flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background Blurs */}
        <div className="asymmetric-blur top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/20" />
        <div className="asymmetric-blur bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-primary-container/20" />
        
        <Cube3D />
        
        <section className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-surface-container-low rounded-[2rem] p-8 md:p-10 relative overflow-hidden border border-outline-variant/10"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              The Infinite <span className="text-primary italic">Loop</span>
            </h1>
            
            <div className="space-y-4 text-on-surface-variant leading-relaxed font-body text-sm md:text-base">
              <p>
                It is currently 3:42 AM. My laptop fan is screaming at me like it's trying to achieve lift-off, which honestly makes two of us. I just spent forty-five minutes researching whether squirrels can experience burnout, only to realize I haven't even finished the introduction of my thesis.
              </p>
              <p>
                I’ve reached a level of exhaustion where my brain is essentially a collection of browser tabs that have all crashed, but for some reason, the music is still playing in one of them. I drank a double espresso an hour ago, and now I’m just 'vibrating' while staring at a blinking cursor.
              </p>
              <p className="font-medium text-primary italic border-l-2 border-primary/30 pl-4 py-1">
                "If I close my eyes for exactly four minutes, does that count as a power nap or a resignation from society?"
              </p>
              <p>
                The library has become my primary residence. I know the janitor’s middle name and which vending machine gives you two bags of chips for the price of one if you hit the 'C4' button with just the right amount of existential dread. 
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px]">
                    {i === 1 ? '💤' : i === 2 ? '☕' : '📚'}
                  </div>
                ))}
              </div>
              <span className="text-xs text-on-surface-variant/60">Liked by 1.2k fellow ghosts</span>
            </div>
          </motion.div>
          
          {/* Stats Cards */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-surface-container-high rounded-[2rem] p-6 border border-outline-variant/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant block mb-4 font-bold">Current Vibe</span>
                <div className="flex items-center gap-3 mb-2">
                  <Cloud className="w-6 h-6 text-primary fill-primary/20" />
                  <span className="font-headline text-2xl">Dreaming Awake</span>
                </div>
                <p className="text-xs text-on-surface-variant">Cognitive function at critical levels.</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-outline-variant/10">
                <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-tighter">
                  <span>Brain Power</span>
                  <span>4%</span>
                </div>
                <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '4%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary shadow-[0_0_10px_rgba(184,200,223,0.5)]" 
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-highest rounded-[2rem] p-6 border border-outline-variant/10 flex-1 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <Hourglass className="w-10 h-10 text-primary/30 mb-3 group-hover:rotate-180 transition-transform duration-700" />
              <h3 className="font-headline text-lg mb-1">Archive Entry</h3>
              <p className="text-[11px] text-on-surface-variant">Day 43 without seeing the sun during normal operating hours.</p>
              <button className="mt-4 text-xs font-bold text-primary hover:underline transition-all">Read more</button>
            </motion.div>
          </div>
        </section>
        
        {/* Decorative Background Text */}
        <div className="mt-16 opacity-10 pointer-events-none select-none">
          <div className="font-headline text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-on-surface to-transparent">
            EXHAUSTION
          </div>
        </div>
      </main>
      
      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-low/90 backdrop-blur-2xl flex justify-around items-center px-4 pb-6 pt-3 border-t border-white/5 rounded-t-[2rem] z-50">
        <button className="flex flex-col items-center gap-1 text-on-surface-variant p-2">
          <Brain className="w-5 h-5" />
          <span className="text-[10px] font-medium">Focus</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary bg-primary/10 rounded-2xl px-6 py-2">
          <Bed className="w-5 h-5" />
          <span className="text-[10px] font-medium">Rest</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant p-2">
          <Cloud className="w-5 h-5" />
          <span className="text-[10px] font-medium">Dream</span>
        </button>
      </nav>
    </div>
  );
}

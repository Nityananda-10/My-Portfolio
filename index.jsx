import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Code, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Trigger advanced pop-up 1.5s after load
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const skills = ["JavaScript (ES6+)", "React.js", "Node.js", "Python", "SQL", "Tailwind CSS", "Git", "Docker"];
  
  const projects = [
    { title: "E-Commerce Engine", desc: "A full-stack shop with Stripe integration.", tech: "React, Node, MongoDB" },
    { title: "Task Orbit", desc: "Project management tool with real-time updates.", tech: "Firebase, React" },
  ];

  // Animation variants for the photo
  const photoVariants = {
    initial: { opacity: 0, scale: 0.9, rotate: -3 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.6, 0.01, -0.05, 0.9] // Smooth cubic-bezier
      }
    },
    // Gentle floating effect when hovered or visible
    floating: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 font-sans">
      
      {/* --- ADVANCED POP-UP --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md shadow-2xl border border-blue-50 relative"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 p-4 rounded-2xl shadow-lg">
                <Code className="text-white w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-center mt-4">System Initialized</h2>
              <p className="text-slate-600 text-center mt-3 leading-relaxed">
                Hello! I'm <strong>Sharanya</strong>. Welcome to my technical workspace. 
                I build scalable software with a focus on clean architecture.
              </p>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-md shadow-blue-200"
              >
                Explore Portfolio
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION WITH PHOTO GAP --- */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-[2fr,1fr] items-center gap-16">
          {/* Text content (Merged previous Hero) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h4 className="text-blue-600 font-mono font-medium tracking-widest">SOFTWARE ENGINEER</h4>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              Sharanya<span className="text-blue-600">.</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-600 leading-relaxed">
              Specializing in building robust digital experiences. I turn complex problems into elegant, maintainable code. Currently open to new opportunities.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white border rounded-full hover:shadow-md transition-all text-slate-700 hover:text-blue-600 hover:border-blue-100"><Linkedin size={20}/></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white border rounded-full hover:shadow-md transition-all text-slate-700 hover:text-blue-600 hover:border-blue-100"><Github size={20}/></a>
              <a href="mailto:email@example.com" className="p-3 bg-white border rounded-full hover:shadow-md transition-all text-slate-700 hover:text-blue-600 hover:border-blue-100"><Mail size={20}/></a>
            </div>
          </motion.div>

          {/* New Photo Location */}
          <motion.div
            initial="initial"
            animate={["animate", "floating"]}
            variants={photoVariants}
            className="relative group"
          >
            {/* Soft decorative background element */}
            <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            
            {/* THE PHOTO CONTAINER */}
            <div className="relative aspect-[3/4] bg-white border-4 border-white rounded-3xl shadow-xl overflow-hidden z-10">
              <img 
                src="your-photo.jpg" // <-- REPLACE WITH YOUR IMAGE FILENAME/URL
                alt="Sharanya Portrait"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                    // Placeholder styling if image is missing
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/300x400?text=Your+Photo'; 
                }}
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- SKILLS GRID --- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
          <div className="h-px w-8 bg-slate-300"></div> Technical Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div 
              whileHover={{ y: -5, scale: 1.02, borderColor: '#bfdbfe' }}
              key={i} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm text-center font-medium transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section className="bg-slate-950 text-white py-24 rounded-[3rem] my-10 mx-4 md:mx-10 shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} className="p-8 bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-600 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-950 rounded-xl border border-blue-900 group-hover:bg-blue-600 transition-colors"><Code className="text-blue-400 group-hover:text-white"/></div>
                  <ExternalLink size={20} className="text-slate-600 hover:text-white cursor-pointer"/>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400">{p.title}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">{p.desc}</p>
                <code className="text-xs font-mono px-3 py-1 bg-slate-800 rounded-full text-blue-300 border border-slate-700">{p.tech}</code>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & COURSES --- */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-2"><GraduationCap className="text-blue-600" /> Education</h3>
          <div className="border-l-2 border-slate-200 pl-6 space-y-8 relative">
            <div className="absolute -left-[9px] top-0 h-4 w-4 bg-blue-600 rounded-full border-4 border-slate-50"></div>
            <div>
              <h4 className="font-bold text-lg">B.S. in Computer Science</h4>
              <p className="text-slate-600">University Name • 2020 - 2024</p>
              <p className="text-sm mt-3 px-3 py-1 bg-blue-50 text-blue-700 inline-block rounded-full font-medium border border-blue-100">GPA: 3.8/4.0</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-2"><BookOpen className="text-blue-600" /> Key Courses</h3>
          <ul className="grid grid-cols-1 gap-3">
            {["Data Structures & Algorithms", "Operating Systems", "Cloud Computing", "UI/UX Architecture"].map(course => (
                <li key={course} className="p-4 bg-white border rounded-xl shadow-sm hover:border-blue-100 transition-colors">{course}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- FOOTER/CONTACT --- */}
      <footer className="text-center py-20 mt-10 border-t border-slate-200 bg-slate-100">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">If you are looking for a dedicated engineer ready to make an immediate impact, I’d love to hear from you.</p>
        <a 
          href="https://linkedin.com" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-10 py-4 bg-slate-950 text-white rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-slate-300"
        >
          <Linkedin size={20}/> LinkedIn Profile
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
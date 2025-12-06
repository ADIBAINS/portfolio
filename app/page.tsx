"use client";
import React from 'react';

// --- Fonts & Styles ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;0,6..96,800;1,6..96,400&family=Inter:wght@300;400;500;600&display=swap');
    
    .font-serif-retro {
      font-family: 'Bodoni Moda', serif;
    }
    .font-sans-clean {
      font-family: 'Inter', sans-serif;
    }
    .text-gradient-white {
        background-image: linear-gradient(to top, #A1A1AA 0%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    
    /* --- Hover Border Gradient Component Styles (Transparent Background) --- */
    .hover-border-gradient-container {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 9999px; /* rounded-full */
        padding: 1px; /* The gap for the effect */
        isolation: isolate;
        transition: all 0.3s ease-out;
        cursor: pointer;
        /* Initial subtle border for visibility */
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2); 
    }
    .hover-border-gradient-container:hover {
        /* Static subtle glow on hover (replacing the running line effect) */
        box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.4);
        transform: scale(1.01); /* Slight lift */
    }
    .hover-border-gradient-child {
        /* The actual button content style */
        /* Semi-transparent dark overlay for text contrast */
        background: rgba(0, 0, 0, 0.6); 
        border-radius: 9999px; /* rounded-full */
        padding: 0.75rem 2.5rem;
        z-index: 2;
        color: white;
        transition: all 0.3s ease-out;
        /* Ensuring text is sharp */
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
    }
    .border-gradient-effect {
        /* This layer is now static and hidden to remove the moving light effect */
        position: absolute;
        inset: -200%; 
        z-index: 1;
        
        /* Keeping the gradient definition but disabling animation/visibility */
        background: conic-gradient(
            transparent 0%,
            transparent 85%,
            rgba(255, 255, 255, 0.9) 90%,
            rgba(255, 255, 255, 1) 95%,
            rgba(255, 255, 255, 0.9) 100%,
            transparent 105%,
            transparent 360%
        );
        
        filter: none;
        transform: rotate(0deg); 
        transition: none; 
        animation: none; /* Removed animation */
        opacity: 0; /* Hidden */
    }
    .hover-border-gradient-container:hover .border-gradient-effect {
        opacity: 0; /* Ensure it stays hidden even on hover */
    }
    .hover-border-gradient-container:active {
        transform: scale(0.96);
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
    }
    
    /* Removed @keyframes border-run */
  `}</style>
);

// --- Icons (Inline SVGs) ---

const Sparkles = ({ size = 24, className = "" }) => (
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
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M9 5h4" />
  </svg>
);

const Twitter = ({ size = 24, className = "" }) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Github = ({ size = 24, className = "" }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Custom Hover Border Component ---

type HoverBorderGradientProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const HoverBorderGradient: React.FC<HoverBorderGradientProps> = ({ children, onClick, className = "" }) => {
    return (
        <button 
            onClick={onClick}
            className={`mt-10 inline-flex items-center justify-center text-white font-medium text-sm uppercase tracking-widest animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500 ${className}`}
        >
            <div className="hover-border-gradient-container">
                {/* This div previously held the moving light animation, now it's just a placeholder */}
                <div className="border-gradient-effect"></div>
                
                {/* The inner dark button content */}
                <span className="hover-border-gradient-child">
                    {children}
                </span>
            </div>
        </button>
    );
};

// --- Components ---

/**
 * DotGridBackground: 
 * A subtle dot matrix background with a radial mask.
 */
const DotGridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-black">
      {/* Dot Pattern: bg-[radial-gradient(#334155_1px,transparent_1px)] is a dark, subtle gray dot */}
      <div 
        className="absolute inset-0 h-full w-full bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-40" 
      />
      
      {/* Radial Mask: Fades the dots out towards the edges */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_10%,black_100%)]" />
      
      {/* Central ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
    </div>
  );
};

/**
 * Navbar: Minimalist top navigation with ADIBAINS branding
 */
const Navbar = () => (
  <nav className="relative z-10 w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto font-sans-clean">
    <div className="flex items-center gap-3 group cursor-default">
      {/* Abstract Logo Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center">
         <div className="absolute inset-0 bg-white/10 rounded-lg rotate-3 transition-transform group-hover:rotate-12 duration-500"></div>
         <div className="absolute inset-0 bg-white/5 rounded-lg -rotate-3 transition-transform group-hover:-rotate-6 duration-500"></div>
         {/* Logo text now uses the clean sans font and medium weight for consistency */}
         <span className="relative text-white font-sans-clean font-medium text-lg">A</span>
      </div>
      
      {/* Brand Name */}
      <span className="text-white text-base tracking-[0.2em] font-medium uppercase opacity-90 group-hover:opacity-100 transition-opacity">
        Adibains
      </span>
    </div>

    {/* Optional Links - Hidden on mobile for simplicity */}
    <div className="hidden md:flex gap-8 text-[11px] tracking-[0.15em] uppercase font-medium text-slate-500">
      <span className="hover:text-white transition-colors cursor-pointer">Manifesto</span>
      <span className="hover:text-white transition-colors cursor-pointer">Archives</span>
      <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
    </div>
  </nav>
);

/**
 * ContactButton: Uses the new HoverBorderGradient component.
 */
const ContactButton = () => {
  const handleScrollToContact: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // e.preventDefault(); // HoverBorderGradient is wrapped in a button already
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HoverBorderGradient onClick={handleScrollToContact}>
      Get in touch 
    </HoverBorderGradient>
  );
};

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon }) => (
  <a 
    href={href}
    className="text-zinc-600 hover:text-white transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={18} />
  </a>
)

// --- Main App Component ---

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-slate-200 relative overflow-hidden selection:bg-white selection:text-black flex flex-col">
      <GlobalStyles />
      <DotGridBackground />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative z-10 pb-20">
        
        {/* Subtle decorative element */}
        <div className="mb-6 animate-in fade-in zoom-in duration-1000 delay-100">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mb-4 opacity-50"></div>
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-medium">
                <Sparkles size={10} />
                <span>Coming Soon</span>
                <Sparkles size={10} />
            </div>
        </div>

        {/* Hero Typography - Added text-gradient-white for subtle highlight */}
        <div className="relative">
          <h1 className="font-serif-retro text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-2 text-gradient-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Stay Tuned
          </h1>
          <p className="font-sans-clean text-lg md:text-xl text-zinc-400 font-light tracking-wide max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Something exceptional is being built. <br />
            <span className="text-zinc-500">Cooking with My Manifesto</span>
          </p>
        </div>

        {/* Contact Button (Using the new Hover Border Gradient) */}
        <ContactButton />

      </main>

      {/* Minimal Footer */}
      <footer id="contact" className="relative z-10 w-full py-12 text-center font-sans-clean border-t border-zinc-900">
        <div className="flex flex-col items-center gap-6">
           <h3 className="text-lg font-medium text-zinc-400 mb-2">Connect with me</h3>
          <div className="flex gap-6">
            <SocialLink href="https://x.com/BainsAdi" icon={Twitter} /> 
            <SocialLink href="https://github.com/ADIBAINS/" icon={Github} /> 
            <SocialLink href="https://www.linkedin.com/in/adibains/" icon={Linkedin} />
          </div>
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase mt-4">
            © {new Date().getFullYear()} Adibains. All Rights Reserved.
          </p>
        </div>
      </footer>
      
      {/* Noise Overlay for Texture */}
      <div className="opacity-[0.03] pointer-events-none absolute inset-0 z-[20] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default App;
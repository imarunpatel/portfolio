"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import { Variants } from "motion/react";

export const sections = ["welcome", "experience", "projects", "contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("welcome");
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  const scrollToSection  = (id: string) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if(section) observer.observe(section);
    })

    return () => observer.disconnect();
  }, [])
  
  return (
    <header className="z-50 fixed" >
      <div className='dark:bg-black w-full fixed top-0 hidden md:flex items-center neuton dark:text-gray-100 px-14 h-14'>
          <nav className='flex gap-8'>
              {
                sections.map((item, index) => (
                  <div key={index} className={`text-lg font-semibold capitalize cursor-pointer ${activeSection === item ? 'text-blue-600' : ''}`} onClick={() => scrollToSection(item)}>
                      {item}
                  </div>
                ))
              }
          </nav>
      </div>
      <div className="dark:bg-black w-full top-0">
        <div style={container} className="md:hidden">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            style={nav}
          >
            <motion.div style={background} variants={sidebarVariants} />
            <Navigation scrollToSection={scrollToSection} />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </motion.nav>
        </div>
      </div>
    </header>
  );
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation: FC<{scrollToSection: (id: string) => void}> = ({ scrollToSection }) => (
  <motion.ul style={list} variants={navVariants}>
    {sections.map((item, index) => (
      <MenuItem item={item} index={index} key={index} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ item, index }: { item: string, index: number }) => {
  const border = `2px solid ${colors[index]}`;
  const scrollToSection  = (id: string) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection(item)}
    >
      <div style={{ ...iconPlaceholder, border }} />
      <div style={{ ...textPlaceholder, border }}>
        {item}
      </div>
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  position: "inherit",
  // display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  width: 500,
  maxWidth: "100%",
  // height: 400,
  backgroundColor: "var(--accent)",
  borderRadius: 20,
  overflow: "hidden",
  zIndex: 999,
};

const nav: React.CSSProperties = {
  width: 300,
};

const background: React.CSSProperties = {
  backgroundColor: "black",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  width: 300,
};

const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "fixed",
  top: 30,
  left: 28,
  borderRadius: "50%",
  background: "transparent",
};

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 80,
  width: 230,
};

const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
};

const iconPlaceholder: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  flex: "40px 0",
  marginRight: 20,
  
};

const textPlaceholder: React.CSSProperties = {
  borderRadius: 5,
  width: 200,
  // height: 20,
  padding: '5px 10px',
  flex: 1,
  color: "white"
};

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
export default Header;

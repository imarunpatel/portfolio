import { motion } from "motion/react";
import { FC, JSX } from "react";
import { sections } from "./Header";

interface NavProps {
  scrollToSection: (id: string) => void;
}
const Navigation: FC<NavProps> = ({ scrollToSection }) => (
  <motion.ul className="absolute top-20 w-[230px] m-0 p-6" variants={navVariants}>
    {sections.map((item, index) => (
      <MenuItem  key={index} scrollToSection={scrollToSection} item={item} index={index} />
    ))}
  </motion.ul>
);


interface MenuProps {
    item: { label: string, icon: JSX.Element };
    index: number;
    scrollToSection: (id: string) => void;
}
const MenuItem: FC<MenuProps> = ({item, scrollToSection}) => {
  
  return (
    <motion.li
      className="flex items-center gap-2 justify-start text-neutral-300 list-none mb-4 cursor-pointer"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection(item.label)}
    >
        {item.icon}
      <div className="capitalize text-neutral-300 text-lg px-2 py-1 flex-1">{item.label}</div>
    </motion.li>
  );
};

export default Navigation;

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

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


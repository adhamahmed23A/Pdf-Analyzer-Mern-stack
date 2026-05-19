/*
 * Imports
 */

import { AnnouncementBar } from "./announcement.bar";
import { Navbar } from "./navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/5 dark:bg-black/1 backdrop-blur-xl border-b border-white/10 ">
      <div className="flex flex-col gap-0 ">
        <div>
          <AnnouncementBar />
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: -20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Navbar />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-full font-sans bg-[#f7f9fd] text-slate-800">
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row min-h-screen w-full overflow-x-hidden"
          >
            <LeftPanel />
            <RightPanel onLoginSuccess={() => setIsLoggedIn(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-screen w-full overflow-hidden"
          >
            <Dashboard onLogout={() => setIsLoggedIn(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


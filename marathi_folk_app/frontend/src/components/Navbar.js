
import React from "react";
import { Music, Landmark, Clock, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <style>
        {`
          a {
            text-decoration: none !important;
          }
          a:hover,
          a:focus,
          a:active {
            text-decoration: none !important;
          }
        `}
      </style>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-4 shadow-lg text-center fixed top-0 left-0 w-full z-20"
      >
        {/* Logo Section */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            🎵 महाराष्ट्र सांस्कृतिक मंच
          </h1>

          <p className="text-sm md:text-base font-light mt-1">
            Cultural Platform for Maharashtra
          </p>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mt-3 md:mt-0 text-base md:text-lg font-semibold">
          {[ 
            { to: "/", label: "Home", icon: <Home size={22} /> },
            { to: "/predict", label: "Folk Songs", icon: <Music size={22} /> },
            { to: "/timeline", label: "Timeline", icon: <Clock size={22} /> },
            { to: "/cultureexplorer", label: "Culture Explorer", icon: <Landmark size={22} /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link to={item.to} className="flex items-center gap-1 md:gap-2">
                {item.icon} {item.label}
              </Link>
            </motion.div>
          ))}

          {/* Contribute Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to="/communityform"
              className="bg-white text-[#d32f2f] font-bold px-4 md:px-5 py-2 md:py-3 rounded-lg hover:bg-[#ffe1e1] transition shadow-md text-sm md:text-base"
            >
              Contribute
            </Link>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
};

export default Navbar;

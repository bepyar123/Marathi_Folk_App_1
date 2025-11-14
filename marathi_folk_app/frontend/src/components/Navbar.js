
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
        className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-8 shadow-xl text-center fixed top-0 left-0 w-full z-50"
      >

        {/* Logo Section */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider">
            🎵 महाराष्ट्र सांस्कृतिक मंच
          </h1>

          <p className="text-lg md:text-xl font-light mt-1">
            Cultural Platform for Maharashtra
          </p>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mt-5 md:mt-0 text-lg md:text-2xl font-semibold">

          {/* Link Items */}
          {[
            { to: "/", label: "Home", icon: <Home size={28} /> },
            { to: "/predict", label: "Folk Songs", icon: <Music size={28} /> },
            { to: "/timeline", label: "Timeline", icon: <Clock size={28} /> },
            { to: "/cultureexplorer", label: "Culture Explorer", icon: <Landmark size={28} /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link to={item.to} className="flex items-center gap-2">
                {item.icon} {item.label}
              </Link>
            </motion.div>
          ))}

          {/* Contribute Button */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to="/communityform"
              className="bg-white text-[#d32f2f] font-bold px-6 py-3 rounded-xl hover:bg-[#ffe1e1] transition shadow-lg text-xl"
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

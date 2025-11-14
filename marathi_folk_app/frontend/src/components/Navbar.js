

// import React from "react";
// import { Music, Landmark, Clock, Home } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-14 py-5 shadow-lg text-center fixed top-0 left-0 w-full z-50">
//       <div>
//         <h1 className="text-2xl font-extrabold tracking-wide">🎵 महाराष्ट्र सांस्कृतिक मंच</h1>
//         <p className="text-sm md:text-base font-light">Cultural Platform for Maharashtra</p>
//       </div>

//       <nav className="flex flex-wrap justify-center gap-5 mt-3 md:mt-0 text-base md:text-lg font-medium">

//         {/* ✅ Home Page Link Added Here */}
//         <Link to="/" className="hover:underline flex items-center gap-1">
//           <Home size={18} />  Home
//         </Link>

//         <Link to="/predict" className="hover:underline flex items-center gap-1">
//           <Music size={18} />  Folk Songs
//         </Link>

//         <Link to="/timeline" className="hover:underline flex items-center gap-1">
//           <Clock size={18} />  Timeline
//         </Link>

//         <Link to="/cultureexplorer" className="hover:underline flex items-center gap-1">
//           <Landmark size={18} />  Culture Explorer
//         </Link>

//         <Link
//           to="/communityform"
//           className="bg-white text-[#d32f2f] font-semibold px-5 py-2 rounded-lg hover:bg-[#ffe1e1] transition shadow-md"
//         > Contribute
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
// import React from "react";
// import { Music, Landmark, Clock, Home } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-8 shadow-xl text-center fixed top-0 left-0 w-full z-50">
      
//       {/* Left Logo Section */}
//       <div className="text-left">
//         <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider">
//           🎵 महाराष्ट्र सांस्कृतिक मंच
//         </h1>
//        <p className="text-lg md:text-xl font-light mt-1 pl-20">
//           Cultural Platform for Maharashtra
//         </p>

//       </div>

//       {/* Navigation Links */}
//       <nav className="flex flex-wrap justify-center gap-8 mt-5 md:mt-0 text-lg md:text-2xl font-semibold">

//         <Link to="/" className="hover:underline flex items-center gap-2">
//           <Home size={28} />  Home
//         </Link>

//         <Link to="/predict" className="hover:underline flex items-center gap-2">
//           <Music size={28} />  Folk Songs
//         </Link>

//         <Link to="/timeline" className="hover:underline flex items-center gap-2">
//           <Clock size={28} /> Timeline
//         </Link>

//         <Link to="/cultureexplorer" className="hover:underline flex items-center gap-2">
//           <Landmark size={28} />  Culture Explorer
//         </Link>

//         <Link
//           to="/communityform"
//           className="bg-white text-[#d32f2f] font-bold px-6 py-3 rounded-xl hover:bg-[#ffe1e1] transition shadow-lg text-xl"
//         >
//            Contribute
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
// import React from "react";
// import { Music, Landmark, Clock, Home } from "lucide-react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <motion.header
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="bg-[#d32f2f] text-white flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-8 shadow-xl text-center fixed top-0 left-0 w-full z-50"
//     >

//       {/* Logo Section */}
//       <motion.div
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5 }}>
        
//         <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider">
//           🎵 महाराष्ट्र सांस्कृतिक मंच
//         </h1>

//         <p className="text-lg md:text-xl font-light mt-1 text-center">
//           Cultural Platform for Maharashtra
//         </p>
//       </motion.div>

//       {/* Navigation Links */}
//       <nav className="flex flex-wrap justify-center gap-8 mt-5 md:mt-0 text-lg md:text-2xl font-semibold">

//         {/* Each link animated */}
//         {[
//           { to: "/", label: "Home", icon: <Home size={28} /> },
//           { to: "/predict", label: "Folk Songs", icon: <Music size={28} /> },
//           { to: "/timeline", label: "Timeline", icon: <Clock size={28} /> },
//           { to: "/cultureexplorer", label: "Culture Explorer", icon: <Landmark size={28} /> },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.15 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             <Link to={item.to} className="hover:underline flex items-center gap-2">
//               {item.icon} {item.label}
//             </Link>
//           </motion.div>
//         ))}

//         {/* Contribute Button */}
//         <motion.div
//           whileHover={{ scale: 1.15 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         >
//           <Link
//             to="/communityform"
//             className="bg-white text-[#d32f2f] font-bold px-6 py-3 rounded-xl hover:bg-[#ffe1e1] transition shadow-lg text-xl"
//           >
//             Contribute
//           </Link>
//         </motion.div>
//       </nav>
//     </motion.header>
//   );
// };

// export default Navbar;
import React from "react";
import { Music, Landmark, Clock, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      {/* Remove underline globally for all Links */}
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

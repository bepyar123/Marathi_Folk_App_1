// import React, { useState } from "react";
// import stories from "../data/stories";

// const StoryTeller = () => {
//   const [category, setCategory] = useState("historical");
//   const [story, setStory] = useState(null);
//   const [language, setLanguage] = useState("mr"); // "mr" or "en"

//   const generateStory = () => {
//     const list = stories[category];
//     const randomStory = list[Math.floor(Math.random() * list.length)];
//     setStory(randomStory);
//   };

//   return (
//     <div className="min-h-screen bg-orange-50 flex flex-col items-center p-6">
      
//       <h1 className="text-3xl font-bold text-orange-700 mb-4">
//         कथा संग्रह / Story Collection
//       </h1>

//       {/* Language Toggle */}
//       <div className="flex gap-4 mb-4">
//         <button
//           onClick={() => setLanguage("mr")}
//           className={`px-4 py-2 rounded-xl font-semibold ${
//             language === "mr" ? "bg-orange-600 text-white" : "bg-white border"
//           }`}
//         >
//           मराठी
//         </button>

//         <button
//           onClick={() => setLanguage("en")}
//           className={`px-4 py-2 rounded-xl font-semibold ${
//             language === "en" ? "bg-orange-600 text-white" : "bg-white border"
//           }`}
//         >
//           English
//         </button>
//       </div>

//       {/* Category Menu */}
//       <div className="flex gap-4 mb-6">
//         {["historical", "folklore", "spiritual"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setCategory(cat);
//               setStory(null);
//             }}
//             className={`px-4 py-2 rounded-xl font-semibold ${
//               category === cat ? "bg-orange-600 text-white" : "bg-white border"
//             }`}
//           >
//             {cat === "historical" && (language === "mr" ? "ऐतिहासिक" : "Historical")}
//             {cat === "folklore" && (language === "mr" ? "लोककथा" : "Folklore")}
//             {cat === "spiritual" && (language === "mr" ? "आध्यात्मिक" : "Spiritual")}
//           </button>
//         ))}
//       </div>

//       {/* Story Box */}
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl text-lg leading-relaxed">
//         {story ? (
//           <div>
//             <h2 className="text-2xl font-bold text-orange-700 mb-3">
//               {story.title[language]}
//             </h2>

//             <p className="whitespace-pre-line">
//               {story.story[language]}
//             </p>
//           </div>
//         ) : (
//           <span className="text-gray-500">
//             {language === "mr"
//               ? "कथा पाहण्यासाठी खालील बटणावर क्लिक करा"
//               : "Click the button below to see a story"}
//           </span>
//         )}
//       </div>

//       {/* New Story Button */}
//       <button
//         onClick={generateStory}
//         className="mt-6 bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-md"
//       >
//         {language === "mr" ? "नवीन कथा तयार करा" : "Generate New Story"}
//       </button>
//     </div>
//   );
// };

// export default StoryTeller;
import React, { useState } from "react";
import stories from "../data/stories";

const StoryTeller = () => {
  const [category, setCategory] = useState("historical");
  const [story, setStory] = useState(null);
  const [lang, setLang] = useState("mr"); // default Marathi

  const toggleLang = () => {
    setLang(lang === "mr" ? "en" : "mr");
  };

  const generateStory = () => {
    const list = stories[category];
    const randomStory = list[Math.floor(Math.random() * list.length)];
    setStory(randomStory);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center p-6">

      <h1 className="text-3xl font-bold text-orange-700 mb-4">
        कथा संग्रह
      </h1>

      {/* 🔥 LANGUAGE TOGGLE BUTTON (centered above categories) */}
      <button
        onClick={toggleLang}
        className="mb-4 bg-orange-700 text-white px-6 py-2 rounded-full font-semibold shadow"
      >
        {lang === "mr" ? "English" : "मराठी"}
      </button>

      {/* CATEGORY BUTTONS */}
      <div className="flex gap-4 mb-6">
        {["historical", "folklore", "spiritual"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setStory(null);
            }}
            className={`px-4 py-2 rounded-xl font-semibold ${
              category === cat ? "bg-orange-600 text-white" : "bg-white border"
            }`}
          >
            {cat === "historical" && (lang === "mr" ? "ऐतिहासिक" : "Historical")}
            {cat === "folklore" && (lang === "mr" ? "लोककथा" : "Folklore")}
            {cat === "spiritual" && (lang === "mr" ? "आध्यात्मिक" : "Spiritual")}
          </button>
        ))}
      </div>

      {/* STORY BOX */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl text-lg leading-relaxed">
        {story ? (
          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              {story.title[lang]}
            </h2>
            <p className="whitespace-pre-line">{story.story[lang]}</p>
          </div>
        ) : (
          <span className="text-gray-500">
            {lang === "mr"
              ? "कथा पाहण्यासाठी खालील बटणावर क्लिक करा"
              : "Click the button below to see a story"}
          </span>
        )}
      </div>

      {/* GENERATE BUTTON */}
      <button
        onClick={generateStory}
        className="mt-6 bg-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-md"
      >
        {lang === "mr" ? "नवीन कथा तयार करा" : "Generate New Story"}
      </button>

    </div>
  );
};

export default StoryTeller;

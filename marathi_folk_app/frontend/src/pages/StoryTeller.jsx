import React, { useState } from "react";
import { motion } from "framer-motion";

const StoryTeller = () => {
  const [keywords, setKeywords] = useState("");
  const [story, setStory] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateStory = async () => {
    if (!keywords.trim()) {
      setError("कृपया कीवर्ड भरा!");
      return;
    }

    setLoading(true);
    setError("");
    setStory("");
    setAudioUrl("");

    try {
      const response = await fetch("https://pranjalpatil766-5000.app.github.dev/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keywords }),
      });

      if (!response.ok) throw new Error("Server error!");

      const data = await response.json();
      setStory(data.story);
      setAudioUrl(data.audio_url);
    } catch (err) {
      console.error(err);
      setError("सर्व्हरशी संपर्क होत नाही. कृपया पुन्हा प्रयत्न करा!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-yellow-200 p-6">
      <motion.h1
        className="text-3xl font-bold text-orange-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎙️ कथा तयार करा
      </motion.h1>

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <textarea
          className="border p-3 rounded-lg w-full text-lg mb-4"
          rows="3"
          placeholder="उदा: शिवाजी युद्ध, संत तुकाराम, पावसाळा..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />

        <button
          onClick={handleGenerateStory}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded w-full"
          disabled={loading}
        >
          {loading ? "कथा तयार होत आहे..." : "कथा तयार करा 🎤"}
        </button>

        {error && <p className="text-red-600 font-medium mt-3">{error}</p>}

        {story && (
          <motion.div
            className="mt-4 bg-orange-50 p-4 rounded-lg shadow-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
              ✨ तयार कथा:
            </h2>
            <p className="text-gray-800 leading-relaxed">{story}</p>

            {audioUrl && (
              <audio controls className="mt-3 w-full">
                <source src={audioUrl} type="audio/mpeg" />
                तुमचा ब्राउझर ऑडिओ ऐकवू शकत नाही.
              </audio>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StoryTeller;

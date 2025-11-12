
import React, { useState } from "react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Contribute = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    
    <div className="bg-[#fff8f3] min-h-screen font-['Public_Sans']">
      {/* 🔶 Community Knowledge Hub Heading */}
      <header className="text-center py-10 px-6 bg-[#fff8f3]">
        <h1 className="text-4xl font-extrabold text-[#222] mb-2">
          सामुदायिक ज्ञान केंद्र /{" "}
          <span className="text-[#e36414]">Community Knowledge Hub</span>
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          महाराष्ट्राची संस्कृती, परंपरा, पाकविधी आणि कथांचे तुमचे ज्ञान सामायिक
          करा. मिळून आपण आपला वारसा भावी पिढ्यांसाठी जपतो.
        </p>
      </header>

      {/* 🔸 Main Form Section */}
      <main className="max-w-3xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center bg-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-300 mb-6"
        >
          ← Back
        </button>

        <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100">
          <h1 className="text-2xl font-bold text-[#e36414] mb-2">
            तुमचे ज्ञान सामायिक करा / Share Your Knowledge
          </h1>
          <p className="text-gray-600 mb-6">
            कथा, पाककृती, परंपरा किंवा हस्तकला सामायिक करून महाराष्ट्राच्या
            सांस्कृतिक वारशाचे जतन करण्यास मदत करा.
          </p>

          <form className="space-y-5">
            {/* Title */}
            <div>
              <label className="font-semibold text-gray-800">
                शीर्षक / Title
              </label>
              <input
                type="text"
                placeholder="उदा. पारंपरिक कोल्हापुरी चप्पल बनवणे"
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none"
              />
            </div>

            {/* Category & Location */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[45%]">
                <label className="font-semibold text-gray-800">
                  प्रकार / Category
                </label>
                <select className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none">
                  <option>कथा / दंतकथा</option>
                  <option>पाककृती / Recipe</option>
                  <option>हस्तकला / Handicraft</option>
                  <option>लोककला / Folk Art</option>
                </select>
              </div>

              <div className="flex-1 min-w-[45%]">
                <label className="font-semibold text-gray-800">Location</label>
                <input
                  type="text"
                  placeholder="e.g., Kolhapur, Mumbai"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <label className="font-semibold text-gray-800">Content</label>
              <textarea
                rows="5"
                placeholder="Share your knowledge in detail... Include history, significance, step-by-step processes, or personal experiences."
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-orange-300 outline-none"
              ></textarea>
            </div>

            {/* Image Upload */}
            <div>
              <label className="font-semibold text-gray-800">
                Add Images (Optional)
              </label>
              <div className="mt-2 border-2 border-dashed border-orange-300 rounded-lg p-6 text-center bg-orange-50 hover:bg-orange-100 transition">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="imageUpload"
                  onChange={handleImageUpload}
                />
                <label
                  htmlFor="imageUpload"
                  className="cursor-pointer flex flex-col items-center gap-2 text-gray-600"
                >
                  <Upload className="w-8 h-8 text-[#e36414]" />
                  <p className="text-sm">
                    Click to upload images or drag and drop (PNG, JPG up to 5MB each)
                  </p>
                </label>
              </div>

              {images.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(img)}
                      alt="preview"
                      className="h-20 w-20 object-cover rounded-md border"
                    />
                  ))}
                </div>
              )}
            </div>
 
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#e36414] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#d4580d] transition"
            >
              Share Knowledge
            </button>
          </form>


        

        </div>
      </main>
  <button
  onClick={logout}
  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
>
  Logout
</button>
      {/* Footer */}
      <footer className="bg-[#2c2c2c] text-white text-center py-4 mt-10">
        <p>© 2025 सांस्कृतिक वारसा | Cultural Heritage Platform</p>
      </footer>
    </div>
  );
};

export default Contribute;

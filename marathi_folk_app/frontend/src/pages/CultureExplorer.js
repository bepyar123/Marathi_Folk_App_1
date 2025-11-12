
import React, { useState } from "react";
import { MapPin, Shirt, Calendar, Utensils, Users } from "lucide-react";
import { motion } from "framer-motion";

const CultureExplorer = () => {
  const [language, setLanguage] = useState("mr");
  const [activeTab, setActiveTab] = useState("dress");

  // Tabs for Marathi and English
  const tabs = {
    mr: [
      { key: "dress", name: "पोशाख", icon: <Shirt size={20} /> },
      { key: "festivals", name: "सण", icon: <Calendar size={20} /> },
      { key: "dishes", name: "पदार्थ", icon: <Utensils size={20} /> },
      { key: "traditions", name: "परंपरा", icon: <Users size={20} /> },
    ],
    en: [
      { key: "dress", name: "Dress", icon: <Shirt size={20} /> },
      { key: "festivals", name: "Festivals", icon: <Calendar size={20} /> },
      { key: "dishes", name: "Dishes", icon: <Utensils size={20} /> },
      { key: "traditions", name: "Traditions", icon: <Users size={20} /> },
    ],
  };

  // Headings for Marathi and English
  const heading = {
    mr: "संस्कृती अन्वेषक ",
    en: "Culture Explorer ",
  };

  // Cultural Data for both languages
  const data = {
    mr: {
      dress: [
        {
          title: "पैठणी साडी",
          description:
            "रेशीम साडी ज्यावर मोर आणि फुलांचे नक्षीकाम असते — अभिमान आणि सौंदर्याचे प्रतीक.",
          location: "औरंगाबाद, येवला",
          tags: ["लग्न", "सण"],
          image: "/images/paithani.jpg",
        },
        {
          title: "नऊवारी साडी",
          description:
            "नऊ गजांची साडी जी धोतर शैलीत नेसली जाते — सामर्थ्य आणि परंपरेचे प्रतीक.",
          location: "महाराष्ट्रभर",
          tags: ["सांस्कृतिक कार्यक्रम", "समारंभ"],
          image: "/images/nauvari.jpg",
        },
        {
          title: "फेटा",
          description:
            "पुरुषांचा पारंपरिक पगडी, सन्मान आणि उत्सवाचे प्रतीक.",
          location: "पुणे, सातारा",
          tags: ["उत्सव", "लग्न"],
          image: "/images/pheta.jpg",
        },
        {
          title: "कोल्हापुरी चप्पल",
          description: "हाताने बनवलेली चामड्याची चप्पल, टिकाऊपणा आणि कला यासाठी प्रसिद्ध.",
          location: "कोल्हापूर",
          tags: ["दैनंदिन वापर", "वारसा"],
          image: "/images/kolhapuri.jpg",
        },
        {
          title: "धोतर-कुर्ता",
          description:
            "पुरुषांचा पारंपरिक पोशाख, धार्मिक व सांस्कृतिक प्रसंगी परिधान केला जातो.",
          location: "पश्चिम महाराष्ट्र",
          tags: ["परंपरा", "सण"],
          image: "/images/dhoti_kurta.jpg",
        },
        {
          title: "नथ",
          description:
            "महाराष्ट्रीय स्त्रीत्वाचे प्रतीक असलेली नथ — मोत्यांनी आणि सोन्याने बनवलेली.",
          location: "पुणे, नाशिक",
          tags: ["लग्न", "परंपरा"],
          image: "/images/nath.jpg",
        },
        {
          title: "हर आणि हिरवे चूड्यांचे संच",
          description:
            "विवाहित स्त्रियांसाठी शुभ आणि समृद्धीचे प्रतीक.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["सण", "शुभ चिन्ह"],
          image: "/images/green_bangles.jpg",
        },
      ],
      festivals: [
        {
          title: "गणेश चतुर्थी",
          description:
            "भगवान गणेशाच्या जन्माचा उत्सव महाराष्ट्रातील सर्वात मोठा सण म्हणून साजरा केला जातो.",
          location: "मुंबई, पुणे, कोकण",
          tags: ["मुख्य सण", "सार्वजनिक उत्सव"],
          image: "/images/ganesh_chaturthi.jpg",
        },
        {
          title: "गुढी पाडवा",
          description:
            "महाराष्ट्रीय नववर्ष, जे गुढी उभारून साजरे केले जाते — समृद्धीचे प्रतीक.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["नववर्ष", "परंपरा"],
          image: "/images/gudi_padwa.jpg",
        },
        {
          title: "दिवाळी",
          description:
            "प्रकाशाचा सण, ज्यात दिवे, मिठाई आणि आनंदाची देवाणघेवाण केली जाते.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["मुख्य सण", "कुटुंब"],
          image: "/images/diwali.jpg",
        },
        {
          title: "दहीहंडी",
          description:
            "गोविंदा पथकांचा थर लावून दहीहंडी फोडण्याचा सण — उत्साहाचा प्रतीक.",
          location: "मुंबई, ठाणे",
          tags: ["युवा सण", "खेळ"],
          image: "/images/dahi_handi.jpg",
        },
        {
          title: "शिवजयंती",
          description:
            "छत्रपती शिवाजी महाराज यांच्या जन्मदिनानिमित्त देशभक्तीचा उत्सव.",
          location: "रायगड, पुणे, सातारा",
          tags: ["इतिहास", "देशभक्ती"],
          image: "/images/shiv_jayanti.jpg",
        },
      ],
      dishes: [
        {
          title: "पुरणपोळी",
          description: "गुळ-डाळीपासून बनवलेली गोड पोळी — सणासुदीची खासियत.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["गोड पदार्थ", "सण"],
          image: "/images/puranpoli.jpg",
        },
        {
          title: "मिसळ पाव",
          description: "तिखट रस्सा, फरसाण आणि पाव यांचा भन्नाट संगम.",
          location: "कोल्हापूर, पुणे",
          tags: ["नाश्ता", "स्ट्रीट फूड"],
          image: "/images/misalpav.jpg",
        },
        {
          title: "वडा पाव",
          description: "मुंबईचे प्रसिद्ध फास्ट फूड — ‘इंडियन बर्गर’.",
          location: "मुंबई",
          tags: ["स्ट्रीट फूड", "जलद खाणे"],
          image: "/images/vadapav.jpg",
        },
        {
          title: "थालिपीठ",
          description: "बहु-अनाज पीठापासून बनवलेला पौष्टिक पदार्थ.",
          location: "पुणे, नागपूर",
          tags: ["आरोग्यदायी", "ग्रामीण"],
          image: "/images/thalipeeth.jpg",
        },
        {
          title: "पोहे",
          description: "हलका, पौष्टिक आणि लोकप्रिय नाश्ता.",
          location: "नाशिक, कोकण",
          tags: ["नाश्ता", "घरगुती"],
          image: "/images/pohe.jpg",
        },
        {
          title: "मोदक",
          description: "भगवान गणेशाचा आवडता गोड पदार्थ.",
          location: "कोकण, पुणे",
          tags: ["गोड पदार्थ", "सण"],
          image: "/images/modak.jpg",
        },
      ],
      traditions: [
        {
          title: "ओवी आणि भारूड",
          description:
            "महिलांच्या श्रमगीतांतून संस्कार आणि समाजाचे प्रतिबिंब दिसते.",
          location: "विदर्भ, मराठवाडा",
          tags: ["लोकगीत", "संस्कृती"],
          image: "/images/ovi_bharud.jpg",
        },
        {
          title: "भजन मंडळ",
          description:
            "भक्तीगीतांच्या माध्यमातून समाजजागृती आणि सांस्कृतिक एकता जपली जाते.",
          location: "संपूर्ण महाराष्ट्र",
          tags: ["भक्ती", "वारसा"],
          image: "/images/bhajan.jpg",
        },
        {
          title: "काठी नृत्य",
          description:
            "दांडिया शैलीतील ग्रामीण नृत्यप्रकार.",
          location: "पश्चिम महाराष्ट्र",
          tags: ["लोकनृत्य", "उत्सव"],
          image: "/images/kathi_dance.jpg",
        },
        {
          title: "पवाडा गायन",
          description:
            "वीररसप्रधान गीतप्रकार जो मराठ्यांच्या पराक्रमाचे वर्णन करतो.",
          location: "सातारा, नाशिक",
          tags: ["वीररस", "इतिहास"],
          image: "/images/powada.jpg",
        },
      ],
    },

    en: {
      dress: [
        {
          title: "Paithani Saree",
          description:
            "Silk saree with intricate peacock motifs — symbol of grace and pride.",
          location: "Aurangabad, Yeola",
          tags: ["Festivals", "Weddings"],
          image: "/images/paithani.jpg",
        },
        {
          title: "Nauvari Saree",
          description:
            "Nine-yard saree draped in dhoti style — symbolizing strength and tradition.",
          location: "Across Maharashtra",
          tags: ["Culture", "Ceremonies"],
          image: "/images/nauvari.jpg",
        },
        {
          title: "Kolhapuri Chappal",
          description:
            "Handcrafted leather sandals — symbol of skill and tradition.",
          location: "Kolhapur",
          tags: ["Ethnic Wear", "Heritage"],
          image: "/images/kolhapuri.jpg",
        },
        {
          title: "Pheta (Turban)",
          description:
            "Colorful headgear for men worn on festive occasions.",
          location: "Pune, Satara",
          tags: ["Celebration", "Tradition"],
          image: "/images/pheta.jpg",
        },
        {
          title: "Dhoti-Kurta",
          description: "Traditional attire for men worn in religious events.",
          location: "Western Maharashtra",
          tags: ["Tradition", "Festival"],
          image: "/images/dhoti_kurta.jpg",
        },
      ],
      festivals: [
        {
          title: "Ganesh Chaturthi",
          description:
            "Grand celebration of Lord Ganesha’s birth filled with devotion and joy.",
          location: "Mumbai, Pune, Konkan",
          tags: ["Major Festival"],
          image: "/images/ganesh_chaturthi.jpg",
        },
        {
          title: "Gudi Padwa",
          description:
            "Maharashtrian New Year marked by raising the symbolic Gudi.",
          location: "All Maharashtra",
          tags: ["Tradition", "Prosperity"],
          image: "/images/gudi_padwa.jpg",
        },
        {
          title: "Diwali",
          description:
            "Festival of Lights — symbol of victory of light over darkness.",
          location: "All regions",
          tags: ["Festival", "Family"],
          image: "/images/diwali.jpg",
        },
        {
          title: "Dahi Handi",
          description:
            "Human pyramid competition celebrating Lord Krishna’s playful spirit.",
          location: "Mumbai, Thane",
          tags: ["Sport", "Festival"],
          image: "/images/dahi_handi.jpg",
        },
        {
          title: "Shiv Jayanti",
          description:
            "Commemoration of Chhatrapati Shivaji Maharaj’s birth — symbol of pride.",
          location: "Raigad, Pune",
          tags: ["Patriotism", "History"],
          image: "/images/shiv_jayanti.jpg",
        },
      ],
      dishes: [
        {
          title: "Puran Poli",
          description: "Sweet lentil-stuffed bread served during festivals.",
          location: "All Maharashtra",
          tags: ["Dessert", "Festival"],
          image: "/images/puranpoli.jpg",
        },
        {
          title: "Misal Pav",
          description: "Spicy sprout curry topped with farsan — breakfast staple.",
          location: "Kolhapur, Pune",
          tags: ["Spicy", "Street Food"],
          image: "/images/misalpav.jpg",
        },
        {
          title: "Vada Pav",
          description:
            "Spicy potato fritter served in a bun — Mumbai’s signature snack.",
          location: "Mumbai",
          tags: ["Fast Food", "Iconic"],
          image: "/images/vadapav.jpg",
        },
        {
          title: "Thalipeeth",
          description:
            "Multigrain spiced flatbread — nutritious and flavorful.",
          location: "Pune, Nagpur",
          tags: ["Healthy", "Traditional"],
          image: "/images/thalipeeth.jpg",
        },
        {
          title: "Modak",
          description:
            "Steamed sweet dumpling — favorite of Lord Ganesha.",
          location: "Konkan, Pune",
          tags: ["Sweet", "Festival"],
          image: "/images/modak.jpg",
        },
      ],
      traditions: [
        {
          title: "Ovi-Bharud",
          description:
            "Folk verses sung by women depicting daily life and values.",
          location: "Vidarbha, Marathwada",
          tags: ["Folk Song"],
          image: "/images/ovi_bharud.jpg",
        },
        {
          title: "Bhajan Mandal",
          description:
            "Groups singing devotional songs promoting unity and spirituality.",
          location: "All Maharashtra",
          tags: ["Devotion", "Heritage"],
          image: "/images/bhajan.jpg",
        },
        {
          title: "Powada",
          description:
            "Heroic ballads describing Maratha bravery and valor.",
          location: "Satara, Nashik",
          tags: ["Heroic", "Folk Art"],
          image: "/images/powada.jpg",
        },
        {
          title: "Kathi Dance",
          description:
            "Folk dance using sticks performed during harvest festivals.",
          location: "Western Maharashtra",
          tags: ["Folk Dance"],
          image: "/images/kathi_dance.jpg",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[#fff6f0] flex flex-col items-center px-6 py-10">
      {/* Heading & Language Toggle */}
      <div className="flex justify-between items-center w-full max-w-5xl mb-6">
        <h1 className="text-4xl font-extrabold text-center flex-1">
          {heading[language]}
        </h1>
        <button
          onClick={() => setLanguage(language === "mr" ? "en" : "mr")}
          className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all"
        >
          {language === "mr" ? "English" : "मराठी"}
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-gray-700 text-center max-w-3xl mb-10 leading-relaxed">
        {language === "mr"
          ? "महाराष्ट्राच्या समृद्ध वारशाचा शोध घ्या — पोशाख, सण, खाद्यपदार्थ आणि परंपरा."
          : "Explore Maharashtra’s rich heritage — from attire and festivals to cuisine and traditions."}
      </p>

      {/* Tabs */}
      <div className="flex justify-center bg-white rounded-full shadow-md overflow-hidden mb-12">
        {tabs[language].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-8 py-3 font-semibold text-gray-700 transition-all ${
              activeTab === tab.key
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-gray-100"
            }`}
          >
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {data[language][activeTab]?.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden w-[320px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <MapPin size={16} className="mr-1 text-orange-600" />
                {item.location}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CultureExplorer;

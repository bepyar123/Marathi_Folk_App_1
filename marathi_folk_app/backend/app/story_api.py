from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from gtts import gTTS
import os
import uuid

app = Flask(__name__, static_folder="static")
CORS(app, resources={r"/*": {"origins": "*"}})  # allow React frontend to talk to Flask backend


# ---------- Marathi Story Generator ----------
def generate_story(keywords):
    if not keywords.strip():
        return "कृपया काही शब्द द्या म्हणजे मी कथा सांगू शकेन."

    if "शिवाजी" in keywords or "युद्ध" in keywords:
        return f"एका काळी महाराष्ट्रात {keywords} यांच्या वीरतेची गाथा सर्वत्र प्रसिद्ध होती. मावळ्यांनी स्वराज्यासाठी प्राण पणाला लावले."
    elif "लावणी" in keywords or "प्रेम" in keywords:
        return f"{keywords} यांच्या सुरेल तालावर प्रेमकथा फुलली. गाण्यांमधून गाव मोहरून गेलं."
    elif "संत" in keywords or "भक्ती" in keywords:
        return f"{keywords} यांच्या भक्तीभावाने महाराष्ट्राची माती पावन झाली. अभंग, कीर्तन आणि नामस्मरण सर्वत्र घुमू लागले."
    elif "कोळी" in keywords or "समुद्र" in keywords:
        return f"{keywords} लोक समुद्राच्या लाटांशी रोज झुंज देत होते. त्यांच्या गीतांमध्ये जीवनाची गाथा होती."
    else:
        return f"एके काळी महाराष्ट्रात {keywords} यावर आधारित सुंदर कथा होती. ती परंपरा आणि संस्कृतीने भारलेली होती."


# ---------- API Route ----------
@app.route("/story", methods=["POST"])
def story():
    data = request.get_json()
    keywords = data.get("keywords", "")
    story_text = generate_story(keywords)

    # Create static folder if missing
    if not os.path.exists("static"):
        os.makedirs("static")

    # Generate unique audio file
    filename = f"story_{uuid.uuid4().hex}.mp3"
    file_path = os.path.join("static", filename)

    # Generate Marathi TTS
    tts = gTTS(story_text, lang="mr")
    tts.save(file_path)

    # Return both story + audio URL
    response = {
        "story": story_text,
        "audio_url": f"http://127.0.0.1:5000/static/{filename}"
    }
    return jsonify(response)


# ---------- Serve Audio Files ----------
@app.route("/static/<path:filename>")
def serve_audio(filename):
    return send_from_directory("static", filename)


# ---------- Main Entry ----------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

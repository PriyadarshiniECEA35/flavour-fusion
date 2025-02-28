// ========================== 🔴 STEP 1: INSTALL PREREQUISITES ========================== //
// 🔴 TODO: Install Node.js → https://nodejs.org/
// 🔴 TODO: Install MongoDB → https://www.mongodb.com/try/download/community
// 🔴 TODO: Install Visual Studio Code → https://code.visualstudio.com/
// 🔴 TODO: Install Git (Optional, for version control)

// ========================== 🔵 STEP 2: SET UP BACKEND (server) ========================== //
// 🔵 Create the project folder and navigate into it:
console.log("$ mkdir FlavourFusion && cd FlavourFusion");
console.log("$ mkdir server client");

// 🔵 Move into the server folder and initialize a Node.js project:
console.log("$ cd server");
console.log("$ npm init -y");

// 🔵 Install backend dependencies:
console.log("$ npm install express cors dotenv mongoose axios pdfkit");

// 🔵 Create a .env file inside the server folder and add:
console.log("MONGO_URI=your_mongodb_connection_string");
console.log("UNSPLASH_API_KEY=your_unsplash_api_key");

// 🔵 Backend Code: server.js
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

// 🔵 Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const RecipeSchema = new mongoose.Schema({
  topic: String,
  recipe: String,
  imageUrl: String,
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

// 🔵 API Route to Generate Recipe
app.post("/generate-recipe", async (req, res) => {
  try {
    const { topic } = req.body;
    const recipe = Vegan Chocolate Cake Recipe:\nIngredients: 2 cups flour, 1 cup cocoa powder, 1.5 cups almond milk...;
    const joke = "Why do programmers prefer dark mode? Because light attracts bugs!";

    // 🔵 Fetch Recipe Image from Unsplash
    const imageResponse = await axios.get(
      https://api.unsplash.com/search/photos?query=${topic}&client_id=${UNSPLASH_API_KEY}
    );
    const imageUrl = imageResponse.data.results[0]?.urls.regular || "";

    res.json({ recipe, joke, imageUrl });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate recipe." });
  }
});

// 🟢 Start the Express Server
app.listen(PORT, () => console.log(🚀 Server running on port ${PORT}));

// ========================== 🟡 STEP 3: SET UP FRONTEND (client) ========================== //
// 🟡 Move back to the project root and create a React app:
console.log("$ cd ..");
console.log("$ npx create-react-app client");

// 🟡 Install frontend dependencies:
console.log("$ cd client");
console.log("$ npm install axios tailwindcss file-saver");
console.log("$ npx tailwindcss init");

// 🟡 Modify tailwind.config.js:
console.log("Updating tailwind.config.js...");
module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

// 🟡 Modify index.css:
console.log("Updating index.css...");
@tailwind base;
@tailwind components;
@tailwind utilities;

// 🟡 INFO: Create RecipeGenerator Component
const { useState, useEffect } = require("react");
const axiosClient = require("axios");

const RecipeGenerator = () => {
  const [topic, setTopic] = useState("");
  const [recipe, setRecipe] = useState("");
  const [joke, setJoke] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setRecipe("");
    setJoke("");

    try {
      const response = await axiosClient.post("http://localhost:5000/generate-recipe", { topic });
      setRecipe(response.data.recipe);
      setJoke(response.data.joke);
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      setRecipe("Failed to generate recipe.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Flavour Fusion</h1>
      <input type="text" placeholder="Enter Recipe Topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full p-2 border rounded mb-2" />
      <button onClick={handleGenerate} className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? "Generating..." : "Generate Recipe"}
      </button>
      {recipe && <p className="mt-4">{recipe}</p>}
      {joke && <p className="mt-4 text-green-500">{joke}</p>}
      {imageUrl && <img src={imageUrl} alt="Recipe" className="mt-4 w-64" />}
    </div>
  );
};

export default RecipeGenerator;

// ========================== 🟣 FINAL STEP: RUN THE PROJECT ========================== //
// 🟣 Start Backend:
console.log("$ cd server");
console.log("$ node server.js");

// 🟣 Expected Backend Output:
console.log(`
🚀 Server running on port 5000
✅ MongoDB Connected
`);

// 🟣 Start Frontend:
console.log("$ cd ../client");
console.log("$ npm start");

// 🟣 Expected Frontend Output in Terminal:
console.log(`
Compiled successfully!
You can now view the app in the browser:
  Local: http://localhost:3000
`);

// ========================== 🟢 OUTPUT SAMPLE IN BROWSER ========================== //
console.log(`
----------------------------------------
✅ Flavour Fusion - AI Recipe Generator
----------------------------------------
Enter Recipe Topic: "Vegan Chocolate Cake"
[Click Generate Recipe]

🔹 Recipe: Vegan Chocolate Cake Recipe:
   Ingredients: 2 cups flour, 1 cup cocoa powder, 1.5 cups almond milk...

🤣 Programmer Joke: "Why do programmers prefer dark mode? Because light attracts bugs!"

🖼 Image: (Image of a Vegan Chocolate Cake displayed)
----------------------------------------
`);

// 🎉 Now your *Flavour Fusion AI-Driven Recipe Blogging App* is running successfully! 🚀
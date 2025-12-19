import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateWithRetry(model, prompt, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text(); // Success! Return the text immediately.
    } catch (error) {
      if (i === retries - 1) throw error;
      if (
        error.message.includes("503") ||
        error.message.includes("overloaded")
      ) {
        const waitTime = Math.pow(2, i) * 1000; // 1s, 2s, 4s...
        console.warn(
          `Gemini overloaded. Retrying in ${waitTime}ms... (Attempt ${
            i + 1
          }/${retries})`
        );
        await delay(waitTime);
      } else if (error.message.includes("429")) {
        throw error;
      } else {
        // If it's NOT a 503 (e.g., Invalid API Key), don't retry. Crash fast.
        throw error;
      }
    }
  }
}

const getApiResponse = async (req, res) => {
  try {
    const { movieQuery } = req.body;

    if (!movieQuery) {
      return res.status(400).json({ error: "Query is required" });
    }
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: { responseMimeType: "application/json" },
    });

    const prompt = `
            You are a movie recommendation engine. 
            The user is asking for: "${movieQuery}".
            
            Recommend 5 movies. 
            Return a JSON array where each object has these fields:
            - title
            - year
            - director
            - genre
            - reason (a short sentence explaining why it fits the user's query)
            - rating (approximate IMDB rating out of 10)
            Example format:
            {
              "results": [
                 { "title": "Inception", "genre": "Sci-Fi", "year": "2010","director":"director_name", "reason": "Matches your request for mind-bending concepts." , rating:"9.2"}
              ]
            }
        `;

    const text = await generateWithRetry(model, prompt);
    if (!text) {
      throw new Error("Gemini returned empty response");
    }
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const jsonResponse = JSON.parse(cleanedText);
    if(!jsonResponse){
      throw new Error("No Json response");
    }

    return res.json({ recommendations: jsonResponse });

  } catch (error) {
    console.error("Error generating recommendations:", error);
    return res.status(500).json({ error: "Failed to fetch recommendations." });
  }
};

export default getApiResponse;

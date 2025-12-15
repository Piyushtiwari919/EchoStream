import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    if (!text) {
      throw new Error("Gemini returned empty response");
    }
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const jsonResponse = JSON.parse(cleanedText);

    return res.json({ recommendations: jsonResponse });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    return res.status(500).json({ error: "Failed to fetch recommendations." });
  }
};

export default getApiResponse;

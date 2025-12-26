import OpenAI from "openai"
import dotenv from "dotenv"
import Review from "../models/review.js"
dotenv.config()

console.log("--------------------------------");
console.log("Received Request for Code Review");
// console.log("API Key Exists?", !!process.env.GROQ_API_KEY);
console.log("--------------------------------");

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
})

export const getReview = async (req, res) => {
    // console.log("Incoming request body : ", req.body);
    const { code, language } = req.body;

    console.log("---------------------------------------");
    console.log("📝 Received Code to Review:", code ? "Yes (Length: " + code.length + ")" : "NO CODE!");

    if (!code) {
        res.status(400).send("Code is missing..");
    }

    try {
        const response = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: 'system',
                content: `
                    You are an expert ${language} code reviewer. Provide detailed code reviews for developers.

                    1. **Structure your response using Markdown Headers**:
                        - Use "### 1. Original Code" for the first section.
                        - Use "### 2. Code Correction" for the fixed code.
                        - Use "### 3. Explanation" for why the fix works.
                        - Use "### 4. Best Practices" for advice.
                    
                    2. **Do NOT use bold text** for section titles (e.g., do not use **Original Code**).
                    3. Wrap all code snippets in triple backticks with the language specified (e.g. \`\`\`${language.toLowerCase()}).
                    4. Ensure the correction follows strict ${language} conventions and syntax.
                `
            },
            {
                role: 'system',
                content: code
            }
            ],
            max_completion_tokens: 1500
        })

        // console.log("Raw AI Response:", JSON.stringify(response, null, 2));

        if (!response || !response.choices || response.choices.length === 0) {
            console.error("Error: No choices in response!");
            return res.status(500).send("AI returned an empty response.");
        }

        const review = response.choices[0].message.content;
        console.log("Review Generated Successfully!");

        const newReview = await Review.create({
            code,
            review,
            language
        })

        console.log("Review saved into database successfully: ", newReview?._id ? true : false)
        res.send(review);

    } catch (err) {
        console.error("AI Error: ", err)
        res.status(500).send("Something went wrong with the AI .")
    }
}

export const getHistory = async (req, res) => {
    try {
        const history = await Review.find().sort({ createdAt: -1 }).limit(10)
        res.json(history)
    }catch(error){
        res.status(500).send("Failed to fetch history")
    }
}

export const clearHistory = async (req, res) => {
    try{
        await Review.deleteMany({})
        console.log("History cleared successfully")

        res.status(200).send("History cleared")
    }catch(error){
        console.error("Error Clearing history: ", error)
        res.status(500).send("Failed to clear History...")
    }
}
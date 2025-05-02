
const express = require("express");
const { CohereClient } = require("cohere-ai");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

require("dotenv").config();

// ✅ Use the new syntax from v5
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

router.post("/summary", auth, async (req, res) => {
  try {
    const excelData = req.body.data;

    if (!excelData || !Array.isArray(excelData)) {
      return res.status(400).json({ error: "Invalid or missing data array" });
    }

    // const prompt = `Summarize the following tabular JSON data:\n${JSON.stringify(
    //   excelData.slice(0, 10)
    // )} and `;
const prompt = `Summarize the following tabular JSON data:\n${JSON.stringify(
  excelData.slice(0, 10)
)}\n\nReturn a clear summary with the following details:
1. Who has the highest total and their value.
2. Who has the lowest total and their value.
3. Who shows the most growth across months.
4. Any noticeable trends or patterns in the data.
5. Provide a short summary title or tag (e.g., "Monthly Sales Performance").

Make it concise and useful for frontend display.`;

    const response = await cohere.generate({
      model: "command",
      prompt: prompt,
      maxTokens: 200,
      temperature: 0.5,
    });

    res.json({ summary: response.generations[0].text.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cohere summary failed" });
  }
});

module.exports = router;

const Groq = require("groq-sdk");
async function main() {
  const currentKey = process.env.VITE_GROQ_API_KEY;
  console.log("Current Key in env:", currentKey);
  for (const key of [currentKey, "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"]) {
    console.log(`\nTesting key: ${key}`);
    const groq = new Groq({ apiKey: key });
    try {
      const resp = await groq.chat.completions.create({
        messages: [{ role: "user", content: "Hi" }],
        model: "llama-3.3-70b-versatile",
      });
      console.log("Success! Reply:", resp.choices[0].message.content);
    } catch (e) {
      console.error("Error:", e.message);
    }
  }
}
main();

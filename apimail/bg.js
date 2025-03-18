chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("📩 Message reçu dans background.js :", request);

  if (request.action === "generate_gpt") {
    console.log("✅ Requête GPT détectée, envoi à OpenAI...");

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer TON_OPENAI_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content:
              "Tu es un assistant expert en rédaction d'emails professionnels. Tu dois rédiger des réponses efficaces, courtes et percutantes, adaptées à un contexte professionnel. Sois direct, mais courtois. Ne répète pas inutilement les informations déjà données dans l'email reçu.",
          },
          {
            role: "user",
            content: `Email reçu : "${request.receivedText}" \n\nRéponds à cet email de manière professionnelle et pertinente : "${request.text}"`,
          },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("✅ Réponse API OpenAI :", data);
        sendResponse({ text: data.choices[0].message.content });
      })
      .catch((error) => {
        console.error("❌ Erreur lors de l'appel API :", error);
        sendResponse({ text: "Erreur lors de la génération de la réponse." });
      });

    return true; // Permet d'utiliser sendResponse de manière asynchrone
  }
});

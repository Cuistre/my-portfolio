function getLastReceivedEmail() {
  let allEmails = document.querySelectorAll(".a3s.aiL"); // Sélecteur des emails reçus
  if (allEmails.length > 0) {
    let lastEmail = allEmails[allEmails.length - 1]; // Prend le dernier email affiché
    return lastEmail.innerText.trim(); // Nettoie le texte
  }
  return "";
}

function addGPTButton() {
  let emailEditors = document.querySelectorAll(".Am.Al.editable");

  emailEditors.forEach((editor) => {
    let toolbar = document.querySelector(".btC");

    if (!toolbar) {
      return;
    }

    if (!toolbar.querySelector("#gpt-reply-button")) {
      let btn = document.createElement("button");
      btn.id = "gpt-reply-button";
      btn.innerText = "🧠 GPT";
      btn.style.marginLeft = "10px";
      btn.style.padding = "5px";
      btn.style.cursor = "pointer";
      btn.style.background = "#0078D4";
      btn.style.color = "#ffffff";
      btn.style.border = "none";
      btn.style.borderRadius = "5px";

      btn.onclick = function () {
        let emailText = editor.innerText;
        let receivedEmailText = getLastReceivedEmail(); // Récupération du dernier email reçu

        console.log("📨 Envoi du texte à GPT :", emailText);
        console.log("📩 Texte de l'email reçu :", receivedEmailText);

        chrome.runtime.sendMessage(
          {
            action: "generate_gpt",
            text: emailText,
            receivedText: receivedEmailText, // On envoie aussi l'email reçu
          },
          (response) => {
            console.log("✅ Réponse GPT reçue :", response.text);
            editor.innerText = response.text;
          }
        );

        console.log("📤 Message envoyé à background.js !");
      };

      toolbar.appendChild(btn);
    }
  });
}

setInterval(addGPTButton, 2000);

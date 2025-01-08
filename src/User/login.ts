import prompt from "prompts";
import bcrypt from "bcrypt";

const pinData = {
  pinHash: bcrypt.hashSync("1234", 10),
};

export async function login(): Promise<boolean> {
  console.log("Bienvenue sur notre application !");

  let attemps : number = 0;

  while (attemps < 3) {
    const response = await prompt ({
      type: "password",
      name: "pin",
      message: "Veuillez entrez votre code PIN :",
      validate: (v) => (v.length === 4 ? true : "Le code PIN doit contenir 4 chiffres"),
    });

    const enterPin = response.pin;
    const pinValid = await bcrypt.compare(enterPin, pinData.pinHash);


    if (!enterPin) {
      console.log("Vous n'avez rien entré. Veuillez réessayer.");
      continue;


    } if (pinValid) {
      console.log("Connexion réussie !");
      return true;

    } else {
      console.log("Code PIN incorrect.");
      attemps ++;
    }
  }
  console.log("Trop de tentatives échouées. L'application va se fermer.");
  return false;
}
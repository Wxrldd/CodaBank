import prompt from "prompts";
import { CLI } from "./CLI";
import { login } from "./User/login";
import { deposit } from "./Account/Transactions/deposit";
import { withdrawal } from "./Account/Transactions/withdrawal";
import { displayTenOperation } from "./Account/Historique/operation";

const startupParts = [
  "   __________  ____  ___       ____  ___    _   ____ __",
  "  / ____/ __ \\/ __ \\/   |     / __ )/   |  / | / / //_/",
  " / /   / / / / / / / /| |    / __  / /| | /  |/ / ,<   ",
  "/ /___/ /_/ / /_/ / ___ |   / /_/ / ___ |/ /|  / /| |  ",
  "\\____/\\____/_____/_/  |_|  /_____/_/  |_/_/ |_/_/ |_|",
  "",
  "La banque de demain, aujourd'hui.",
  "",
];

console.log(startupParts.join("\n"));


async function main() {
  const isLogged = await login();
  if (!isLogged) {
    process.exit(1);
  }

let account = 3400;

const cli = new CLI([
  {
    title: "Déposer de l'argent",
    value: "deposit",
    action: async () => {
      const depot = await prompt({
        type: "number",
        name: "amount",
        message: "Montant à déposer : ",

      });
      if (depot.amount) {
        account = deposit(account, depot.amount.toString());
      }
    },
  },
  {
    title: "Retirer de l'argent",
    value: "withdrawal",
    action: async () => {
      const depot = await prompt({
        type: "number",
        name: "amount",
        message: "Montant à retirer : ",
      });
      if (depot.amount) {
        account = withdrawal(account, depot.amount.toString());
      }
    },
  },
  {
    title: "Voir l'historique des transactions",
    value: "view_history",
    action: () => {
      displayTenOperation();
    },
  },
  {
    title: "Voir le solde de mon compte",
    value: "view_solde",
    action: () => {
      console.log(`Votre solde actuel est de : ${account}€`);
    }
  },
  
]);
cli.menu();
}

main();

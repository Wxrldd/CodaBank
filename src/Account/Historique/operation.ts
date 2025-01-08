import { formatDate } from "../../Date/formatDate";
  
interface Operation {
  date: string;
  type: "dépôt" | "retrait";
  montant: number;
  solde: number;
  valide: boolean;
}

const historique : Operation[] = [];

export function saveOperation(
  type: "dépôt" | "retrait",
  montant: number,
  solde: number,
  valide: boolean
) : void {
  historique.push({
    date: formatDate(new Date()),
    type,
    montant,
    solde,
    valide,
  });
}

export function displayTenOperation(): void {
  console.log("========= Historique des opérations =========");
  const lastOperations = historique.slice(-10).reverse();
  lastOperations.forEach((oper, index) => {
    console.log(
      `${index + 1}. [${oper.date}] -- ${oper.type.toUpperCase()} : ${oper.montant} € | Solde : ${oper.solde} € | ${
        oper.valide ? "Réussie" : "Échouée"
      }`
    );
  });
}
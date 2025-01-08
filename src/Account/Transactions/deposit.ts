import { saveOperation } from "../Historique/operation";

export function deposit(account: number, input : string) {
  console.log("========== Dêpot d'argent ==========");

  const amount : number = parseInt(input, 10);

  if (isNaN(amount) || amount <= 0) {
    console.log("Erreur : Le montant doit être positif.")
    saveOperation("dépôt", amount, account, false);
    return account;
  }

  const newSolde : number = account + amount;
  console.log(`Dépôt réussi ! Votre solde est maintenant à  : ${newSolde}€`);
  saveOperation("dépôt", amount, newSolde, true)
  return newSolde;
}

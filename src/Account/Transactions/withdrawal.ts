import { saveOperation } from "../Historique/operation";

export function withdrawal(account : number, input : string) {
  console.log("========== Retrait d'argent ==========");

  const amount : number = parseInt(input, 10);

  if (isNaN(amount) || amount <= 0) {
    console.log("Erreur : Le montant doit être un entier positif.")
    saveOperation("retrait", amount, account, false);
    return account;

  } if (amount > account) {
    console.log("Erreur: Vous ne pouvez pas retirer plus que votre solde actuel.");
    saveOperation("retrait", amount, account, false);
    return account;
  } 

  const newSolde : number = account - amount;
  console.log(`Retrait réussi ! Votre solde est maintenant à : ${newSolde}€`);
  saveOperation("retrait", amount, newSolde, true);

  return newSolde;
}

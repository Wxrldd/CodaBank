export function deposit(account: number, input : string) {
  console.log("========== Dêpot d'argent ==========");

  const amount : number = parseInt(input, 10);

  if (isNaN(amount) || amount <= 0) {
    console.log("Erreur : Le montant doit être positif.")
    return account;
  }

  const newSolde : number = account + amount;
  console.log(`Dépôts réussi ! Votre solde est maintenant à  : ${newSolde}€`);
  return newSolde;
}

export function withdrawal(account : number, input : string) {
  console.log("========== Retrait d'argent ==========");

  const amount : number = parseInt(input, 10);

  if (isNaN(amount) || amount <= 0) {
    console.log("Erreur : Le montant doit être un entier positif.")
    return account;

  } if (amount > account) {
    console.log("Erreur: Vous ne pouvez pas retirer plus que votre solde actuel.");
    return account;
  } 

  const newSolde = account - amount;
  console.log(`Retrait réussi ! Votre solde est maintenat à : ${newSolde}€`);
  return newSolde;
}

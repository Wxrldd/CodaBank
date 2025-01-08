  // Fait par chatGPT car la date de base était vraiment pas jolie et comme ce n'était pas demandé je n'ai pas voulu perdre plus de temps.
  export function formatDate(date: Date): string {
    return date.toLocaleString("fr-FR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
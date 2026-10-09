import axios from "axios";

// Funzione per cercare i libri in base alla categoria
export async function cercaLibriPerCategoria(categoria) {
  try {
    const categoriaFormattata = categoria.trim().toLowerCase();
    const url = `https://openlibrary.org/subjects/${categoriaFormattata}.json`;

    const risposta = await axios.get(url);
    return risposta.data.works || [];
  } catch (errore) {
    console.error("Errore durante il recupero dei libri:", errore);
    throw new Error(
      "Impossibile caricare i libri per questa categoria. Controlla il nome o riprova più tardi.",
    );
  }
}

// Funzione per ottenere la descrizione dettagliata tramite la key del libro
export async function cercaDettagliLibro(keyLibro) {
  try {
    const url = `https://openlibrary.org${keyLibro}.json`;

    const risposta = await axios.get(url);

    let descrizioneTesto = "Nessuna descrizione disponibile per questo libro.";

    if (risposta.data.description) {
      if (typeof risposta.data.description === "string") {
        descrizioneTesto = risposta.data.description;
      } else if (risposta.data.description.value) {
        descrizioneTesto = risposta.data.description.value;
      }
    }

    return {
      titolo: risposta.data.title,
      descrizione: descrizioneTesto,
    };
  } catch (errore) {
    console.error("Errore durante il recupero dei dettagli:", errore);
    throw new Error("Impossibile caricare i dettagli del libro selezionato.");
  }
}

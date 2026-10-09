import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { cercaLibriPerCategoria } from "./servizioLibri.js";

// Fingo il modulo axios per evitare chiamate di rete reali
vi.mock("axios");

describe("servizioLibri - Test funzionali", () => {
  it("dovrebbe restituire un array di libri quando la chiamata API ha successo", async () => {
    // una risposta fittizia che imita quella di Open Library
    const rispostaFittizia = {
      data: {
        works: [{ title: "Il Signore degli Anelli", key: "/works/OL1W" }],
      },
    };

    //  axios deve restituire la risposta fittizia quando viene chiamato
    axios.get.mockResolvedValue(rispostaFittizia);

    const risultati = await cercaLibriPerCategoria("fantasy");
    expect(risultati).toHaveLength(1);
    expect(risultati[0].title).toBe("Il Signore degli Anelli");
    expect(axios.get).toHaveBeenCalledWith(
      "https://openlibrary.org/subjects/fantasy.json",
    );
  });

  it("dovrebbe gestire correttamente gli spazi e le maiuscole nella categoria", async () => {
    const rispostaFittizia = { data: { works: [] } };
    axios.get.mockResolvedValue(rispostaFittizia);

    await cercaLibriPerCategoria("  FANTASY  ");

    // Verifichiamo che l'URL finale sia ripulito e minuscolo
    expect(axios.get).toHaveBeenCalledWith(
      "https://openlibrary.org/subjects/fantasy.json",
    );
  });
});

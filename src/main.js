import {
  cercaLibriPerCategoria,
  cercaDettagliLibro,
} from "./api/servizioLibri.js";
import {
  mostraListaLibri,
  mostraMessaggioStato,
  apriModaleDettagli,
  chiudiModaleDettagli,
} from "./interfaccia/rendering.js";

// 1. Selezioniamo gli elementi HTML principali
const moduloRicerca = document.getElementById("modulo-ricerca");
const inputCategoria = document.getElementById("input-categoria");
const bottoneResetRicerca = document.getElementById("bottone-reset-ricerca");
const listaLibri = document.getElementById("lista-libri");
const bottoneChiudiModale = document.getElementById("bottone-chiudi-modale");
const modaleLibro = document.getElementById("modale-libro");

// 2. Pulsante di reset per ripulire la ricerca e tornare allo stato iniziale
bottoneResetRicerca.addEventListener("click", () => {
  inputCategoria.value = "";
  listaLibri.innerHTML = "";
  mostraMessaggioStato("");
});

// 3. Gestione dell'invio del form di ricerca
moduloRicerca.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const categoria = inputCategoria.value.trim();
  if (!categoria) return;

  try {
    mostraMessaggioStato("Ricerca in corso...", false);
    listaLibri.innerHTML = "";

    const libriTrovati = await cercaLibriPerCategoria(categoria);

    mostraMessaggioStato("", false);
    mostraListaLibri(libriTrovati);
  } catch (errore) {
    mostraMessaggioStato(errore.message, true);
  }
});

// 4. Gestione dei click per aprire i dettagli dei libri
listaLibri.addEventListener("click", async (evento) => {
  if (evento.target.classList.contains("bottone-dettagli")) {
    const keyLibro = evento.target.getAttribute("data-key");
    if (!keyLibro) return;

    try {
      mostraMessaggioStato("Caricamento dettagli...", false);

      const dettaglio = await cercaDettagliLibro(keyLibro);

      mostraMessaggioStato("", false);
      apriModaleDettagli(dettaglio.titolo, dettaglio.descrizione);
    } catch (errore) {
      mostraMessaggioStato(errore.message, true);
    }
  }
});

// 5. Gestione della chiusura della finestra modale
bottoneChiudiModale.addEventListener("click", () => {
  chiudiModaleDettagli();
});

modaleLibro.addEventListener("click", (evento) => {
  if (evento.target === modaleLibro) {
    chiudiModaleDettagli();
  }
});

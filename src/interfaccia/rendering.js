export function mostraListaLibri(libri) {
  const contenitoreLista = document.getElementById("lista-libri");

  contenitoreLista.innerHTML = "";

  if (!libri || libri.length === 0) {
    contenitoreLista.innerHTML = `<p class="messaggio-vuoto">Nessun libro trovato per questa categoria.</p>`;
    return;
  }

  libri.forEach((libro) => {
    const titolo = libro.title || "Titolo non disponibile";

    let nomiAutori = "Autore sconosciuto";
    if (libro.authors && libro.authors.length > 0) {
      nomiAutori = libro.authors.map((autore) => autore.name).join(", ");
    }

    let urlCopertina = "https://via.placeholder.com/150x200?text=No+Cover";
    if (libro.cover_id) {
      urlCopertina = `https://covers.openlibrary.org/b/id/${libro.cover_id}-M.jpg`;
    }

    const cardLibro = document.createElement("div");
    cardLibro.classList.add("card-libro");

    cardLibro.innerHTML = `
      <img src="${urlCopertina}" alt="Copertina di ${titolo}" class="immagine-copertina" />
      <div class="info-libro">
        <h3 class="titolo-libro">${titolo}</h3>
        <p class="autore-libro"><strong>Autore/i:</strong> ${nomiAutori}</p>
        <button class="bottone-dettagli" data-key="${libro.key}">Leggi descrizione</button>
      </div>
    `;

    contenitoreLista.appendChild(cardLibro);
  });
}

export function mostraMessaggioStato(testo, segnalaComeErrore = false) {
  const elementoMessaggio = document.getElementById("messaggio-stato");

  if (!testo) {
    elementoMessaggio.textContent = "";
    elementoMessaggio.classList.add("nascondi");
    elementoMessaggio.classList.remove("errore");
    return;
  }

  elementoMessaggio.textContent = testo;
  elementoMessaggio.classList.remove("nascondi");

  if (segnalaComeErrore) {
    elementoMessaggio.classList.add("errore");
  } else {
    elementoMessaggio.classList.remove("errore");
  }
}

export function apriModaleDettagli(titolo, descrizione) {
  const modale = document.getElementById("modale-libro");
  const corpoModale = document.getElementById("corpo-modale");

  corpoModale.innerHTML = `
    <h2>${titolo}</h2>
    <div class="testo-descrizione">
      <p>${descrizione}</p>
    </div>
  `;

  modale.classList.remove("nascondi");
}

export function chiudiModaleDettagli() {
  const modale = document.getElementById("modale-libro");
  modale.classList.add("nascondi");
}

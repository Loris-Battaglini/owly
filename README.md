# Owly 🦉📚

> **Owly** è un'applicazione web moderna sviluppata in JavaScript (ES6+) che consente agli utenti di esplorare e cercare libri in tempo reale sfruttando le API pubbliche di **Open Library**. Progetto realizzato nell'ambito del percorso di Full-Stack Web Development di **Start2Impact**.

---

## 🚀 Anteprima dell'Applicazione

### 1. Stato Iniziale (Home Page)

_Interfaccia pulita, minimale e intuitiva con barra di ricerca e pulsante di reset rapido._  
![Stato Iniziale](/assets/img/ricerca-vuota.png)

### 2. Risultati della Ricerca e Dettagli

_Visualizzazione dinamica delle card dei libri con copertine, pulsanti per i dettagli e modale descrittiva._  
![Risultati Ricerca](/assets/img/ricerca-piena.png)

---

## 🛠️ Tecnologie e Strumenti

- **Linguaggio**: JavaScript (ES6+)
- **Framework di Build**: Vite
- **HTTP Client**: Axios (per la gestione delle chiamate asincrone alle API)
- **Testing**: Vitest (per i test automatici di unità e logica)
- **Stile**: CSS3 Moderno (con supporto responsive e variabili CSS)
- **Controllo Versione**: Git & GitHub

---

## 📐 Scelte Architetturali e Design Pattern

Il progetto è stato strutturato applicando il principio della **Separazione delle Responsabilità (Separation of Concerns)** e il **Service Pattern**:

- **`servizioLibri.js` (Model/Service)**: Isola completamente la logica di comunicazione con le API e la gestione dei dati esterni, disaccoppiandola dalla UI.
- **`rendering.js` (View)**: Gestisce la manipolazione del DOM, il rendering dinamico delle card e l'apertura/chiusura delle finestre modali.
- **`main.js` (Controller)**: Coordina il flusso dell'applicazione, ascoltando gli eventi dell'utente e collegando i servizi alla vista.

---

## 🧪 Test Automatici

Il codice include una suite di unit test scritta con **Vitest** per verificare la correttezza della gestione dei dati e delle chiamate API (tramite l'utilizzo di _mock_ di Axios), garantendo robustezza e manutenibilità.

Per eseguire i test in locale:

```bash
npm run test
```

---

## 📦 Installazione e Avvio in Locale

Segui questi passaggi per clonare ed eseguire il progetto sul tuo computer:

1. **Clona il repository**:
   ```bash
   git clone [https://github.com/Loris-Battaglini/owly.git](https://github.com/Loris-Battaglini/owly.git)
   ```
2. **Entra nella cartella del progetto**:
   ```bash
   cd owly
   ```
3. **Installa le dipendenze**:
   ```bash
   npm install
   ```
4. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```
5. Apri il browser all'indirizzo indicato (solitamente `http://localhost:5173/`).

---

## 👨‍💻 Autore

**Loris Battaglini**  
_Student Full-Stack Web Developer @ Start2Impact_

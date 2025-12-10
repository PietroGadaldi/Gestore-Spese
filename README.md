# Expense Tracker 💰

Un'applicazione web moderna per gestire e tracciare le tue spese quotidiane con un'interfaccia intuitiva e grafici interattivi.

## Caratteristiche ✨

- **Gestione Spese**: Aggiungi, visualizza ed elimina le tue spese
- **Grafico Interattivo**: Visualizza l'andamento delle spese mese per mese con un grafico a barre
- **Navigazione Mesi**: Naviga facilmente tra i mesi per analizzare le spese precedenti
- **Lista Scrollabile**: Visualizza le spese più recenti in cima alla lista
- **Design Moderno**: Interfaccia glassmorphism con tema scuro elegante
- **API Backend**: Integrazione con API REST per la persistenza dei dati

## Tecnologie Utilizzate 🛠️

- **React** - Libreria JavaScript per la UI
- **Vite** - Build tool e development server
- **Recharts** - Libreria per la creazione di grafici
- **PocketBase** - Backend database
- **CSS3** - Styling con tema scuro moderno

## Struttura del Progetto 📁

```
src/
├── App.jsx              # Componente principale
├── FormSpesa.jsx        # Componente form per aggiungere spese
├── ItemSpesa.jsx        # Componente per visualizzare singola spesa
├── GraficoSpese.jsx     # Componente grafico spese mensili
├── index.css            # Stili principali
└── main.jsx             # Entry point
```

## Installazione 🚀

### Prerequisiti
- Node.js (v14+)
- npm o yarn

### Setup

1. Clona il repository
```bash
git clone <repository-url>
cd "Gestore Spese"
```

2. Installa le dipendenze
```bash
npm install
```

3. Avvia il development server
```bash
npm run dev
```

4. Apri il browser e accedi a `http://localhost:5173`

## Configurazione Backend 🗄️

L'applicazione si connette a un'API REST su `http://127.0.0.1:8090/api/collections/spese/records`

Per il funzionamento completo, assicurati che:
- PocketBase sia in esecuzione sulla porta 8090
- La collezione `spese` esista nel database
- La collezione abbia i campi: `descrizione`, `importo`, `data`

## Utilizzo 📖

### Aggiungere una Spesa
1. Compila i campi "Descrizione della spesa" e "Importo"
2. Clicca su "Aggiungi"
3. La spesa apparirà in cima alla lista

### Visualizzare il Grafico
1. Usa i pulsanti freccia (← →) per navigare tra i mesi
2. Il grafico si aggiorna automaticamente mostrando le spese del mese selezionato
3. Tutti i giorni del mese vengono visualizzati sull'asse X

### Eliminare una Spesa
1. Clicca il pulsante "Elimina" accanto alla spesa desiderata
2. La spesa verrà rimossa dal database

## Layout 🎨

L'interfaccia è divisa in due sezioni principali:

| Sezione | Contenuto |
|---------|----------|
| **Sinistra (50%)** | Form input, totale spese e lista scrollabile delle spese |
| **Destra (50%)** | Grafico interattivo con navigazione mesi |

## API Endpoints 🔌

### GET - Recupera tutte le spese
```
GET http://127.0.0.1:8090/api/collections/spese/records
```

### POST - Crea nuova spesa
```
POST http://127.0.0.1:8090/api/collections/spese/records
Content-Type: application/json

{
  "descrizione": "string",
  "importo": number,
  "data": "ISO8601"
}
```

### DELETE - Elimina spesa
```
DELETE http://127.0.0.1:8090/api/collections/spese/records/{id}
```

## Build per Produzione 📦

```bash
npm run build
```

Il build verrà generato nella cartella `dist/`

## Dipendenze Principali 📚

```json
{
  "react": "^18.x",
  "recharts": "^2.x",
  "vite": "^4.x"
}
```

## Personalizzazione 🎯

### Modificare i Colori
Modifica le variabili CSS in `src/index.css`:
```css
:root {
  --bg: #0a0f1f;
  --accent: #6366f1;
  --danger: #ef4444;
  /* ... altre variabili */
}
```

### Adattare il Layout
- **Proporzioni riquadri**: Modifica `flex: 0 0 50%` in `src/index.css`
- **Altezza lista**: Cambia `max-height: 280px` in `.spese-list-container`
- **Altezza grafico**: Modifica `height: 380` in `GraficoSpese.jsx`

## Responsivo 📱

L'applicazione è ottimizzata per schermi 1920x1080, ma include breakpoint responsive per dispositivi più piccoli.

## Licenza 📄

Questo progetto è fornito come-è per scopi educativi.

## Contatti e Supporto 💬

Per domande o problemi, crea un issue nel repository.

---

**Versione**: 1.0.0  
**Ultimo aggiornamento**: Dicembre 2025

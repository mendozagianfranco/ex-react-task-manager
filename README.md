# React Task Manager

## Descrizione  
Esercitazione React per creare un’applicazione di gestione attività (task manager). Il progetto si concentra sulla funzionalità più che sullo stile, permettendo di consolidare l’uso degli hook React e delle tecniche viste negli esercizi precedenti.

---

## Obiettivi principali  
- Creare una struttura di componenti per visualizzare, aggiungere, modificare e rimuovere task.  
- Utilizzare `useState`, `useEffect`, `useMemo`, `useCallback` e `useRef` per gestire dinamicamente la lista delle attività.  
- Applicare tecniche come debounce per ottimizzare la gestione degli input e degli aggiornamenti della lista.  
- Operare sugli array di oggetti (tasks) con metodi come `.map()`, `.filter()`, `.find()` per gestire la logica dell’applicazione.  
- Fornire un’esperienza interattiva dove l’utente può aggiungere, modificare, eliminare e filtrare le task in tempo reale.

---

## Funzionalità previste  
- Visualizzare una lista di task con titolo, descrizione, stato e data.  
- Form o input per aggiungere una nuova task.  
- Modifica di una task esistente (es. titolo o descrizione).  
- Eliminazione di una task.  
- Filtraggio o ordinamento della lista.  
- Aggiornamento dello stato della lista in tempo reale mentre l’utente interagisce.  

---

## Tecnologie e concetti praticati  
- React  
- Hook React: `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`  
- Debounce per ottimizzare l’input dell’utente  
- Componenti funzionali  
- Gestione e manipolazione di array di oggetti  
- Consolidamento delle conoscenze sugli hook e sulle best practice di React

---

## Scopo della repository  
Questo progetto è pensato per esercitarsi nella gestione dello stato in React e nella creazione di componenti interattivi, concentrandosi sulla funzionalità. È un esercizio di consolidamento per applicare le conoscenze di hook avanzati (`useMemo`, `useCallback`, `useRef`) e tecniche come debounce in un contesto pratico di CRUD per una lista di task.

---

> [!NOTE]
> In questo progetto l’aspetto grafico è stato volutamente trascurato. L’obiettivo principale è praticare la logica e l’uso degli hook React avanzati

---

## Backend Mock

Questo progetto utilizza un backend mock pronto all’uso fornito da [Boolean IT / resources](https://github.com/boolean-it/resources). Non è necessario creare un database locale: basta eseguire il mock server per avere le API attive.

## Setup
1. Clonare la repository
```bash
git clone https://github.com/mendozagianfranco/ex-react-task-manager.git
```
2. Installare dipendenze
```bash
npm install
```
3. Avviare l’applicazione
```bash
npm run dev
```

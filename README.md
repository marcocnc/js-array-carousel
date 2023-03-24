JS Array Carousel
===
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
## Logica
1. Prima di tutto si crea il markup della pagina
2. Dopo aver verificato che la parte statica funzioni, si passa allo script in cui si dichiarano in un array tutte le immagini e le altre variabili;
3. Si crea un ciclo in cui si stampano le immagini con la classe hide (che è display: none);
4. A questo punto si dichiara una variabile counter che al click dei bottoni incrementerà o decrementerà di valore;
5. Alla prima immagine va tolta la classe hide;
6. Al click next o prev aggiungere la classe hide all'immagine corrente facendola scomparire, poi al click next il contatore incrementa e di conseguenza a quell'indice si rimuove la classe hide. Al click prev ragionamento inverso;
7. Si fa in modo che alla prima immagine non ci sia il tasto prev, e all'ultima il tasto next;
8. Al click di prev tolgo hide al next, e se il contatore è === 0, aggiungo hide al prev;
9. Si aggiunge la generazione degli elementi circle al ciclo;
10. Prendo tutti gli elementi circle e al primo aggiungo la classe active;
11. Incrementando e decrementando si aggiunge e si toglie la classe active.

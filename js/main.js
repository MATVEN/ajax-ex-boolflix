/*
    In questo esercizio iniziamo a replicare la logica che sta dietro a tantissimi siti che permettono la visione di film e telefilm.
    Per fare questo, come fanno siti molto più rinomati, utilizzeremo un API che ci permette di avere un insieme di risultati congrui alla nostra ricerca.
    Milestone 1:
    Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
    Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
    - Titolo
    - Titolo Originale
    - Lingua
    - Voto
*/

$(document).ready(function (){

  // selection button
  var search = $('#js-search');

  // ajax call to click
  search.click(getAjax);

});

// ajax call function

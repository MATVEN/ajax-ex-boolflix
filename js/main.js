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
  var btnSearch = $('#js-search');

  // ajax call to click
  btnSearch.click(getAjax);

});

// ajax call function
function getAjax() {

  // input value
  var search = $('#js-searchval').val();

  $.ajax({

    url: 'https://api.themoviedb.org/3/movie/343611?api_key=5f8ff056928df0cbe99f1c1b48acd6a5',
    method: "GET",
    success: function (data, stato) {

      var list = data.results;
      console.log("Lista film:", list);

      var objects;

      var source = $("#tv-template").html();

      var sourceTransfert = Handlebars.compile(source);

      var objectsContent = {
        
      }




    },

    error: function (request, status, error) {
      alert("Errore. " + " " + request + " " + status + " " + error);
    }
  })

}

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
  btnSearch.click(getAjaxFilm);
  btnSearch.click(getAjaxTvSeries);

});

// ajax call function film
function getAjaxFilm() {
  // input value
  var search = $('#js-searchval').val();

  $.ajax({

    url: 'https://api.themoviedb.org/3/search/movie',
    method: "GET",
    data: {
      api_key: '5f8ff056928df0cbe99f1c1b48acd6a5',
      query: search,
      language: "it-IT"
    },
    success: function (data, stato) {

      var filmList = data.results;
      console.log(filmList);

      var objects;

      var source = $("#tv-template").html();

      var sourceTransfert = Handlebars.compile(source);


      filmList.forEach(objects =>{

      // DEBUG:
        console.log("URL immagine:", objects.backdrop_path);
        console.log("Titolo:", objects.title) ;
        console.log("Titolo originale:", objects.original_title);
        console.log("Lingua:", objects.original_language);
        console.log("Voto:", objects.vote_average);

        // convert rating
         var stars = (Math.round(objects.vote_average / 2));

         // language film
         var flag = objects.original_language;

        // handlebars objects data
        var objectsContent = {
          cover: objects.backdrop_path,
          title: objects.title,
          originalTitle: objects.original_title,
          language: languageFlag(flag),
          vote: objects.vote_average,
          stars: starVote(stars)
        }

        // stamp results on page
        var stamp =  sourceTransfert(objectsContent);

        $(".film-container").append(stamp);

        // clean page to new search
        $(".film-container").html("");

      });

      // Svuoto il campo di ricerca
      $("#js-searchVal").val("");

    },

    error: function (request, status, error) {
      alert("Errore. " + " " + request + " " + status + " " + error);
    }
  })

}

// ajax call function series
function getAjaxTvSeries() {
  // input value
  var search = $('#js-searchval').val();

  $.ajax({

    url: 'https://api.themoviedb.org/3/search/tv' + search,
    method: "GET",
    data: {
      api_key: '5f8ff056928df0cbe99f1c1b48acd6a5',
      query: search,
      language: "it-IT"
    },
    success: function (data, stato) {

      var tvSeriesList = data.results;
      console.log(tvSeriesList);

      var objects;

      var source = $("#tv-template").html();

      var sourceTransfert = Handlebars.compile(source);


      list.forEach(objects =>{

      // DEBUG:
        console.log("URL immagine:", objects.backdrop_path);
        console.log("Titolo:", objects.name) ;
        console.log("Titolo originale:", objects.original_name);
        console.log("Lingua:", objects.original_language);
        console.log("Voto:", objects.vote_average);

        // convert rating
         var stars = (Math.round(objects.vote_average / 2));

         // language film
         var flag = objects.original_language;

        // handlebars objects data
        var objectsContent = {
          cover: objects.backdrop_path,
          title: objects.name,
          originalTitle: objects.original_name,
          language: languageFlag(flag),
          vote: objects.vote_average,
          stars: starVote(stars)
        }

        // stamp results on page
        var stamp =  sourceTransfert(objectsContent);

        $(".tvseries-container").append(stamp);

        // clean page to new search
        $(".tvseries-container").html("");

      });

      // Svuoto il campo di ricerca
      $("#js-searchVal").val("");

    },

    error: function (request, status, error) {
      alert("Errore. " + " " + request + " " + status + " " + error);
    }
  })

}

// other objects function

function starVote(star) {
    // stampa stelle
    var rating = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= star) {
            console.log(i, "full");
            rating += '<i class="fas fa-star"></i>';
        } else {
            console.log(i, "empty");
            rating += '<i class="far fa-star"></i>';
        }
    }
    return rating;
}

function languageFlag(flag){
   var flagImg;

   switch (flag) {

     case "en":
           flagImg = '<img src="img/language/english.jpg">';
           break;
       case "it":
           flagImg = '<img src="img/language/italian.jpg">';
           break;
       case "de":
           flagImg = '<img src="img/language/deutsch.jpg">';
           break;
       case "fr":
           flagImg = '<img src="img/language/french.jpg">';
           break;
       case "es":
           flagImg = '<img src="img/language/spanish.jpg">';
           break;
       default:
           flagImg = '';
   }
   return flagImg;
};

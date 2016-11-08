$('#searchButton').on('click', function(event) {
  event.preventDefault();
  if ( $("#search")[0].value === "") {
      //then the input field is blank
      Materialize.toast('Enter a Joke Search Word', 5000);
    }else {
      //clear previous search results

      //get user response
      var query = $('#search').val();


      $.get( "https://api.chucknorris.io/jokes/search?query=" + query, function( data ) {
        var jokeResults = [];
        for (var i = 0; i < data.result.length; i++){
          jokeResults.push(data.result[i].value);
          $("#listings").append("<div class='joke'>" + '<strong>Joke #' + (i+1) +': </strong>' + '<div>' + jokeResults[i] + '</div>' + '</div>');
        }
      });

    }
});

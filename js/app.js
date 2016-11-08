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
        for (var i = 0; i < data.result.length; i++){
          console.log(data.result[i].value);
        }
      });

    }
});

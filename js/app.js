$('#searchButton').on('click', function(event) {
  event.preventDefault();
  if ( $("#search")[0].value === "") {
      //then the input field is blank
      Materialize.toast('Enter a Joke Search Word', 5000);
    } else {
      //clear previous search results

      //get user response
      var query = $('#search').val();


      var $xhr = $.getJSON('https://api.chucknorris.io/jokes/search?query={query}';
      // var $xhr2 = $.getJSON('http://www.omdbapi.com/?t=' + query);

      $xhr.done(function(data) {
        console.log(data);
        //if(query != " "){
          if ($xhr.status === 200) {
              //some code here
          }
        // }
      });


      // // Using jQuery
      // $.ajax( {
      //     url: 'https://api.chucknorris.io/jokes/search?query={query}',
      //     data: queryData,
      //     dataType: 'json',
      //     type: 'GET',
      //     success: function(data) {
      //        // do something with data
      //     }
      // } );

});

// $('#searchButton').on('click', function(event) {
//   event.preventDefault();
//   console.log('clicked');
//   if ( $("#search")[0].value === "") {
//     //then the input field is blank
//     Materialize.toast('Enter a movie', 5000);
//   } else {
//     //clear previous search results
//
//     //get user response
//     var query = $('#search').val();
//
//     // Send an HTTP request to the [OMDB API](http://omdbapi.com/) search endpoint.
//     var $xhr = $.getJSON('http://www.omdbapi.com/?s=' + query);
//     // var $xhr2 = $.getJSON('http://www.omdbapi.com/?t=' + query);
//
//     $xhr.done(function(data) {
//       console.log(data);
//       //if(query != " "){
//         if ($xhr.status === 200) {
//           for (var i = 0; i < data.Search.length; i++){
//             var tempObj = {
//               Title: data.Search[i].Title,
//               Year: data.Search[i].Year,
//               Id: data.Search[i].imdbID,
//               Type: data.Search[i].Type,
//               Poster: data.Search[i].Poster,
//               Plot: data.Search[i].Plot
//             };
//             movies.push(tempObj);
//
//           }
//           console.log(movies);
//         }
//       // }
//
//
//     // - Handle the HTTP response by pushing a new, well-formed `movie` object into the global `movies` array.
//
//       // - Render the `movies` array to the page by calling the `renderMovies()` function with no arguments.
//       renderMovies();
//     });
//
//   }
//
// });

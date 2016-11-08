$('#randomButton').on('click', function(event)
{
    event.preventDefault();
    var $returned = $.getJSON(
        'https://api.chucknorris.io/jokes/random?category=dev');
    var print = $returned.result.value;
    console.log(print);
});

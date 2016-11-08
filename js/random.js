$('#randomButton').on('click', function(event)
{
    event.preventDefault();
    $.get(
        "https://api.chucknorris.io/jokes/random?category=dev").done(
        function(data)
        {
            console.log(data.value);
            $("#listings").empty();
            $("#listings").append("<div class='joke'><strong>" +
                data.value + '</srong></div>')
        });


});

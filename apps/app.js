function getResults(searchTerm) {
    var params = {
        s: searchTerm,
        r: 'json'
    };
    url = 'http://www.omdbapi.com';

    $.getJSON(url, params, function (data) {
        showResults(data.Search);
    });
}


$(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getResults(searchTerm);

    });
})

function showResults(results) {
    $.each(results, function (index, value) {
        $('div.results').append("<P>" + value.Title + "</P>");
    });

}

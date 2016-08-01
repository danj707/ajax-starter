function showResults(myData) {
    $.each(myData, function (key, value) {
        $('div.results').append("<P>" + value.Title + "</P>");
    });
}

function getJson(searchTerm) {
    var params = {
        s: searchTerm,
        r: 'json',
    };
    url = 'http//www.omdbapi.com/';

    $.getJSON(url, params, function (data) {
        var myData = data.Search;
        showResults(myData);
    });
}

$(document).ready(function () {

    $('#search-term').submit(function (event) {
        event.preventDefault(event);
        console.log('test');
        var searchTerm = $('#query').val();
        console.log(searchTerm);
        getJson(searchTerm);
    });
});

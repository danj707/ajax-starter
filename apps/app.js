$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getResults(searchTerm);
    });
})

function getResults(searchTerm) {
    var params = {
        part: 'snippet',
        key: 'AIzaSyAWhM-E86yQpMoyxugp4mztxAxZ0xF3FWU',
        q: searchTerm
    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.getJSON(url, params, function (data) {
        showResults(data);
    });
}

function showResults(data) {
    $('div.results').empty();
    $.each(data, function (index, value) {

        console.log(data.items);

    });
    //    for (i = 0; i < data.items.length; i++) {
    //
    //        var title = data.items[i].snippet.title;
    //        var id = data.items[i].id.videoId;
    //        var thumbnail = data.items[i].snippet.thumbnails.medium.url;
    //        var channel = data.items[i].snippet.channelId;
    //        if (data.items[i].id.videoId) {
    //            id = data.items[i].id.videoId;
    //        } else {
    //            id = "No video";
    //        }
    //
    //
    //
    //        var content = "<p><a target='_blank' href=\"https://www.youtube.com/watch?v=" + id + "\"\>" + "<img src=\"" + thumbnail + "\"></a></p>";
    //        $('div.results').append(content);
    //        var channelLink = "<a target='_blank' href=\"https://www.youtube.com/channel/" + channel + "\">Watch more from this channel...</a>"
    //        $('div.results').append(channelLink);
    //        console.log(channelLink)
    //    }
}

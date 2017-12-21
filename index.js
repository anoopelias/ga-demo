$(function() {

    $('#search').click(function(e) {
        e.preventDefault();
        var searchTerm = $('#search-term').val();
        gtag('event', 'search', {'search_term': searchTerm});
        console.log('Search clicked');
    });

    $('#signin').click(function(e) {
        e.preventDefault();
        gtag('event', 'login');
        console.log('Signin clicked');
    });

    $("#passwd").keyup(function (e) {
        if (e.keyCode === 13) {
            gtag('event', 'enter', {
                'event_category': 'usability',
                'value': e.keyCode,
                'event_label': 'password',
            });
        }
    });
});

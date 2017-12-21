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

    // Feature detects Navigation Timing API support.
    if (window.performance) {
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      var timeSincePageLoad = Math.round(performance.now());

      // Sends the timing event to Google Analytics.
      gtag('event', 'timing_complete', {
        'name': 'load',
        'value': timeSincePageLoad,
        'event_category': 'jQuery loaded'
      });
    }

    try {
      var r = divide(10, 0);
    } catch(err) {
      gtag('event', 'exception', {
        'description': err,
        'fatal': false
      });
    }

    function divide(x, y) {
      if (y == 0) {
        throw "Division by zero";
      }
      return x/y;
    }
});

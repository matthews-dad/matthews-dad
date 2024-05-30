// Target scroll position in vh (viewport height)
var targetScrollPositionVh = 220; // Replace with the desired scroll position in vh

// Convert vh to pixels
var targetScrollPositionPx = (targetScrollPositionVh / 100) * window.innerHeight;

// Interval for scrolling
var scrollInterval = setInterval(function() {
    // Current scroll position
    var currentScrollPosition = window.scrollY || window.pageYOffset;

    // Scroll the page by 1 pixel
    window.scrollBy(0, 1);

    // Check if the current scroll position has reached or exceeded the target
    if (currentScrollPosition >= targetScrollPositionPx) {
        // Stop the scrolling
        clearInterval(scrollInterval);
    }
}, 17.5);

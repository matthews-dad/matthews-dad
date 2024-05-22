//function autoScrollDown() { 
    //window.scrollBy(0, 1); // You can adjust the second parameter to control the speed of the scroll 
    //setTimeout(autoScrollDown, 0.5); // You can adjust the time interval based on your preference 
  //} 
//autoScrollDown();
// Target scroll position
var targetScrollPosition = 270vh; // Replace with the desired scroll position

// Interval for scrolling
var scrollInterval = setInterval(function() {
    // Current scroll position
    var currentScrollPosition = window.scrollY || window.pageYOffset;

    // Scroll the page by 1 pixel
    window.scrollBy(0, 1);

    // Check if the current scroll position has reached or exceeded the target
    if (currentScrollPosition >= targetScrollPosition) {
        // Stop the scrolling
        clearInterval(scrollInterval);
    }
}, 50);

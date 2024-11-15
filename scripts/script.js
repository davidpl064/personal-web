function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Hide the preloader when the page is fully loaded
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    // preloader.style.display = 'none';  // Hide the preloader
    
    // Simulate a loading delay (e.g., 2000 milliseconds = 2 seconds)
    setTimeout(function() {
        preloader.style.display = 'none';  // Hide the preloader after the delay
    }, 2000);
});

// Show preloader on page navigation
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Display the preloader when a link is clicked
        document.getElementById('preloader').style.display = 'flex';
    });
});
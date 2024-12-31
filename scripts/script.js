// Function to apply dark mode based on user or OS preference
const applyDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// Toggle theme manually
const onToggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Watch for system preference changes and update theme accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDarkMode);

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

// Get the current year
const currentYear = new Date().getFullYear();

// Insert the year into the footer
document.getElementById('current-year').textContent = currentYear;
// import 'flowbite';

// Select all checkboxes inside the filter dropdown list
// Array to store active filters
let activeTagFilters = [];
const checkboxes = document.querySelectorAll('#checkbox-list .checkbox-item');
const projectCards = document.querySelectorAll('#container-cards .card');

// Add an event listener to each checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

// Functionality of tag checkboxes
function handleCheckboxChange(event) {
    // checkboxId = event.target.id;

    // Get associated label and tags
/*     let checkboxList = document.getElementById('checkbox-list');
    labelCheckbox = checkboxList.querySelector(`label[for="${checkboxId}"]`); */
    tag = event.target.dataset.tags;

    if (event.target.checked) {
        addFilterTag(tag);
    } else {
        removeFilterTag(tag);
    }

    // Filter cards with updated filters
    filterProjectCards();
}

function filterProjectCards() {
    projectCards.forEach(card => {
        const cardTags = card.dataset.tags.split(' ');
        const isVisible = activeTagFilters.every(filter => cardTags.includes(filter));
        card.style.display = isVisible ? 'block' : 'none';
    });
}

// Add a filter tag when selected from the dropdown
function addFilterTag(tag) {
    if (tag && !activeTagFilters.includes(tag)) {
        activeTagFilters.push(tag);
    }
}

// Remove a filter tag
function removeFilterTag(tag) {
    activeTagFilters = activeTagFilters.filter(activeTag => activeTag !== tag);
}

// Filter cards based on active filters
function filterCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardTags = card.dataset.tags.split(' ');
        const isVisible = activeTagFilters.every(filter => cardTags.includes(filter));
        card.style.display = isVisible ? 'block' : 'none';
    });
}
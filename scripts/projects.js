// Select all checkboxes inside the filter dropdown list
// Array to store active filters
let activeTagFilters = []
const checkboxes = document.querySelectorAll('#checkbox-list .checkbox-item')
const projectCards = document.querySelectorAll('#container-cards .card')

// Add an event listener to each checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange)
})

// Functionality of tag checkboxes
function handleCheckboxChange(event) {
    // checkboxId = event.target.id;

    // Get associated label and tags
    /*     let checkboxList = document.getElementById('checkbox-list');
    labelCheckbox = checkboxList.querySelector(`label[for="${checkboxId}"]`); */
    tag = event.target.dataset.tags

    if (event.target.checked) {
        addFilterTag(tag)
    } else {
        removeFilterTag(tag)
    }

    // Update active badges
    filterActiveBadges()

    // Filter cards with updated tags
    filterProjectCards()
}

document.querySelectorAll('#active-bagdes [data-hide-target]').forEach((button) => {
    button.addEventListener('click', onActiveBadgesDismiss);
});


// Functionality to update filter checkboxes on changes in active badges
function onActiveBadgesDismiss(event) {
    const button = event.currentTarget
    const targetSelector = button.getAttribute('data-hide-target');
    const checkboxTargetSelector = button.getAttribute('data-checkbox-target');

    const badgeToHide = document.querySelector(targetSelector);
    const checkbox = document.querySelector(checkboxTargetSelector);

    // Hide badge
    if (badgeToHide) {
        badgeToHide.classList.add('hidden');
    }

    // Uncheck the associated checkbox
    if (checkbox) {
        checkbox.checked = false;
        tag = checkbox.dataset.tags
        removeFilterTag(tag)
    }

    // Filter cards with updated tags
    filterProjectCards();
}
// const activeTagsContainer = document.getElementById('active-bagdes');
// activeTagsContainer.addEventListener('click', (event) => {
//     const button = event.target.closest('[data-dismiss-target]');
//     if (button) {
//         const dismissTargetSelector = button.getAttribute('data-dismiss-target');
//         const checkboxTargetSelector = button.getAttribute('data-checkbox-target');

//         // Dismiss the target badge
//         const dismissTarget = document.querySelector(dismissTargetSelector);
//         if (dismissTarget) {
//         dismissTarget.remove();
//         }

//         // Uncheck the associated checkbox
//         if (checkboxTargetSelector) {
//         const checkbox = document.querySelector(checkboxTargetSelector);
//         if (checkbox) {
//             checkbox.checked = false;
//         }
//         }

//     // Filter cards with updated tags
//     filterProjectCards()
//     }
// });

function filterActiveBadges() {
    document.querySelectorAll('#active-bagdes [data-tags]').forEach((badge) => {
        const badgeTag = badge.dataset.tags
        if (activeTagFilters.includes(badgeTag)) {
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    })
}

function filterProjectCards() {
    projectCards.forEach((card) => {
        const cardTags = card.dataset.tags.split(' ')
        const isVisible = activeTagFilters.every((filter) => cardTags.includes(filter))
        card.style.display = isVisible ? 'block' : 'none'
    })
}

// Add a filter tag when selected from the dropdown
function addFilterTag(tag) {
    if (tag && !activeTagFilters.includes(tag)) {
        activeTagFilters.push(tag)
    }
}

// Remove a filter tag
function removeFilterTag(tag) {
    activeTagFilters = activeTagFilters.filter((activeTag) => activeTag !== tag)
}

// Filter cards based on active filters
function filterCards() {
    const cards = document.querySelectorAll('.card')

    cards.forEach((card) => {
        const cardTags = card.dataset.tags.split(' ')
        const isVisible = activeTagFilters.every((filter) => cardTags.includes(filter))
        card.style.display = isVisible ? 'block' : 'none'
    })
}

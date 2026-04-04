// Array to store active filters
let activeTagFilters = []

function initProjectFilters() {
    // Select all checkboxes inside the filter dropdown list
    const checkboxes = document.querySelectorAll('#checkbox-list .checkbox-item')

    // Add an event listener to each checkbox
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCheckboxChange)
    })

    document.querySelectorAll('#active-bagdes [data-hide-target]').forEach((button) => {
        button.addEventListener('click', onActiveBadgesDismiss)
    })
}

// Functionality of tag checkboxes
function handleCheckboxChange(event) {
    let tag = event.target.dataset.tags

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

// Functionality to update filter checkboxes on changes in active badges
function onActiveBadgesDismiss(event) {
    const button = event.currentTarget
    const targetSelector = button.getAttribute('data-hide-target')
    const checkboxTargetSelector = button.getAttribute('data-checkbox-target')

    const badgeToHide = document.querySelector(targetSelector)
    const checkbox = document.querySelector(checkboxTargetSelector)

    // Hide badge
    if (badgeToHide) {
        badgeToHide.classList.add('hidden')
    }

    // Uncheck the associated checkbox
    if (checkbox) {
        checkbox.checked = false
        let tag = checkbox.dataset.tags
        removeFilterTag(tag)
    }

    // Filter cards with updated tags
    filterProjectCards()
}

function filterActiveBadges() {
    document.querySelectorAll('#active-bagdes [data-tags]').forEach((badge) => {
        const badgeTag = badge.dataset.tags
        if (activeTagFilters.includes(badgeTag)) {
            badge.classList.remove('hidden')
        } else {
            badge.classList.add('hidden')
        }
    })
}

function filterProjectCards() {
    const projectCards = document.querySelectorAll('#container-project-cards .card')

    projectCards.forEach((card) => {
        const cardTags = card.dataset.tags.split(' ')
        const isVisible = activeTagFilters.every((filter) => cardTags.includes(filter))
        // card.style.display = isVisible ? 'block' : 'none'
        card.hidden = !isVisible
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

// Execute initialization after DOM loaded
document.addEventListener('astro:page-load', () => {
    initProjectFilters()
})

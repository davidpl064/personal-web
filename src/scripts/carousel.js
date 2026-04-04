function initCarousel() {
    const carousel = document.querySelector('[data-carousel]')
    if (!carousel) return

    let startX = 0
    let endX = 0

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
    })

    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX
        handleSwipe(e, startX, endX)
    })
}

function handleSwipe(event, startX, endX) {
    const carousel = event.currentTarget
    const threshold = 100 // minimum distance

    if (startX - endX > threshold) {
        // swipe left → next
        carousel.querySelector('[data-carousel-next]')?.click()
    } else if (endX - startX > threshold) {
        // swipe right → prev
        carousel.querySelector('[data-carousel-prev]')?.click()
    }
}

// Execute initialization after DOM loaded
document.addEventListener('astro:page-load', () => {
    initCarousel()
})

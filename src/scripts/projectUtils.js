// Define colors from project statuses
export function getColorStatus(status) {
    // Check the colorScheme attribute and assign the corresponding class
    let colorClass

    switch (status) {
        case 'completed':
            colorClass = 'border-success-subtle bg-success-soft text-fg-success-strong'
            break
        case 'ongoing':
            colorClass = 'border-warning-subtle bg-warning-soft text-fg-warning'
            break
        case 'maintained':
            colorClass = 'border-brand-subtle bg-brand-soft text-fg-brand'
            break
        default:
            // Default fallback
            colorClass = ''
            break
    }

    return colorClass
}

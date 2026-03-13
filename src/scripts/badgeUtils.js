// Define colors and badges for project tags
export function getColorClasses(colorScheme) {
    // Check the colorScheme attribute and assign the corresponding class
    let textColorClass, borderColorClass, badgeColorClass, buttonColorClass, checkboxColorClass

    switch (colorScheme) {
        case 'programming-languages':
            textColorClass = 'text-purple-800 dark:text-purple-300'
            borderColorClass = 'border-purple-400 dark:border-purple-500'
            badgeColorClass = textColorClass + ' bg-purple-100 dark:bg-purple-900'
            buttonColorClass =
                'text-purple-400 hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300'
            checkboxColorClass =
                textColorClass +
                ' ' +
                borderColorClass +
                ' bg-purple-100 focus:ring-purple-400 dark:bg-gray-700 dark:ring-offset-gray-700 dark:focus:ring-purple-500 dark:focus:ring-offset-gray-700'
            break
        case 'tech-areas':
            textColorClass = 'text-green-800 dark:text-green-300'
            borderColorClass = 'border-green-400 dark:border-green-500'
            badgeColorClass = textColorClass + ' bg-green-100 dark:bg-green-900'
            buttonColorClass =
                'text-green-400 hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300'
            checkboxColorClass =
                textColorClass +
                ' ' +
                borderColorClass +
                ' bg-green-100 focus:ring-green-400 dark:bg-gray-700 dark:ring-offset-gray-700 dark:focus:ring-green-500 dark:focus:ring-offset-gray-700'
            break
        case 'domain-industry':
            textColorClass = 'text-red-800 dark:text-red-300'
            borderColorClass = 'border-red-400 dark:border-red-500'
            badgeColorClass = textColorClass + ' bg-red-100 dark:bg-red-900'
            buttonColorClass =
                'text-red-400 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300'
            checkboxColorClass =
                textColorClass +
                ' ' +
                borderColorClass +
                ' bg-red-100 focus:ring-red-400 dark:bg-gray-700 dark:ring-offset-gray-700 dark:focus:ring-red-500 dark:focus:ring-offset-gray-700'
            break
        case 'scale-collaboration-type':
            textColorClass = 'text-blue-800 dark:text-blue-300'
            borderColorClass = 'border-blue-400 dark:border-blue-500'
            badgeColorClass = textColorClass + ' bg-blue-100 dark:bg-blue-900'
            buttonColorClass =
                'text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300'
            checkboxColorClass =
                textColorClass +
                ' ' +
                borderColorClass +
                ' bg-blue-100 focus:ring-blue-400 dark:bg-gray-700 dark:ring-offset-gray-700 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-700'
            break
        case 'skills':
            textColorClass = 'text-yellow-800 dark:text-yellow-300'
            borderColorClass = 'border-yellow-400 dark:border-yellow-500'
            badgeColorClass = textColorClass + ' bg-yellow-100 dark:bg-yellow-900'
            buttonColorClass =
                'text-yellow-400 hover:yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300'
            checkboxColorClass =
                textColorClass +
                ' ' +
                borderColorClass +
                ' bg-yellow-100 focus:ring-yellow-400 dark:bg-gray-700 dark:ring-offset-gray-700 dark:focus:ring-yellow-500 dark:focus:ring-offset-gray-700'
            break
        default:
            // Default fallback
            textColorClass = ''
            borderColorClass = ''
            badgeColorClass = ''
            buttonColorClass = ''
            checkboxColorClass = ''
            break
    }

    return {
        textColorClass,
        borderColorClass,
        badgeColorClass,
        buttonColorClass,
        checkboxColorClass,
    }
}

export function sanitizeDataTag(dataTag) {
    // Ensure input is always an array
    const sanitizedDataTag = Array.isArray(dataTag) ? dataTag : [dataTag]

    return sanitizedDataTag
        .map((tag) => tag.replace(/[^\w\s+-]/g, '')) // Remove non-alphanumeric characters
        .map((tag) => tag.replace(/\s+/g, '-')) // Replace spaces with dashes
        .map((tag) => tag.replace(/\+/g, 'plus')) // Replace '+' with 'plus'
}

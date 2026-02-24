class HeaderNavBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="mx-auto bg-gray-100 dark:bg-gray-800 shadow-md">
                <nav class="flex flex-wrap items-center justify-between w-full px-4 py-2.5">
                <!-- <div class="flex flex-wrap container justify-between items-center mx-auto p-4"> -->
                    <!-- Logo Section -->
                    <a href="#" class="flex ml-4 text-2xl items-center space-x-3 text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500">
                        <img src="/assets/logo/main_logo.svg" class="h-7" alt="Flowbite Logo" />
                        <span class="self-center text-xl text-heading font-bold whitespace-nowrap">dplamarca</span>
                    </a>

                    <!-- Hamburguer Menu Dropdown mobile format -->
                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto mr-16" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:mt-0 md:text-sm  md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
                            <li>
                                <a href="/" class="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">Home</a></li>
                            </li>
                            <li><a href="/projects" class="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">Projects</a></li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full text-gray-700 rounded hover:bg-gray-100 focus:text-blue-500
                                    hover:text-blue-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-300 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:border-gray-700
                                    dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Hobbies
                                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <!-- Dropdown menu -->
                                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/hobbies/3dprinting" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">3D Printing</a>
                                    </li>
                                    <li>
                                        <a href="/hobbies/sports" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Sports</a>
                                    </li>
                                </div>
                            </li>
                            <li><a href="/insights" class="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">Insights</a></li>

                            <!-- <li class="relative group">
                                <button class="hover:text-gray-400 focus:outline-none">
                                    Hobbies
                                </button>
                                
                                <div class="absolute hidden group-hover:block bg-gray-700 rounded-md shadow-lg mt-0 w-48">
                                    <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-600">Photography</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-600">Traveling</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-gray-600">Coding</a>
                                </div>
                            </li> -->

                            <li><a href="/contact" class="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">Contact</a></li>

                            <!-- Theme Mode Selector -->
                            <button id="theme-toggle" class="text-gray-800 dark:text-white p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:scale-110">
                                <!-- Sun Icon for Light Mode -->
                                <svg data-toggle-icon="sun" class="hidden w-3.5 h-3.5 dark:block text-yellow-500 transition-all duration-300 hover:text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
                                </svg>
                                <!-- Moon Icon for Dark Mode -->
                                <svg data-toggle-icon="moon" class="w-3.5 h-3.5 dark:hidden text-gray-600 transition-all duration-300 hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
                                </svg>
                            </button>
                        </ul>
                    </div>
                </nav>
            </header>
        `
    }
}
customElements.define('header-navbar', HeaderNavBar)

class CustomFooter extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="bottom-0 py-8 bg-gray-100 dark:bg-gray-800">
                <div class="w-full mx-auto flex flex-col items-center justify-center text-white space-y-4">
                    <!-- Contact Icons -->
                    <ul class="flex space-x-6">
                        <li>
                            <a href="mailto:davi.perlam@gmail.com" target="_blank" class="text-lg text-white dark:text-gray-300 hover:opacity-75 dark:hover:opacity-75 transition-opacity duration-300">
                                <i class="fas fa-envelope"></i> <!-- Email Icon -->
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/david-perez-lamarca-836a60178/?locale=en_US" target="_blank" class="text-lg text-white dark:text-gray-300 hover:opacity-75 dark:hover:opacity-75 transition-opacity duration-300">
                                <i class="fab fa-linkedin"></i> <!-- LinkedIn Icon -->
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/davidpl064" target="_blank" class="text-lg text-white dark:text-gray-300 hover:opacity-75 dark:hover:opacity-75 transition-opacity duration-300">
                                <i class="fab fa-github"></i> <!-- GitHub Icon -->
                            </a>
                        </li>
                    </ul>
                    
                    <!-- Horizontal separator line -->
                    <!-- <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"> -->
                    <hr class="w-3/4 h-px my-4 border-gray-200 dark:border-gray-700">

                    <!-- Footer Text -->
                    <span class="block text-center text-gray-300 dark:text-gray-400">
                        © <span id="current-year" class="text-gray-300 dark:text-gray-400"></span>
                        dplamarca. All rights reserved.
                    </span>
                    <!-- <p class="text-center text-gray-300 dark:text-gray-400">&copy; 2024 dplamarca. All rights reserved.</p> -->
                </div>
            </footer>
        `
    }
}
customElements.define('custom-footer', CustomFooter)

// Define colors and badges for project tags
function getColorClasses(colorScheme) {
    // Check the colorScheme attribute and assign the corresponding class
    let textColorClass, badgeColorClass, buttonColorClass

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
            textColorClass = 'text-red-800 + dark:text-red-300'
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

function sanitizeDataTag(dataTag) {
    // Ensure input is always an array
    const sanitizedDataTag = Array.isArray(dataTag) ? dataTag : [dataTag]

    return sanitizedDataTag
        .map((tag) => tag.replace(/[^\w\s+-]/g, '')) // Remove non-alphanumeric characters
        .map((tag) => tag.replace(/\s+/g, '-')) // Replace spaces with dashes
        .map((tag) => tag.replace(/\+/g, 'plus')) // Replace '+' with 'plus'
}

class BadgeFilter extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const dataTag = this.getAttribute('data-tag') || ''
        const colorScheme = this.getAttribute('color-scheme') || ''

        const sanitizedDataTag = sanitizeDataTag(dataTag)
        // console.log(`Sanitazed tag: ${sanitizedDataTag}`)

        const {
            textColorClass,
            borderColorClass,
            badgeColorClass,
            buttonColorClass,
            checkboxColorClass,
        } = getColorClasses(colorScheme)

        this.innerHTML = `
            <span
                id="badge-${sanitizedDataTag}"
                class="me-2 hidden items-center rounded px-2 py-1 text-sm font-medium ${badgeColorClass}"
                data-tags="#${sanitizedDataTag}"
            >
                #${dataTag}
                <button
                    type="button"
                    class="ms-1 inline-flex items-center rounded-sm bg-transparent p-1 text-sm ${buttonColorClass}"
                    data-hide-target="#badge-${sanitizedDataTag}"
                    data-checkbox-target="#checkbox-${sanitizedDataTag}"
                    aria-label="Remove"
                >
                    <svg
                        class="h-2 w-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span class="sr-only">Remove badge</span>
                </button>
            </span>
        `
    }
}
customElements.define('badge-filter', BadgeFilter)

class CheckboxBadge extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const colorScheme = this.getAttribute('color-scheme') || ''
        const dataTag = this.getAttribute('data-tag') || ''

        const sanitizedDataTag = sanitizeDataTag(dataTag)

        const {
            textColorClass,
            borderColorClass,
            badgeColorClass,
            buttonColorClass,
            checkboxColorClass,
        } = getColorClasses(colorScheme)

        this.innerHTML = `
            <div class="flex items-center">
                <input
                    id="checkbox-${sanitizedDataTag}"
                    type="checkbox"
                    data-tags="#${sanitizedDataTag}"
                    value=""
                    class="checkbox-item h-4 w-4 rounded focus:ring-2 ${checkboxColorClass}"
                />
                <label
                    for="checkbox-${sanitizedDataTag}"
                    class="ms-2 text-sm font-medium ${textColorClass}"
                    >#${dataTag}</label
                >
            </div>
        `
    }
}
customElements.define('checkbox-badge', CheckboxBadge)

class ProjectCard extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const title = this.getAttribute('title') || ''
        const relPathProjectPage = this.getAttribute('rel-path-project') || ''
        const relPathImage = this.getAttribute('rel-path-image') || ''
        const description = this.getAttribute('description') || ''
        let colorSchemes = this.getAttribute('color-scheme') || '[]'
        const dataTags = this.getAttribute('data-tags') || '[]'
        const initialDate = this.getAttribute('initial-date') || ''
        const endDate = this.getAttribute('end-date') || ''

        // Parse JSON strings into an arrays
        const dataTagsArray = JSON.parse(dataTags)

        colorSchemes = Array.isArray(colorSchemes) ? colorSchemes : [colorSchemes]
        const colorSchemesArray = JSON.parse(colorSchemes)

        const sanitizedDataTagsArray = sanitizeDataTag(dataTagsArray)
        // Add the symbol "#" to each tag
        const dataTagsArrayFormatted = sanitizedDataTagsArray.map((tag) => `#${tag}`).join(' ')

        const colorClassesArray = colorSchemesArray.map((scheme) => {
            return getColorClasses(scheme)
        })

        // Generate the badges for each tag dynamically
        const badges = dataTagsArray
            .map((tag, index) => {
                const { badgeColorClass, borderColorClass } = colorClassesArray[index]

                return `
                <span class="me-2 rounded border px-2.5 py-0.5 text-xs font-medium ${badgeColorClass} ${borderColorClass}">
                    #${tag}
                </span>
            `
            })
            .join('')

        this.innerHTML = `
            <div
                class="card max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
                data-tags="${dataTagsArrayFormatted}"
            >
                <figure class="relative">
                    <a href="${relPathProjectPage}">
                        <img class="rounded-t-lg" src="${relPathImage}" alt="" />
                    </a>
                    <figcaption class="absolute bottom-4 px-4 text-lg text-white">
                        ${badges}
                    </figcaption>
                </figure>
                <div class="p-5">
                    <a href="${relPathProjectPage}">
                        <h5
                            class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            ${title}
                        </h5>
                    </a>
                    <div class="mb-2 max-w-sm inset-y-0 inset-s-0 flex items-center pointer-events-none space-x-2">
                        <svg class="w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                        <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500" datetime="2025-03-10">${initialDate} - ${endDate}</time>
                    </div>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        ${description}
                    </p>
                    <a
                        href="${relPathProjectPage}"
                        class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        `
    }
}
customElements.define('project-card', ProjectCard)

class ProjectHero extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const title = this.getAttribute('title') || ''
        const dataTags = this.getAttribute('data-tags') || '[]'
        let colorSchemes = this.getAttribute('color-scheme') || '[]'

        // Parse JSON strings into an arrays
        const dataTagsArray = JSON.parse(dataTags)

        colorSchemes = Array.isArray(colorSchemes) ? colorSchemes : [colorSchemes]
        const colorSchemesArray = JSON.parse(colorSchemes)

        const sanitizedDataTagsArray = sanitizeDataTag(dataTagsArray)
        // Add the symbol "#" to each tag
        const dataTagsArrayFormatted = sanitizedDataTagsArray.map((tag) => `#${tag}`).join(' ')

        const colorClassesArray = colorSchemesArray.map((scheme) => {
            return getColorClasses(scheme)
        })

        // Generate the badges for each tag dynamically
        const badges = dataTagsArray
            .map((tag, index) => {
                const { badgeColorClass, borderColorClass } = colorClassesArray[index]

                return `
                <li>
                    <span class="me-2 rounded border px-2.5 py-0.5 text-xs font-medium ${badgeColorClass} ${borderColorClass}">
                        #${tag}
                    </span>
                </li>
            `
            })
            .join('')

        this.innerHTML = `
            <figure class="relative grow max-w-(--breakpoint-2xl) mx-auto overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src="/assets/projects/thumbnails/infotaxis.png"
                    alt="${title}" />

                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/50"></div>

                <!-- Centered Title -->
                <div class="absolute h-full top-1/2 left-1/2 -translate-x-1/2">
                    <h1 class="text-4xl md:text-6xl font-semibold tracking-wide uppercase text-white text-center">
                        ${title}
                    </h1>
                </div>

                <!-- Bottom-left Tags -->
                <figcaption class="absolute bottom-6 left-6 text-lg text-white">
                    <p class="text-base md:text-lg font-medium">
                        Status:
                        <span class="inline-flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-sm font-medium leading-none px-2 py-1 rounded">
                        <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        Completed
                        </span>
                    </p>
                    <p class="text-base md:text-lg font-medium">
                        Documentation:
                        <span class="inline-flex items-center bg-warning-soft border border-warning-subtle text-fg-warning text-sm font-medium leading-none px-2 py-1 rounded">
                        <svg class="w-3.5 h-3.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        In progress
                        </span>
                    </p>
                    <ul class="flex gap-2">
                        ${badges}
                    </ul>
                </figcaption>
            </figure>
        `
    }
}
customElements.define('project-hero', ProjectHero)

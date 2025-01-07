class HeaderNavBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="bg-gray-100 dark:bg-gray-800 shadow-md">
                <!-- <nav class="items-center space-x-6 md:flex"></nav> -->
                <nav class="flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
                <!-- <div class="flex flex-wrap container justify-between items-center mx-auto p-4"> -->
                    <!-- Logo Section -->
                    <div class="flex text-2xl font-bold">
                        <a href="#" class="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500">dplamarca</a>
                    </div>

                    <!-- Desktop Navigation -->
                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:mt-0 md:text-sm  md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:space-x-8 md:rtl:space-x-reverse">
                            <li>
                                <a href="index.html" class="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">Home</a></li>
                            </li>
                            <li><a href="projects.html" class="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">Projects</a></li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full text-gray-700 rounded hover:bg-gray-100 focus:text-blue-500 hover:text-blue-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-gray-300 dark:hover:text-blue-500 dark:focus:text-blue-500 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Hobbies
                                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <!-- Dropdown menu -->
                                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="3dprinting.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">3D Printing</a>
                                    </li>
                                    <li>
                                        <a href="sports.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">Sports</a>
                                    </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </li>

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

                            <li><a href="contact.html" class="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">Contact</a></li>

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
            <footer class="py-8 bg-gray-100 dark:bg-gray-800">
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

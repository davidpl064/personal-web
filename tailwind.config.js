/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['pages/**/*.html', 'scripts/**/*.js', './node_modules/flowbite/**/*.js'],
    darkMode: 'selector',
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
}

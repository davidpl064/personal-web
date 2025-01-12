/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['pages/**/*.html', 'scripts/**/*.js', './node_modules/flowbite/**/*.js'],
    darkMode: 'selector',
    theme: {
        extend: {},
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman',
            lower: 'lower-alpha',
        }
    },
    plugins: [require('flowbite/plugin')],
}

import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
    {
        ignores: ['.astro', 'dist', 'node_modules'],
    },

    js.configs.recommended,

    // TypeScript rules (safe even if you don't use TS yet)
    ...tseslint.configs.recommended,

    // Astro support
    ...astro.configs.recommended,

    // Front-end files
    {
        files: ['src/**/*.{js,ts,astro}'],
        languageOptions: {
            globals: globals.browser,
        },
    },

    // Node environment for config files
    {
        files: ['*.config.js', '*.config.mjs', 'tailwind.config.js', 'vite.config.js'],
        languageOptions: {
            globals: globals.node,
        },
    },

    // Browser environment for script files
    {
        files: ['src/**/*.js'],
        rules: {
            'no-console': 'warn',
            'no-unused-vars': 'warn',
        },
    },

    // Must come last
    eslintConfigPrettier,
]

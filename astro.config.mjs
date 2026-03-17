// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://dplamarca.me',
    integrations: [sitemap()],
})

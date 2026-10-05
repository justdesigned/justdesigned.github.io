// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://justdesigned.github.io/portfolio',
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});

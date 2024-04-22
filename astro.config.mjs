import { defineConfig } from 'astro/config';
import 'flowbite';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Porfolio.github.io',
  base: 'Porfolio',
  integrations: [tailwind()]

});
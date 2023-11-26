import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import qwikdev from "@qwikdev/astro";
  
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [ UnoCSS(), vue({

  }),qwikdev()],
  site: 'https://enhertree.github.io',
  base: '/enhertree.github.io',
});

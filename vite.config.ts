import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  css: {
    modules: {
        scopeBehaviour: 'local', // Use 'global' if you want global styles
        generateScopedName: '[name]__[local]___[hash:base64:5]', // Customize class names
        // localsConvention: 'camelCaseOnly', // Access class names as camelCase
    },
},
})

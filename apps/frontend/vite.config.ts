import react from '@vitejs/plugin-react'; //Provides all-in-one React Support.
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: { // build configuration
        rollupOptions: { // customize rollupOtion
          plugins: [analyze({ summaryOnly: true })], // This will return/console.log an output bundle summary and module usage bar graphs
        },
        sourcemap: process.env.SOURCE_MAP === 'true', // Generate production source maps. 
      },
    server: { // server configuration
        port: 4200, // port number
    },
    plugins: [
      react(), // avoid manual import React in .jsx and .tsx modules
    ]
});


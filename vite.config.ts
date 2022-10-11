import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        babel: {
            parserOpts: {
                plugins: ['decorators-legacy', 'classProperties']
            }
        }
    })],
    assetsInclude: ['**/*.gltf'],
    server: {
        origin: 'http://127.0.0.1:8000',
        open: 'http://127.0.0.1:8000',
        hmr: false,
    },
    resolve: {
        alias: {
            '@Dropdown': 'src/components/Dropdown'
        }
    }
    // build: {
    //     manifest: true,
    //     rollupOptions: {
    //         input: 'src/entryPoint.tsx',
    //         output: {
    //             entryFileNames: 'vite-bundle.js',
    //             assetFileNames: 'assets/[name][extname]'
    //         }
    //     }
    // }
})

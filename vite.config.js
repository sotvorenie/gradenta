import { defineConfig } from 'vite'
import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import path from 'path'

export default defineConfig({
    plugins: [
        vituum({
            imports: {
                normalizeBasePath: true,
                filenamePattern: {
                    '+.scss': 'src/assets/styles',
                    '+.js': 'src/scripts'
                }
            }
        }),

        pug({
            root: './src',
            data: ['src/data/**/*.json'],
            options: {
                pretty: true
            }
        })
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components')
        }
    },

    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/js/[name].js`,
                chunkFileNames: `assets/js/[name].js`,
                assetFileNames: `assets/[ext]/[name].[ext]`
            }
        }
    }
})
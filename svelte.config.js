import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        paths: {
            // 只有打包上传到 GitHub 时才加前缀，本地运行时不加
            base: process.env.NODE_ENV === 'production' ? '/poetry-app' : '',
        }
    }
};

export default config;
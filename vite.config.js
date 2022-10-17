import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: false, // 避免dist被清空
    lib: {
      entry: './components/index.js',
      name: 'wesley-ui',
      fileName: (format) => `wesley-ui.${format}.js`,
    },
    rollupOptions: {
      // 把不想打包进你的包的包排除掉
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

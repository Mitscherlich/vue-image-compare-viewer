import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mdx from 'vite-plugin-md'
import anchor from 'markdown-it-anchor'
import prism from 'markdown-it-prism'
import packageJson from './package.json'

const r = (...args) => path.resolve(__dirname, ...args)

export default {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    mdx({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup: (md) => {
        md.use(anchor)
        md.use(prism)
      },
    }),
  ],
  resolve: {
    alias: {
      [packageJson.name]: r('./src'),
    },
  },
  test: {
    globals: true,
  },
}

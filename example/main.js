import { createApp } from 'vue'
import ImageCompareViewer from 'vue-image-compare-viewer'
import App from './App.vue'

import 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'

createApp(App)
  .component(ImageCompareViewer.name, ImageCompareViewer)
  .mount('#app')

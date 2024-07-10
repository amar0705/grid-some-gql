import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css'
import VueDisqus from 'vue-disqus'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)
}

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import GlobalLayout from '~/layouts/Global.vue'
import AorticLayout from '~/layouts/Aortic.vue'
import CardiovascularLayout from '~/layouts/Cardiovascular.vue'
import MedicalLayout from '~/layouts/Medical.vue'
import HeartLayout from '~/layouts/Heart.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Glayout', GlobalLayout)
  Vue.component('Alayout', AorticLayout)
  Vue.component('Clayout', CardiovascularLayout)
  Vue.component('Mlayout', MedicalLayout)
  Vue.component('Hlayout', HeartLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Barlow:100,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'
  })
}

// export default function (Vue, { head }) {
//
// }
//


import '~/assets/styles.css'
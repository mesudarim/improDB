import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import * as firebase from "firebase";
import {
  store
} from '../store'
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyACbBFnoaG5EVR7-IDGn8lsiTtPHxWQWB4',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyDWpSHNBshvTDYgyJ1kxYmYMgKyo3w0AOU",
  authDomain: "improdb-5a99d.firebaseapp.com",
  databaseURL: "https://improdb-5a99d.firebaseio.com",
  projectId: "improdb-5a99d",
  storageBucket: "improdb-5a99d.appspot.com",
  messagingSenderId: "779231460308",
  appId: "1:779231460308:web:0e71558f4e8f5eb317b441",
  measurementId: "G-SNJYWCBLWQ"
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  store,
  rtl: true,
  render: h => h(App),
}).$mount('#app')


// el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>',
//   rtl: true,
// created () {
//   firebase.initializeApp({
//     apiKey: 'AIzaSyAnihn1mf4M8CtvzT6lOdMV1o-P8YsyR60',
//     authDomain: 'navigationapp-abef8.firebaseapp.com',
//     databaseURL: 'https://navigationapp-abef8.firebaseio.com',
//     projectId: 'navigationapp-abef8',
//     // the below link address is from firebase storage
//     storageBucket: 'gs://navigationapp-abef8.appspot.com',
//     messagingSenderId: '866508655722'
//   })
//     // console.log('should load it now')
//     // firebase.auth().onAuthStateChanged((user) => {
//     //   if (user) {
//     //     console.log('[main.js] user', user)
//     //     this.$store.dispatch('autoSignIn', user)
//     //     this.$store.dispatch('fetchUserData')
//     //     this.$store.dispatch('getUsersInShift')
//     //   }
//     // })
//   }
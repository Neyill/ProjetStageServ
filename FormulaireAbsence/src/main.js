import Vue from 'vue'
import TabComponent from './components/tab/tab.vue'
import NavbarComponent from './components/navbar/navbar.vue'
import ModalDemandeAbsenceComponent from './components/modalabsence/modalabsence.vue'

/* eslint-disable no-new */
new Vue({
  name: 'navbar',
  el: 'body',
  components: {
    tab: TabComponent,
    navbar: NavbarComponent,
    modalabsence: ModalDemandeAbsenceComponent
  }
})

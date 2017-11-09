import Vue from 'vue'
import TableauComponent from './components/tableau/tableau.vue'
import BarreMenuComponent from './components/barremenu/barremenu.vue'
import ModalDemandeAbsenceComponent from './components/modalabsence/modalabsence.vue'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    tableau: TableauComponent,
    barremenu: BarreMenuComponent,
    modalabsence: ModalDemandeAbsenceComponent
  }
})

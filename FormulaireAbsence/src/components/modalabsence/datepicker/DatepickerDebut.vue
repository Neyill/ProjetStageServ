<style>
  .datepicker__container{
    position: relative;
  }
</style>

<template>
  <div class="datepicker__container">
    <input type="text" value="{{date_formatted}}" @click="showDatepicker">
    <input type="hidden" name="{{name}}" value="{{date_raw}}">
    <datepicker-agenda :date="date" :visible="isVisible" @change="selectDate" @cancel="hideDatepicker"></datepicker-agenda>
  </div>
</template>

<script>
import myJson from '../../../../absence.json'
import moment from 'moment'
import DatepickerAgendaComponent from './DatepickerAgenda.vue'

moment.locale('fr')
export default {
  data: function () {
    return {
      dateDebut: myJson.dateDebut,
      isVisible: false,
      date: moment(myJson.dateDebut, 'DD-MM-YYYY')
    }
  },
  components: {
    'datepicker-agenda': DatepickerAgendaComponent
  },
  props: {
    value: {type: String, required: false},
    format: {type: String, default: 'DD-MM-YYYY'},
    name: {type: String}
  },
  methods: {
    selectDate: function (date) {
      this.date = date
      this.hideDatepicker()
    },
    showDatepicker: function () {
      this.isVisible = true
      setTimeout(() => document.addEventListener('click', this.hideDatepicker), 0)
    },
    hideDatepicker: function () {
      this.isVisible = false
      document.removeEventListener('click', this.hideDatepicker)
    }
  },
  computed: {
    date_formatted: function () {
      return this.date.format(this.format)
    },
    date_raw: function () {
      myJson.dateDebut = this.date.format('DD-MM-YYYY')
      return this.date.format('DD-MM-YYYY')
    }
  }
}
</script>

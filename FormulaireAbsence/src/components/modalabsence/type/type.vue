<style>
</style>
<template>
  <div  id="type" class="col-md-6">
    <select class="form-control">
      <option v-for="option in options" v-bind:value="option.id" >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
import myJson from '../../../../absence.json'
export default {
  data: function () {
    if (myJson.type === '1') {
      return {
        options: [{text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Congés sans solde', id: 3},
          {text: 'Rattrapage', id: 4}]
      }
    } else if (myJson.type === '2') {
      return {
        options: [{text: 'Congés payés', id: 2},
          {text: 'Maladie', id: 1},
          {text: 'Congés sans solde', id: 3},
          {text: 'Rattrapage', id: 4}]
      }
    } else if (myJson.type === '3') {
      return {
        options: [{text: 'Congés sans solde', id: 3},
          {text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Rattrapage', id: 4}]
      }
    } else if (myJson.type === '4') {
      return {
        options: [{text: 'Rattrapage', id: 4},
          {text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Congés sans solde', id: 3}]
      }
    }
  }
}
</script>
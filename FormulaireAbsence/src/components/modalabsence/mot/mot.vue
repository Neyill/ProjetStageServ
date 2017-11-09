<style>
  .mot {
    height: 200px
  }
</style>

<template>
  <textarea class="mot" id="mot" v-model="mot" row="3">{{ mot }}</textarea>
<div>
</template>

<script>
import myJson from '../../../../absence.json'

export default {
  data: function () {
    return {
      mot: myJson.mot
    }
  }
}
</script>
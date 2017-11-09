<style>
.mot {
  height: 200px
}
</style>

<template>
  <div class="modal fade" id="modalFormAbsence" tabindex="-1" role="dialog" aria-labelledby="#modalFormAbsenceLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalFormAbsenceLabel">Faire une demande d'absence</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <div class="modal-body">
            <fieldset style="text-align: center">
              <legend></legend>
              <div class="form-group row" >
                <label class="col-sm-3 ">Du :</label>
                        <?php
// indiqué le chemin de votre fichier JSON, il peut s'agir d'une URL
$json = file_get_contents('../../../absence.json');

var_dump(json_decode($json));
?>



                <div class="col-sm-6">
                  <datepickerdebut id="dateDebut" format="DD-MM-YYYY" name="end"></datepickerdebut>
                </div>
              </div>
              <div class="form-group row" >
                <label class="col-sm-3 col-form-label">Au :</label>
                <div class="col-sm-6">
                  <datepickerfin format="DD-MM-YYYY" name="end" id="dateFin"></datepickerfin>
                </div>
              </div>
              <div class="form-group row" >
                <label class="col-sm-3 ">Type :</label>
                <div class="col-md-6">
                  <select class="form-control" v-model="selected">
                    <option v-for="option in options" v-bind:value="option.id" >{{ option.text }}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row" > 
                <label class="col-sm-3 col-form-label">Mot :</label>
                <div class="col-md-6">
                  <textarea class="mot" id="mot" v-model="mot" row="3">{{ mot }}</textarea>
                <div>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button>
            <div id="validate">
              <button type="button" class="btn btn-success" @click="validation(this.form)">Valider</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import DatepickerDebutComponent from './datepicker/DatepickerDebut.vue'
import DatepickerFinComponent from './datepicker/DatepickerFin.vue'
import DatepickerAgendaComponent from './datepicker/DatepickerAgenda.vue'
import myJson from '../../../absence.json'
import moment from 'moment'

moment.locale('fr')
var lastDateD = myJson.dateDebut
var lastDateF = myJson.dateFin
export default {
  data: function () {
    if (myJson.type === '1') {
      return {
        options: [{text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Congés sans solde', id: 3},
          {text: 'Rattrapage', id: 4}],
        selected: 1,
        mot: myJson.mot
      }
    } else if (myJson.type === '2') {
      return {
        options: [{text: 'Congés payés', id: 2},
          {text: 'Maladie', id: 1},
          {text: 'Congés sans solde', id: 3},
          {text: 'Rattrapage', id: 4}],
        type: myJson.type,
        mot: myJson.mot
      }
    } else if (myJson.type === '3') {
      return {
        options: [{text: 'Congés sans solde', id: 3},
          {text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Rattrapage', id: 4}],
        selected: 3,
        mot: myJson.mot
      }
    } else if (myJson.type === '4') {
      return {
        options: [{text: 'Rattrapage', id: 4},
          {text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Congés sans solde', id: 3}],
        type: myJson.type,
        mot: myJson.mot
      }
    }
  },
// Lecture des composants externe pour le Modal
  components: {
    'datepickerdebut': DatepickerDebutComponent,
    'datepickerfin': DatepickerFinComponent,
    'datepicker-agenda': DatepickerAgendaComponent
  },
  methods: {
    validation: function (monFormulaire) {
      // var texte = ''
      // texte += '<li>' + myJson.dateFin + '</li><li>' + myJson.dateDebut + '</li><li>' + myJson.mot + '</li>'
      // document.getElementById('list').innerHTML = texte
      if (window.confirm('Êtes vous sûr ?')) {
        window.alert('Votre demande a été envoyée')
        myJson.type = this.selected
        myJson.mot = this.mot
        console.log(JSON.stringify(myJson))
      } else {
        window.alert('Demande Annuler')
        console.log(lastDateD)
        console.log(lastDateF)
      }
    }
  }
}
// console.log(JSON.parse(myJson))
console.log(JSON.stringify(myJson))
</script>
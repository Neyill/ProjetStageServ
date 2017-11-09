<style>
</style>
<template>
<div class="modal fade" id="liste" tabindex="-1" role="dialog" aria-labelledby="listeModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Date début</th>
              <th scope="col">Date fin</th>
              <th scope="col">Type</th>
              <th scope="col">Mot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Welde</td>
              <td>{{ dateDebut }}</td>
              <td>{{ dateFin }}</td>
              <td>{{ type }}</td>
              <td>{{ mot }}</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>20-11-2017</td>
              <td>Maladie</td>
              <td>Mal a la tête :D</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>20-11-2017</td>
              <td>Maladie</td>
              <td>Mal a la tête :D</td>
            </tr>
          </tbody>
        </table>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myJson from '../../../absence.json'
export default {
  data: function () {
    return {
      mot: myJson.mot,
      dateDebut: myJson.dateDebut,
      dateFin: myJson.dateFin,
      type: myJson.type
    }
  }
}
</script>

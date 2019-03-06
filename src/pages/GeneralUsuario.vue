<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="q-pa-md flex row">
    <div class="flex no-wrap row col-12">
      <q-img
        src="https://cdn.quasar-framework.org/img/non-existent-image-src.png"
        style="height: 140px; max-width: 150px"
      >
        <template v-slot:error>
          <div class="absolute-full flex flex-center bg-primary text-white">
            No se ha podido cargar la imagen
          </div>
        </template>
      </q-img>
      <div class="column col-10">
        <h3 class="q-ma-sm row">Nombre</h3>
        <h4 class="q-ma-sm row">Apellidos</h4>
      </div>
      <q-circular-progress
        show-value
        font-size="30px"
        :value="value"
        size="150px"
        :thickness="0.22"
        color="primary"
        track-color="grey-3"
      >
        {{ value }}%
      </q-circular-progress>
    </div>
    <div class="q-my-md row col-12">
      <q-table
        title=""
        :data="data"
        :columns="columns"
        row-key="name"
        :loading="loading"
        class="col-12"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "GeneralUsuario",
    data() {
      return {
        value: 81,
        columns: [
          {
            name: 'Lunes',
            required: true,
            label: 'Lunes',
            align: 'left',
            field: row => row.name,
            sortable: false
          },
          { name: 'Martes', align: 'left', label: 'Martes', field: 'Martes', sortable: false },
          { name: 'Miercoles', align: 'left',label: 'Miercoles', field: 'Miercoles', sortable: false },
          { name: 'Jueves', align: 'left',label: 'Jueves', field: 'Jueves', sortable: false },
          { name: 'Viernes', align: 'left',label: 'Viernes', field: 'Viernes', sortable: false },
        ],
      }
    }
  }
</script>

<style scoped>

</style>

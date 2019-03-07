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
        :pagination.sync="pagination"
      />
    </div>
    <div class="row">
      <q-btn class="q-ma-sm col-12 text-white bg-primary" @click="card = true">Filtros</q-btn>
      <q-dialog v-model="card">
        <q-card>

          <q-card-section>
            <q-input v-model="text" label="Entrada"/>
          </q-card-section>

          <q-card-section>
            <q-input v-model="text" label="Salida"/>
          </q-card-section>

          <q-separator/>

          <q-card-actions class="flex justify-center">
            <q-btn flat color="white" class="bg-primary" v-close-dialog>Aceptar</q-btn>
            <q-btn flat color="white" class="bg-primary" v-close-dialog>Cancelar</q-btn>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GeneralUsuario",
    data() {
      return {
        value: 81,
        card: false,
        loading: null,
        pagination: {
          page: 1,
          rowsPerPage: 7
          // rowsNumber: xx if getting data from a server
        },
        columns: [
          {
            name: 'Horas',
            required: true,
            label: 'Horas',
            align: 'center',
            field: 'horas',
            sortable: false
          },
          {
            name: 'Lunes',
            required: true,
            label: 'Lunes',
            align: 'left',
            field: 'lunes',
            sortable: false
          },
          {name: 'Martes', align: 'left', label: 'Martes', field: 'martes', sortable: false},
          {name: 'Miercoles', align: 'left', label: 'Miercoles', field: 'miercoles', sortable: false},
          {name: 'Jueves', align: 'left', label: 'Jueves', field: 'jueves', sortable: false},
          {name: 'Viernes', align: 'left', label: 'Viernes', field: 'viernes', sortable: false},
        ],
        data: [
          {
            horas: '8:00 - 9:00',
            lunes: 'Ingles',
            martes: 'Educacion Fisica',
            miercoles: 'Fisisca',
            jueves: 'Biologia',
            viernes: 'Matematicas'
          },
          {
            horas: '9:00 - 10:00',
            lunes: 'Castellano',
            martes: 'Educacion Fisica',
            miercoles: 'Catalan',
            jueves: 'Matematicas',
            viernes: 'Inlges'
          },
          {
            horas: '10:00 - 11:00',
            lunes: 'Matematicas',
            martes: 'Biologia',
            miercoles: 'Biologia',
            jueves: 'Ingles',
            viernes: 'Filosofia'
          },
          {
            horas: '11:00 - 12:00',
            lunes: 'Patio',
            martes: 'Patio',
            miercoles: 'Patio',
            jueves: 'Patio',
            viernes: 'Patio'
          },
          {
            horas: '12:00 - 13:00',
            lunes: 'Ingles',
            martes: 'Educacion Fisica',
            miercoles: 'Catalan',
            jueves: 'Castellano',
            viernes: 'Matematicas'
          },
          {
            horas: '13:00 - 14:00',
            lunes: 'Ingles',
            martes: 'Biologia',
            miercoles: 'Sociales',
            jueves: 'Matematicas',
            viernes: 'Castellano'
          },
          {
            horas: '14:00 - 15:00',
            lunes: 'Catalan',
            martes: 'Optativa',
            miercoles: 'Ingles',
            jueves: 'Biologia',
            viernes: 'Matematicas'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>

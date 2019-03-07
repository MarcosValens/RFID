<template>
  <div class="q-pa-md">
    <div class="row no-wrap">
      <q-btn label="Actualizar" color="primary" @click="onRefresh" class="q-mb-md" />
      <q-select rounded outlined class="q-mb-md q-ml-md col-3" v-model="model" :options="options" label="Grupo" padding/>
    </div>
      <q-table
        title="Alumnos"
        :data="data"
        :columns="columns"
        row-key="name"
        :loading="loading"
        @click="generalUsuario"
      ><q-td></q-td></q-table>
    </div>
</template>

<script>
    export default {
        name: "General",
      data () {
        return {
          model: null,
          options: [
            'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
          ],
          loading: true,
          columns: [
            {
              name: 'nombre',
              required: true,
              label: 'Nombre',
              align: 'left',
              field: row => row.name,
              sortable: true
            },
            { name: 'apellidos', align: 'left', label: 'Apellidos', field: 'apellido', sortable: true },
            { name: 'asistencia', align: 'center',label: 'Asistencia (%)', field: 'asistencia', sortable: true },
          ],
          data: [
            {
              name: 'Marcos',
              apellido: 'Valens Fraile',
              asistencia: '100 %',
            },
            {
              name: 'Julien',
              apellido: 'Gillet',
              asistencia: '100 %',
            },
            {
              name: 'Joan',
              apellido: 'Cabot',
              asistencia: '100 %',
            },
            {
              name: 'Javier',
              apellido: 'Viñas Garcia',
              asistencia: '100 %',
            },
            {
              name: 'Biel',
              apellido: 'Sastre',
              asistencia: '100 %',
            },
          ]
        }
      },
      mounted () {
        this.onRefresh()
      },
      methods: {
        // emulate fetching data from server
        onRefresh () {
          this.loading = true
          setTimeout(() => {
            this.loading = false
          }, 5000)
        },
        generalUsuario:function () {
            this.$router.push('/generalUsuario')
        }
      }
    }
</script>

<style scoped>
  .col-4{
    width: 40%;
  }
</style>

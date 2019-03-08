<template>
  <div class="q-pa-md">
    <div class="row no-wrap">
      <q-btn label="Actualizar" color="primary" @click="onRefresh" class="q-mb-md" aria-label="actualizar"/>
      <q-select rounded outlined class="q-mb-md q-ml-md col-3" v-model="model" :options="options" label="Grupo"
                padding/>
    </div>
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>Alumnos</q-item-section>
      </q-item>
      <q-item clickable v-ripple class="bg-primary text-white">
        <q-item-section>Nombre</q-item-section>
        <q-item-section>Apellidos</q-item-section>
        <q-item-section>Asistencia (%)</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="generalUsuario">
        <q-item-section>Marcos</q-item-section>
        <q-item-section>Valens Fraile</q-item-section>
        <q-item-section>100 %</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="generalUsuario">
        <q-item-section>Julien</q-item-section>
        <q-item-section>Gillet</q-item-section>
        <q-item-section>100 %</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="generalUsuario">
        <q-item-section>Joan</q-item-section>
        <q-item-section>Cabot</q-item-section>
        <q-item-section>100 %</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="generalUsuario">
        <q-item-section>Javier</q-item-section>
        <q-item-section>Viñas Garcia</q-item-section>
        <q-item-section>100 %</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
  export default {
    name: "General",
    data() {
      return {
        model: null,
        options: [
          '1º CFGS', '2º CFGS', 'CFGM', '1º E.S.O.', '2º E.S.O.'
        ],
      }
    },
    mounted() {
      this.onRefresh()
    },
    methods: {
      // emulate fetching data from server
      onRefresh() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 5000)
      },
      generalUsuario: function () {
        this.$router.push('/general/generalUsuario')
      }
    }
  }
</script>

<style scoped>
  .col-4 {
    width: 40%;
  }
</style>

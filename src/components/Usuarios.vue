<template>
  <div padding>
    <q-select rounded outlined v-model="model" :options="options" label="Grupo"/>
    <q-btn class="bg-primary text-white q-my-md">Escanear</q-btn>
    <q-table
      title="Usuarios"
      :data="data"
      :columns="columns"
      row-key="nombre"
      selection="single"
      :selected.sync="selected"
    />
    <q-btn class="bg-primary text-white q-ma-md">Guardar</q-btn>
    <q-btn class="bg-primary text-white q-ma-md">Borrar</q-btn>
  </div>
</template>

<script>
  export default {
    name: "Usuarios",
    data() {
      return {
        selected:[],
        model: null,
        data: [
          {
            nombre: 'Frozen Yogurt',
            numTarRFID: 159,
          },
          {
            nombre: 'Ice cream sandwich',
            numTarRFID: 237,
          },
          {
            nombre: 'Eclair',
            numTarRFID: 262,
          },
          {
            nombre: 'Cupcake',
            numTarRFID: 305,
          },
          {
            nombre: 'Gingerbread',
            numTarRFID: 356,
          },
          {
            nombre: 'Jelly bean',
            numTarRFID: 375,
          },
          {
            nombre: 'Lollipop',
            numTarRFID: 392,
          },
          {
            nombre: 'Honeycomb',
            numTarRFID: 408,
          },
          {
            nombre: 'Donut',
            numTarRFID: 452,
          },
          {
            nombre: 'KitKat',
            numTarRFID: 518,
          }
        ],
        options: [
          'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
        ],
        columns: [
          {
            name: 'nombre',
            label: 'Nombre',
            field: 'nombre',
            required: true,
            align: 'left',
            sortable: true,
          },
          {
            name: 'numTarRFID',
            label: 'Numero de tarjeta RFID',
            field: 'numTarRFID',
            required: true,
            align: 'left',
            sortable: true,
          }
        ],
      }
    }
  }
</script>

<style scoped>

</style>

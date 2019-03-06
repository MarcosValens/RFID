<template>
  <div>
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-white bg-primary"
          active-color="text-black bg-orange-14"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="usuarios" label="Usuarios"/>
          <q-tab name="rfid" label="RFID"/>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="usuarios">
            <Usuarios></Usuarios>
          </q-tab-panel>

          <q-tab-panel name="rfid">
            <RFID></RFID>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
  import Usuarios from "../components/Usuarios"
  import RFID from "../components/RFID"
  export default {
    name: "asignLayout",
    components: {RFID, Usuarios},
    data() {
      return {
        tab: 'usuarios'
      }
    }
  }
</script>

<style scoped>

</style>

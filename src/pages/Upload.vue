<template>
  <q-page class="flex flex-center row" padding>
      <q-uploader
        class="col-7"
        url="http://localhost:4444/upload"
        label="Solo archivos xml"
        multiple
        :filter="checkFileType"
      />
    <div>
      <q-btn class="q-mx-md text-white bg-primary" @click="bajar" name="descargar">Descargar</q-btn>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: "upload",
    methods: {
      checkFileType(files) {
        return files.filter(file => file.type === 'text/xml')
      },
      bajar(){

      },
    }
  }
</script>

<style scoped>

</style>

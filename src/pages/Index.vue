<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page class="flex flex-center">
    <div class="flex column">
      <q-avatar size="100px" class="col">
        <img src="https://cdn.quasar-framework.org/img/avatar.png" alt="avatar">
      </q-avatar>
      <q-input v-model="user" label="Nombre" class="col-12 q-mt-xl"></q-input>
      <q-input class="col q-mt-xl" v-model="password" filled :type="isPwd ? 'password' : 'text'">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"></q-icon>
        </template>
      </q-input>
      <q-btn class="col q-mt-xl" color="primary" icon="person" @click="login" label="Entrar"></q-btn>
    </div>
  </q-page>
</template>

<style>

</style>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
        user: '',
        password: '',
        isPwd: '',
      };
    },
    methods: {
      login() {
        this.$axios.post('http://35.194.72.13/login_example.php',
          {
            user: this.user,
            password: this.password,
          }, {
            headers: { 'Content-type': 'aplication/x-www-form-urlencoded' }
          })
          .then(response => {
            if (response.data){
              this.$router.push('/general')
            } else {
              this.$q.notify({message:'Error de autentificación',color:'negative',position:'top'})
            }
          });
        /*this.$axios.get('http://35.194.72.13/login_example.php?user='+this.user+'&password='+this.password).then(/!*function*!/ (response) => {
          console.log(response);
          let datos = response.data;
          console.log(datos);
          if (datos){
            this.$router.push('/')
            console.log('redirect.log')
          } else {
            this.$q.notify({message:'Error de autentificación',color:'negative',position:'top'})
          }
        }.bind(this))*/
      }
    }
  };
</script>

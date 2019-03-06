<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="flex no-wrap ">
      <img src="../assets/logoLiceuBlanco.svg" class="q-ml-xl" id="liceu" alt="logo Es Liceu">
      <q-toolbar class="justify-end">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"/>
        <q-btn flat round>
          <q-avatar>
            <q-badge color="red" floating>{{numberNotifications}}</q-badge>
            <img src="../assets/notification_icon.svg" alt="Icon notification">
          </q-avatar>
        </q-btn>
        <q-btn flat round>
          <q-avatar>
            <img src="../assets/user_icon.svg" alt="Icon user">
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      overlay bordered
      side="right"
      :width="200"
      :breakpoint="500"
      show-if-above
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable active v-ripple @click="general">
            <q-item-section avatar>
              <q-icon name="format_list_bulleted"/>
            </q-item-section>

            <q-item-section>
              General
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="validar">
            <q-item-section avatar>
              <q-icon name="done_outline"/>
            </q-item-section>

            <q-item-section>
              Validar
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="xml">
            <q-item-section avatar>
              <q-icon name="cloud_upload"/>
            </q-item-section>

            <q-item-section>
              XML
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="asignar">
            <q-item-section avatar>
              <q-icon name="how_to_reg"/>
            </q-item-section>

            <q-item-section>
              Asignar
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import {openURL} from 'quasar'

  export default {
    name: 'MyLayout',
    data() {
      return {
        drawer: false,
        numberNotifications: '8',
      }
    },
    methods: {
      openURL,
      general: function () {
        this.$router.push('/general')
      },
      validar: function () {
        this.$router.push('/validar')
      },
      xml:function () {
        this.$router.push('/upload')
      },
      asignar:function () {
        this.$router.push('/asignar')
      }
    }
  }
</script>

<style>
  #liceu {
    width: 9%
  }
</style>

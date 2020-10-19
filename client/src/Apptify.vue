<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <div class="header">
    <md-toolbar class="md-accent headerText" md-elevation="0">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <md-avatar>
       <img src="../assets/logo.png" alt="Avatar">
      </md-avatar>
      <div class="userText">
      <div class="md-body-2">Quadra Diffusion <md-icon>keyboard_arrow_down</md-icon></div>
      <div class="md-caption">Nord</div>
      </div>
      <div class="vl"></div>
      <div >
        <md-icon>help</md-icon>
        <md-avatar>
        <img src="../assets/logo.png" alt="Avatar">
        </md-avatar>
      </div>
    </md-toolbar>
    <div class="searchBox">
        <div class="md-layout  md-alignment-center searchSubBox">
            <div class="md-layout-item  md-small-size-35 md-xsmall-size-100 helpText"><span class="md-headline bold">Comment pouvons-nous vous aider ?</span></div>
            <div class="md-layout-item  md-small-size-35 md-xsmall-size-100 linkRedirection"><md-icon>open_in_new</md-icon> <span class="md-body-1">Aller sur Affixe 2.0</span></div>

        </div>
         <form @submit="search" enctype="multipart/form-data">
        <md-autocomplete
            class="search searchInput"
            v-model="selectedCat"
            :md-options="optionCategories"
            md-layout="box">
            <label><md-icon>search</md-icon> Rechercher des réponses...</label>
        </md-autocomplete>  
        </form>      
    </div>
  </div>
</template>

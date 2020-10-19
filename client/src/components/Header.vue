<template>
  <div>
    <v-app-bar app color="blue" class="white--text">
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

      <md-avatar>
        <img src="../assets/logo.png" alt="Avatar" />
      </md-avatar>
      <div justify="space-around">
        <div class="md-body-2">
          Quadra Diffusion
          <md-icon>keyboard_arrow_down</md-icon>
        </div>
        <div class="md-caption">Nord</div>
      </div>
      <v-divider class="mx-4" vertical></v-divider>
      <div justify="space-around">
        <md-icon>help</md-icon>
        <md-avatar>
          <img src="../assets/logo.png" alt="Avatar" />
        </md-avatar>
      </div>
    </v-app-bar>
    
  </div>
</template>




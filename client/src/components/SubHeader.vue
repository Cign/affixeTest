<template>
  <div>
    <v-card
      class="d-flex  flex-wrap white--text pa-6"
      color="primary"
      flat
      tile
      min-height="200"
    >
      <v-container >
        <v-row justify="center"  no-gutters style="flex-wrap: nowrap;">
          <v-col cols="1" sm="9">
            <v-row align="end" justify="end">
              <v-col class="pa-3 text-left">
                <span class="md-headline bold">Comment pouvons-nous vous aider ?</span>
              </v-col>
              <v-col class="pa-3 text-right" >
                <md-icon>open_in_new</md-icon>
                <span class="md-body-1">Aller sur Affixe 2.0</span>
              </v-col>
            </v-row>
        
            <v-form @submit="search" enctype="multipart/form-data" >
              <md-autocomplete
                class="color"
                v-model="selectedCat"
                :md-options="optionCategories"
                md-layout="box"
                md-dense
              >
                <label>
                  <md-icon>search</md-icon>Rechercher des réponses...
                </label>
              </md-autocomplete>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Header",
  props: {},
  data() {
    return {
      cats: null,
      optionCategories: {},
      selectedCat: null
    };
  },
  methods: {
    search: function() {
      axios
        .get(
          "https://affixer007.herokuapp.com/api/search/category/" +
            this.selectedCat
        )
        .then(res => {
          console.log("All cats from search", res.data);
          this.$store.commit("majCats", res.data);
        });
    }
  },
  mounted() {
    axios.get("https://affixer007.herokuapp.com/api/cats").then(res => {
      console.log("All cats", res.data);
      let optCat = [];
      res.data.forEach(cat => {
        optCat.push(cat.data.title);
      });
      this.cats = res.data;
      this.optionCategories = optCat;
    });
  }
};
</script>
<style scoped>
.color {
  background-color: white;
  color: grey;
}
</style>
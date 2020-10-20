
<template>

    <v-container >
    <v-row class="mb-6"
        justify="center">
    <v-col sm="9" class="text-left ">
      
    <v-breadcrumbs :items="items" > 
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
      <v-card class="pa-6" outlined
          tile elevation="1">
        <v-card elevation="0" class="md-primary shadow" md-theme="green-card">
          <md-card-header>
            <md-card-media>
              <img :src="cat.data.icon" alt="Avatar" />
            </md-card-media>
            <md-card-header-text class="px-5">
              <div class="md-title">{{cat.data.title}}</div>
              <div class="md-subhead">{{nArticles}} article(s) dans cette catégorie</div>
            </md-card-header-text>
          </md-card-header>
        </v-card>
        <ArticleList v-bind:id="this.id" />
      </v-card>
      </v-col >
      </v-row >
      </v-container >

</template>

<script>
import axios from "axios";
import ArticleList from "./ArticleList";
export default {
  name: "Category",
  components: {
    ArticleList
  },
  props: {},
  data() {
    return {
      id: 0,
      cat: null,
      nArticles: 0,
      items: [
        {
          text: 'Aide en ligne',
          disabled: false,
          href: '/',
        },
        {
          text: 'Catégorie',
          disabled: true,
        },
      ],
    };
  },
  created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
    }
    this.getCategory();
    this.countArticles();
  },
  methods: {
    getCategory() {
      axios
        .get("https://affixer007.herokuapp.com/api/cats/doc/" + this.id)
        .then(res => {
          this.cat = res.data;
          console.log("cat  $", this.cat);
        })
        .catch(err => {
          throw err;
        });
    },
    countArticles() {
      axios
        .get(
          "https://affixer007.herokuapp.com/api/cats/article/count/" + this.id
        )
        .then(res => {
          this.nArticles = res.data;
        });
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

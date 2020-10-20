
<template>
  <v-container>
    <v-row class="mb-6" justify="center">
      <v-col sm="9" class="text-left">
        <div class="px-6 my-n3">
          <v-breadcrumbs :items="items">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">{{ item.text }}</v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </div>

        <v-card class="pa-10 text-justify">
          <span class="md-headline">{{art.data.title}}</span>
          <p class="md-body-2">{{art.data.description}}</p>
          <img :src="art.data.image" />
          <p class="md-body-2">{{art.data.description}}</p>
          <div class="md-layout color">
            <div
              class="md-layout-item pa-9"
            >Ces informations vous-ont elles été utiles ?</div>
            <div class="md-layout-item pa-7">
              <img  src="../assets/Image1.png" alt="HappyEmoji" />
              <img  src="../assets/Image3.png" alt="NeutralEmoji" />
              <img  src="../assets/Image2.png" alt="SadEmoji" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Article",
  components: {},
  data() {
    return {
      art: null,
      id: 0,
      items: [
        {
          text: "Aide en ligne",
          disabled: false,
          href: "/"
        },
        {
          text: "Catégorie",
          disabled: true
        }
      ]
    };
  },
  created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      console.log("id from article list", this.data);
    }
    this.getArticle();
  },
  methods: {
    getArticle() {
      axios
        .get("https://affixer007.herokuapp.com/api/articles/doc/" + this.id)
        .then(res => {
          this.art = res.data;
          console.log("cat  $", this.art);
        })
        .catch(err => {
          throw err;
        });
    }
  },
  mounted() {
    //H73tCOFNdpnOilPvZrOL
    axios
      .get("https://affixer007.herokuapp.com/api/cats/doc/H73tCOFNdpnOilPvZrOL")
      .then(res => {
        console.log("One categ", res.data);
      });

    axios
      .get(
        "https://affixer007.herokuapp.com/api/articles/category/H73tCOFNdpnOilPvZrOL"
      )
      .then(res => {
        console.log("Arts in cat H73tCOFNdpnOilPvZrOL", res.data);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  font: normal normal bold 14px/19px Open Sans;
  letter-spacing: 0px;
  background-color: #e1e5ec;
}
</style>


<template>
  <v-container >
  <v-row class="mb-6"
      justify="center">
  <v-col sm="9" class="text-left ">
    <md-card class="md-primary" md-theme="green-card" v-for="c in this.$store.state.cats" :key="c.id">
      <router-link :to="{ name: 'category', query: { id: c.id }}">
        <md-card-header>
          <md-card-media>
            <img :src="c.data.icon" alt="Avatar" />
          </md-card-media>
          <md-card-header-text class="px-5">
            <p class="md-title ">{{c.data.title}}</p>
            <p class="md-subhead ">{{ findArticlesNumber(c.id) }} articles dans cette catégorie</p>
          </md-card-header-text>
        </md-card-header>
      </router-link>
    </md-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "CategoryList",
  props: {
    msg: String,
    resultSearh: Object
  },
  data() {
    return {
      cats: null,
      match: null
    };
  },
  created() {
    this.all_cats();
    if (this.resultSearh != null) {
      this.cats = this.resultSearh;
    }
  },
  computed: {},
  methods: {
    all_cats() {
      let list = [];
      axios.get("https://affixer007.herokuapp.com/api/cats").then(res => {
        console.log("All cats", res.data);
        this.cats = res.data;
        this.$store.commit('majCats', res.data);
        res.data.forEach(c => {
          axios.get("https://affixer007.herokuapp.com/api/cats/article/count/" + c.id).then((n) => {
            list.push({
              id: c.id,
              num: n.data
            })
          }).catch((err) => console.log(err))
        })
        this.match = list;
        console.log("list fffff", list)
      }).catch((err) => console.log(err))
    },
    countArticles(id) {
      let x = 0;
      axios
        .get("https://affixer007.herokuapp.com/api/cats/article/count/" + id)
        .then(res => {
          x = res.data;
        })
        .catch(err => {
          console.log("Error", err);
        });
      return x;
    },
    findArticlesNumber(id){
      let n = 0;
      this.match.forEach(c => {
        if(id == c.id)
          n = c.num
          console.log("num settedddd ",c.num)
      })
      return n;
    }
  },
  mounted() {}
};
</script>



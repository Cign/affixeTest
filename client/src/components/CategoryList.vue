
<template>
  <div class="categoryList">
    <md-card class="md-primary categorieBox" md-theme="green-card" v-for="c in this.$store.state.cats" :key="c.id">
      <router-link :to="{ name: 'category', query: { id: c.id }}">
        <md-card-header>
          <md-card-media>
            <img :src="c.data.icon" alt="Avatar" />
          </md-card-media>
          <md-card-header-text class="wrapFlex">
            <p class="md-title textPosition">{{c.data.title}}</p>
            <p class="md-subhead textPosition">{{ findArticlesNumber(c.id) }} articles dans cette catégorie</p>
          </md-card-header-text>
        </md-card-header>
      </router-link>
    </md-card>
  </div>
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
      axios.get("http://affixer007.herokuapp.com/api/cats").then(res => {
        console.log("All cats", res.data);
        this.cats = res.data;
        this.$store.commit('majCats', res.data);
        res.data.forEach(c => {
          axios.get("http://affixer007.herokuapp.com/api/cats/article/count/" + c.id).then((n) => {
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
        .get("http://affixer007.herokuapp.com/api/cats/article/count/" + id)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textPosition {
  text-align: left;
  padding-left: 7%;
}

.wrapFlex {
  flex-wrap: wrap;
}

.categorieBox {
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1%;
  background-color: white;
}
</style>

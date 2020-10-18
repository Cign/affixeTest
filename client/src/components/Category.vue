
<template>

  <div class="categorieBox">
    <div class="marginCat">
     <div class="row breadcrumb">
        <span class="passNav"> <router-link class="passNav" :to="{ name: 'index'}"> Aide en ligne </router-link> / </span>  <span><router-link class="activeNav" :to="{ name: 'category'}">Catégorie</router-link></span> 
    </div>
    <div class="category">
    <md-card class="md-primary shadow" md-theme="green-card">
      <md-card-header>
      <md-card-media>
          <img :src="cat.data.icon" alt="Avatar">
        </md-card-media>
        <md-card-header-text class="marginCatt">
          <div class="md-title">{{cat.data.title}}</div>
          <div class="md-subhead">{{nArticles}} article(s) dans cette catégorie </div>
        </md-card-header-text>

        
      </md-card-header>
    </md-card>
    <ArticleList v-bind:id="this.id"/>
    </div> 
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ArticleList from './ArticleList'
export default {
  name: 'Category',
  components: {
    ArticleList,
  },
  props: {
  },
  data(){
    return {
      id: 0,
      cat: null,
      nArticles: 0}
  },
  created() {
            if(this.$route.query.id) {
                this.id = this.$route.query.id;
            }
            this.getCategory()
            this.countArticles();
            
            
        },
  methods:{
            getCategory(){
                axios.get('https://affixer007.herokuapp.com/api/cats/doc/'+this.id).then((res)=>{
                    this.cat = res.data;
                    console.log("cat  $",this.cat)
                }).catch((err) => {throw err})
            },
            countArticles() {
               axios.get('https://affixer007.herokuapp.com/api/cats/article/count/'+this.id).then((res)=>{
                this.nArticles = res.data;
              });
            }
            
        },
  mounted() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.passNav{
    text-align: left;
    font: normal normal normal 14px/19px Open Sans;
    letter-spacing: 0px;
    color: #C2CAD8;
}

.activeNav{
    text-align: left;
    font: normal normal normal 14px/19px Open Sans;
    letter-spacing: 0px;
    color: #2C3E50;
}

.shadow{
    box-shadow: none !important;
}

.breadcrumb{
    text-align: left;
}

.marginCat{
    margin: 5px;
}

.marginCatt{
    margin: 10px;
}

.categorieBox{
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1%;
    margin-bottom: 1%;
    background-color: #f2f7f9;
}

.category{
    margin-top: 5%;
    text-align: left;
    padding: 5px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    background-color: white;
}
</style>

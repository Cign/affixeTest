
<template>
  <v-container class="mx-5 ">
    <md-card md-with-hover class="rounded color" v-for="a in arts" :key="a.id">
     <router-link  :to="{ name: 'article', query: { id: a.id }}">
      <md-ripple>
        <md-card-header >
          <div class="md-body-2"> {{a.data.title}} </div>
          <div class="md-caption">Mise à jour  {{ a.data.timestamp._seconds | duration('humanize') }}</div>
        </md-card-header>
      </md-ripple>
     </router-link>
    </md-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ArticleList',
  props: {
    id: String
  },
  data(){
    return {
      cats: null,
      arts: null,
      cat: null,
      nArticles: 0}
  },
  created() {
            this.getArticles()
        },
  methods:{
            getArticles(){
                axios.get('https://affixer007.herokuapp.com/api/cats/doc/'+this.id).then((res)=>{
                    this.cat = res.data;
                    console.log("cat  $",this.cat)
                }).catch((err) => {throw err})
                axios.get('https://affixer007.herokuapp.com/api/articles/category/'+this.id).then((res)=>{
                    console.log("Articles ds cat dynamique id ", this.id)
                this.arts = res.data;
                console.log("Articles  $",this.arts)
                })
            },
        },
  mounted() {
    
    
    //H73tCOFNdpnOilPvZrOL
    axios.get('https://affixer007.herokuapp.com/api/cats/doc/H73tCOFNdpnOilPvZrOL').then((res)=>{
      console.log("One categ",res.data);
    })

    axios.get('https://affixer007.herokuapp.com/api/articles/category/H73tCOFNdpnOilPvZrOL').then((res)=>{
        console.log("Arts in cat H73tCOFNdpnOilPvZrOL",res.data);
        })
  },
}
</script>

<style scoped>
.color {
  background-color: #e1e5ec !important;
}
</style>


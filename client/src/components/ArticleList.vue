
<template>
  <div>
    <md-card md-with-hover class="articleBox" v-for="a in arts" :key="a.id">
     <router-link  :to="{ name: 'article', query: { id: a.id }}">
      <md-ripple>
        <md-card-header>
          <div class="md-body-2"> {{a.data.title}} </div>
          <div class="md-caption">Mise à jour  {{ a.data.timestamp._seconds | duration('humanize') }}</div>
        </md-card-header>
      </md-ripple>
     </router-link>
    </md-card>
  </div>
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
                axios.get('http://affixer007.herokuapp.com/api/cats/doc/'+this.id).then((res)=>{
                    this.cat = res.data;
                    console.log("cat  $",this.cat)
                }).catch((err) => {throw err})
                axios.get('http://affixer007.herokuapp.com/api/articles/category/'+this.id).then((res)=>{
                    console.log("Articles ds cat dynamique id ", this.id)
                this.arts = res.data;
                console.log("Articles  $",this.arts)
                })
            },
        },
  mounted() {
    
    
    //H73tCOFNdpnOilPvZrOL
    axios.get('http://affixer007.herokuapp.com/api/cats/doc/H73tCOFNdpnOilPvZrOL').then((res)=>{
      console.log("One categ",res.data);
    })

    axios.get('http://affixer007.herokuapp.com/api/articles/category/H73tCOFNdpnOilPvZrOL').then((res)=>{
        console.log("Arts in cat H73tCOFNdpnOilPvZrOL",res.data);
        })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.articleBox{
    width: 89%;
    margin-left: 4.5%;
    margin-top: 1.5%;
    background: #F2F7F9 0% 0% no-repeat padding-box;
    border-radius: 4px;
}

.shadow{
    box-shadow: none !important;
}

.category{
    margin-top: 5%;
    text-align: left;
    padding: 5px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    background-color: white;
}
</style>

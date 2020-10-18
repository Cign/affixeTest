
<template>

  <div class="articleBox">
    <div class="marginCat">
     <div class="row breadcrumb">
        <span class="passNav"> <router-link class="passNav" :to="{ name: 'index'}"> Aide en ligne </router-link> / </span>  <span><router-link class="activeNav" :to="{ name: 'category'}">Catégorie</router-link></span> 
    </div>
    <div class="article">
        <span class="md-headline"> {{art.data.title}} </span>
        <p class="md-body-2">
            {{art.data.description}}
        </p>
        <img :src="art.data.image" />
        <p class="md-body-2">
            {{art.data.description}}
        </p>
        <div class="md-layout color">
            <div class="md-layout-item appreciationText">Ces informations vous-ont elles été utiles ?</div>
            <div class="md-layout-item flatDisplay">
                <img class="flatDisplay" src="../assets/Image1.png" alt="HappyEmoji" />
                <img class="flatDisplay" src="../assets/Image3.png" alt="NeutralEmoji" />
                <img class="flatDisplay" src="../assets/Image2.png" alt="SadEmoji" />
            </div>
        </div>
    </div> 
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Article',
  components: {
  },
  data(){
    return {
      art: null,
      id: 0,}
  },
  created() {
      if(this.$route.query.id) {
                this.id = this.$route.query.id;
                console.log("id from article list", this.data)
            }
            this.getArticle()
            
            
        },
  methods:{
            getArticle(){
                axios.get('http://affixer007.herokuapp.com/api/articles/doc/'+this.id).then((res)=>{
                    this.art = res.data;
                    console.log("cat  $",this.art)
                }).catch((err) => {throw err})
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

.flatDisplay{
    display: inline-block;
    margin-right: 4%;
}

.color{
    font: normal normal bold 14px/19px Open Sans;
    letter-spacing: 0px;
    background-color: #E1E5EC ;
    height: 91px;
    line-height: 91px;
    border-radius: 4px;
    width: 100%;
}

.appreciationText{
    text-align: center;
    vertical-align: middle;
}


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


.articleBox{
    width: 60%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1%;
    margin-bottom: 1%;
    background-color: #f2f7f9;
}

.article{
    margin-top: 7%;
    text-align: left;
    padding: 10%;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    background-color: #fff;
}
</style>

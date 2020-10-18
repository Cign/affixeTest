<template>
  <div class="header">
    <md-toolbar class="md-accent headerText" md-elevation="0">
      <h3 class="md-title logoText" style="flex: 1">LOGO</h3>
      <md-avatar>
       <img src="../assets/logo.png" alt="Avatar">
      </md-avatar>
      <div class="userText">
      <div class="md-body-2">Quadra Diffusion <md-icon>keyboard_arrow_down</md-icon></div>
      <div class="md-caption">Nord</div>
      </div>
      <div class="vl"></div>
      <div >
        <md-icon>help</md-icon>
        <md-avatar>
        <img src="../assets/logo.png" alt="Avatar">
        </md-avatar>
      </div>
    </md-toolbar>
    <div class="searchBox">
        <div class="md-layout  md-alignment-center searchSubBox">
            <div class="md-layout-item  md-small-size-35 md-xsmall-size-100 helpText"><span class="md-headline bold">Comment pouvons-nous vous aider ?</span></div>
            <div class="md-layout-item  md-small-size-35 md-xsmall-size-100 linkRedirection"><md-icon>open_in_new</md-icon> <span class="md-body-1">Aller sur Affixe 2.0</span></div>

        </div>
         <form @submit="search" enctype="multipart/form-data">
        <md-autocomplete
            class="search searchInput"
            v-model="selectedCat"
            :md-options="optionCategories"
            md-layout="box">
            <label><md-icon>search</md-icon> Rechercher des réponses...</label>
        </md-autocomplete>  
        </form>      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data(){
    return {
      cats: null,
      optionCategories: {},
      selectedCat: null}
  },
  methods:{
    search: function () {
      axios.get('http://affixer007.herokuapp.com/api/search/category/'+this.selectedCat).then((res)=>{
      console.log("All cats from search", res.data);
      this.$store.commit('majCats', res.data);
    })
    }
  },
  mounted() {
    axios.get('http://affixer007.herokuapp.com/api/cats').then((res)=>{
      console.log("All cats", res.data);
      let optCat = [];
      res.data.forEach((cat) => {
        optCat.push(cat.data.title);
      }) 
      this.cats = res.data;
      this.optionCategories = optCat;
    })
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header{
    color: white;
}

.searchBox{
    background: #3598DC 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
    height: 181px;
    font: normal normal bold 24px/33px Open Sans;
    letter-spacing: 0px;
    text-align: center;
  
}

.helpText{
  text-align: left;
}

.bold{
  font-weight: bold;
}

.linkRedirection{
  text-align: right;
}

.searchSubBox{
    padding-top: 27px;
    width: 61%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

.headerText{
    text-align: left !important;
    background: transparent linear-gradient(270deg, #3598DC 0%, #2079B7 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
}
.userText{
    flex-direction: row;
}
.vl {
  border-left: 2px solid grey;
  height: 57px;
  margin: 1%;
}

.searchInput{
  width: 61%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: gray;
  justify-content: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  height: 48px;
}
</style>

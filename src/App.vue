<template>
  <div id="app">
    <!-- searchbar -->
   <header>
     <form id="form">
       <input type="text" placeholder="Search..." id="search">
       <button id="search">search</button>
     </form>
   </header>
    
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: 'App',
  components: {
    
  },

 data(){
   return{
     URL_APi: "https://api.themoviedb.org/3/search/movie?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&include_adult=false&query=string",
     movie: [],
     
     error: null, 
   };
 },

 methods: {
   callApi(){
    axios
    .get(this.URL_APi)
    .then((response)=>{
      console.log(response);
      this.movie = response.data.results;
      
      console.log(response.data.results);
      
      
      
    })
    .catch((error)=>{
      
      error;
      this.error= "Ci sono dei problemi...";
    });

   }
 },
 mounted(){
   this.callApi();
 }
}
</script>

<!-- api: https://api.themoviedb.org/3/search/movie?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&include_adult=false&query=string -->


<style lang="scss" scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
header{
  height: 5vh;
  display:Flex;
  align-items: center;
  
  } 
  
  #search{
    padding:5px 10px;
    margin:10px;
  }

   



</style>
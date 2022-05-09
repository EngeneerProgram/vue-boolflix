<template>
  <div id="app">
    <!-- searchbar -->
    <header>
      
        <input @keyup.enter="findFilm"  v-model="searchbox" type="text" placeholder="Search..." id="search">
        <button @click="findFilm"  id="search">search</button>
      
    </header>
    <!-- visualizzare: titolo, titolo originale, lingua, voto -->
  
    <main>
      <ul class="film">
        <li v-for="movie in film" :key="movie.id">
          
          <h3>{{movie.title}}</h3>
          <h2>{{movie.original_title}}</h2>
          <h2>{{movie.original_language}}</h2>
          <h2>{{movie.vote_average}}</h2>
        </li>
      </ul>

      <ul class="series">
        <li v-for="serie in series" :key="serie.id">
            <h1>{{serie.title}}</h1>
          <h2>{{serie.original_title}}</h2>
          <h2>{{serie.original_language}}</h2>
          <h2>{{serie.vote_average}}</h2>
        </li>
      </ul>
    </main>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "App",
  data(){
    return{
      searchbox:"",
      film : [],
      series : [],
    };
  },
  

  methods:{
    findFilm(){
      const requiredfilm = axios.get(`https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=it-IT&api_key=2d4086a1da1ceb84b071c2d1750dc6c4&query=${this.searchbox}`)

      const requireserie = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&include_adult=false&query=${this.searchbox}`)
      axios.all([requiredfilm, requireserie]).then(
      axios.spread((...response)=>{
        this.film = response[0].data.results;
        this.series = response[0].data.results;
        this.searchbox = "";
      })
      );

    }
  }
}
</script>










 <style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1{
  color:lime
}

header {
  height: 5vh;
  display: Flex;
  align-items: center;

}

#search {
  padding: 5px 10px;
  margin: 10px;
}

h3{
  color:red;
}
</style>
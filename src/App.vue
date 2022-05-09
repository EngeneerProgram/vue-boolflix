<template>
  <div id="app">
    <!-- searchbar -->
    <header>
      
        <input @keyup.enter="filterMovie" v-model="searchbox" type="text" placeholder="Search..." id="search">
        <button @click="filterMovie" id="search">search</button>
      
    </header>
    <!-- visualizzare: titolo, titolo originale, lingua, voto -->
  
    <main>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          
          <h3>{{movie.title}}</h3>
          <h2>{{movie.original_title}}</h2>
          <h2>{{movie.original_language}}</h2>
          <h2>{{movie.vote_average}}</h2>
        </li>
      </ul>
    </main>
  </div>
</template>



<script>
import axios from "axios";
import { query } from "express";
export default {

  name: 'App',

  components: {

  },

  data() {

    return {
      searchbox: "",
      // URL_APi:"https://api.themoviedb.org/3/search/movie?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&include_adult=false&query=string",
      movies: [],

      error: null,
    };

  },

  methods: {
    callApi() {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&include_adult=false&${query=searchbox}`)
        .then((response) => {

          this.movies = response.data.results;
          console.log(this.movies);

        })

        .catch((error) => {
          console.log(error)
          error;
          this.error = "Ci sono dei problemi...";
        });
    },

    filterMovie(){
      const movie_filtr = [];
      if((this.movies).includes(this.searchbox.toLowerCase())){
        console.log("ok");
        movie_filtr.push(this.movies);
        console.log(movie_filtr);
      }else{
        console.log("non è incluso")
      }
      this.searchbox="";
    }


  },
  mounted() {
    this.callApi();
  },
};
    

        







</script>




<!-- api: https://api.themoviedb.org/3/search/movie?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&include_adult=false&query=string -->


<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
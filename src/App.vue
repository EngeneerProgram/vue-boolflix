<template>
  <div id="app">
    <!-- searchbar -->
    <header>

      <input @keyup.enter="findFilm" v-model="searchbox" type="text" placeholder="Search..." id="search">
      <button @click="findFilm" id="search">search</button>

    </header>
    <!-- visualizzare: titolo, titolo originale, lingua, voto -->

    <main>
      <ul class="film">
        <li v-for="(movie, index) in film" :key="movie.id">
          <!-- //se l'oggetto restituito dall'api non ha l'immagine viene sostituita da una immagine random -->
          <img @error="image_fail($event)" :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path"
            :alt="movie.title">
          <h3>{{ movie.title }}</h3>
          <h2>{{ movie.original_title }}</h2>
         <img :src="'https://flagcdn.com/32x24/' + printf_flag(index) + '.png'" alt="">

          <h2>{{ movie.vote_average }}</h2>
        </li>
      </ul>

      <ul class="series">
        <li v-for="serie in series" :key="serie.id">
          <h1>{{ serie.title }}</h1>
          <h2>{{ serie.original_title }}</h2>
          <h2>{{ serie.original_language }}</h2>
          <h2>{{ serie.vote_average }}</h2>
        </li>
      </ul>
    </main>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      //v-model, questo componente va inserito nel query appartenente 
      //all'api così che quando l'utente inserisce qualcosa l'app è 
      //capace di restituire i risultati opportuni.
      searchbox: "",

      //salvataggio dei film da mostrare all'utente.
      film: [],

      //salvataggio delle serie tv da mostrare all'utente
      series: [],
    };
  },
  

  methods: {
    //prima milestone
    findFilm() {
      // chiamata dinamica per i film tramite il search. nNella chiamata aggiungiamo il query : searchbox così da renderla dinamica
      const requiredfilm = axios.get(`https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&query=${this.searchbox}`);
      console.log(requiredfilm);
      // chiamata dinamica per le serie tv tramite il search
      const requireserie = axios.get(`https://api.themoviedb.org/3/search/tv?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&include_adult=false&query=${this.searchbox}`)
      axios.all([requiredfilm, requireserie]).then(
        axios.spread((...response) => {
          this.film = [...response[0].data.results];
          console.log(this.film);
          this.series = [...response[0].data.results];
          console.log(this.series);
          //l'input del v-model viene impostato a " " dopo che l'utente ha inserito qualcosa
          this.searchbox = "";
        })
      );
    },

    // se l'immage è mancante l'app la sostituisce con un'altra immagine
    image_fail(event) {
      event.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS7BNTLBsW16U2Of9JRgmOiCybiv6LY2f6g&usqp=CAU";
      console.log("evocato");
    },

    //seconda milestone

    printf_flag(index){
      let flag = this.film[index].original_language;
      if(flag === "en"){
        flag = "gb"
        console.log(flag);
      }else if(flag==="ja"){
        flag="jp"
        console.log(flag);
      }else if(flag==="el"){
        flag="gr"
        console.log(flag);
      }
      return flag;
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

h1 {
  color: lime
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

h3 {
  color: red;
}
</style>
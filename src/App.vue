<template>
  <div id="app">
    <!-- searchbar -->
    <div v-show="value2" class="container_fluid hex_container">
      <div class="banner_access">
        <h1 class="white init">
          Film, serie TV e tanto <br />
          altro. Senza limiti
        </h1>
        <p class="white init">
          Guarda ciò che vuoi ovunque. Disdici quando vuoi.
        </p>
        <div class="form_access_to_app">
          <form action="get">
            <div class="login_input">
              <input
                placeholder="mario-rossi@gmail.com"
                v-model="email_input"
                @keyup.enter="Login_system"
                type="email"
                class="form-control login"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <input
                placeholder="*********"
                @keyup.enter="Login_system"
                v-model="password"
                type="password"
                class="form-control login"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <button
              @click="Login_system"
              type="button"
              class="btn btn-danger get_started"
              :disabled="email_input <5 || password <4"
            >
              Enter
            </button>
          </form>
        </div>
        <div  v-show="bol_falso" class="access_neg">
          <p class="alert_login">Non abbiamo trovato nessun occount con questo indirizzo email. Riprova o crea un nuovo occount.</p>
        </div>
      </div>
    </div>

    <header v-show="value1" id="1" class="fixed-top">
      <img
        src="./assets/img/Netflix-Logo-2001.png"
        width="120px"
        alt=""
        class="logo img-fluid"
      />
      <div class="search_film">
        <input
          @keyup.enter="findFilm"
          v-model="searchbox"
          type="text"
          placeholder="Search..."
          id="search"
        />

        <button
          :disabled="searchbox.length < 1"
          @click="findFilm"
          class="btn"
          id="search"
        >
          Send
        </button>
      </div>
    </header>
    
        
        
      
    
    <main v-show="value1">

    <!-- <div v-show="card" class="gx container-fluid d-flex flex-wrap">
      <img v-show="card" class=" mx img_thumb" src="./assets/img/film.jpg" alt="">
      <img v-show="card" class=" mx img_thumb" src="./assets/img/film1.jpg" alt="">
      <img v-show="card" class=" mx img_thumb" src="./assets/img/film2.jpg" alt="">
      <img v-show="card"  class="mx img_thumb" src="./assets/img/film3.jpg" alt="">
      <img v-show="card" class="mx img_thumb" src="./assets/img/film4.jpg" alt="">

      <img v-show="card" class=" mx img_thumb" src="./assets/img/serie1.jpg" alt="">
      <img v-show="card" class=" mx img_thumb" src="./assets/img/serie2.jpg" alt="">
      <img v-show="card" class=" mx img_thumb" src="./assets/img/serie3.jpg" alt="">
      <img v-show="card" class=" mx img_thumb" src="./assets/img/serie4.jpg" alt="">
      <img v-show="card" class=" mx img_thumb" src="./assets/img/serie5.jpg" alt="">


    </div> -->
      <!-- <div class="container-fluid">
        <div class="start">
        <h1 class="White">Film, serie TV e tanto <br>altro. Senza limiti.</h1>
        <p class="white">Guarda tutto ciò che vuoi ovunque. Disdici quando vuoi.</p>
        <button class="btn btn-danger" type="Inizia">Button</button>
      </div> -->

      <div v-show="value1"
        class="
          row row-cols-2 row-cols-md-3 row-cols-lg-5
          pt-5
          hero_container
          container-fluid
          d-flex
          justify-content-evenly
          flex-wrap
        "
      >
        <div
          class="movies_card m-3"
          v-for="(movie, index) in film"
          :key="movie.id"
        >
          <div class="card_thumb">
            <img
              class="img-fluid img_thumb scale"
              @error="image_fail($event)"
              :src="'https://image.tmdb.org/t/p/w400/' + movie.poster_path"
              :alt="movie.title"
            />

            <span class="play"
              ><img
                src="https://img.cppng.com/download/2020-06/25569-6-play-button-transparent.png"
                width="70px"
                alt=""
            /></span>

            <div
              class="
                info_card
                d-flex
                justify-content-center
                align-items-center
                flex-column
              "
            >
              <h4 class="white">{{ movie.release_date }}</h4>
              <div class="direction">
                <h4 class="white">Direction:</h4>

                <img
                  class="img-fluid flag_img"
                  :src="
                    'https://flagcdn.com/32x24/' + printf_flag(index) + '.png'
                  "
                  alt=""
                />
              </div>

              <h3 class="star_gold">
                <!-- <span class="votazione">voto: </span> -->
                <font-awesome-icon
                  v-for="paux in VoteStars(index)"
                  :key="paux"
                  icon="fa-star"
                />
              </h3>
            </div>
          </div>
          <h2 class="white text-center">{{ movie.title }}</h2>
        </div>

        <!-- //serie -->

        <div
          class="movies_card m-3"
          v-for="(serie, index) in series"
          :key="index"
        >
          <div class="card_thumb">
            <img
              class="img-fluid img_thumb"
              @error="image_fail($event)"
              :src="'https://image.tmdb.org/t/p/w300/' + serie.poster_path"
              :alt="serie.title"
            />

            <span class="play"
              ><img
                src="https://img.cppng.com/download/2020-06/25569-6-play-button-transparent.png"
                width="70px"
                alt=""
            /></span>

            <div
              class="
                info_card
                d-flex
                justify-content-center
                align-items-center
                flex-column
              "
            >
              <h4 class="white">{{ serie.release_date }}</h4>
              <div class="direction">
                <h4 class="white">Direction:</h4>

                <img
                  class="img-fluid flag_img"
                  :src="
                    'https://flagcdn.com/32x24/' + printf_flag(index) + '.png'
                  "
                  alt=""
                />
              </div>

              <h3 class="star_gold">
                <font-awesome-icon
                  v-for="paux in VoteStars(index)"
                  :key="paux"
                  icon="fa-star"
                />display: Flex;
    justify-content: ;
￼    /* align-items: center; */
￼    margin: 100px;
}
              </h3>
            </div>
          </div>
          <h2 class="white text-center">{{ serie.title }}</h2>
        </div>
      </div>
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
      email_input: "",
      password: "",

      //salvataggio dei film da mostrare all'utente.
      film: [],

      //salvataggio delle serie tv da mostrare all'utente
      series: [],
      value1: false,
      bol_falso :false,
      card:false,
      value2: true,
      movie:[
        {
          
          img:"/assets/img/film.jpg",
          title: "Altered Carbon"
        },

        {
          img:"./assets/img/film1.jpg",
          title: "The Protector"
        },

        {
          img:"./assets/img/film2.jpg",
          title: "The Woman In The Window"
        },

        {
          img:"./assets/img/film3.jpg",
          title: "Enola Holmes"
        },

        {
          img:"./assets/img/film4.jpg",
          title: "Granchio Nero"
        },

        {
          img:"./assets/img/film5.jpg",
          title: "6 Underground"
        },

        {
          img:"./assets/img/film6.jpg",
          title: "I am all girls"
        },

        {
          img:"./assets/img/film7.jpg",
          title: "Insieme per forza"
        },
        
        
        
      ],
      serie:[
        {
          img:"./assets/img/serie1.jpg",
          title:"La Casa Di Carta"
        },

        {
          img:"./assets/img/serie2.jpg",
          title:"La Casa Di Carta"
        },
        {
          img:"./assets/img/serie3.jpg",
          title:"La Casa Di Carta"
        },
        {
          img:"./assets/img/serie4.jpg",
          title:"La Casa Di Carta"
        },
        {
          img:"./assets/img/serie5.jpg",
          title:"La Casa Di Carta"
        },
        {
          img:"./assets/img/serie6.jpg",
          title:"La Casa Di Carta"
        },
        {
          img:"./assets/img/serie7.jpg",
          title:"La Casa Di Carta"
        },
        {
          img:"./assets/img/serie8.jpg",
          title:"La Casa Di Carta"
        },
      ]
    };
  },

  methods: {
    //prima milestone
    /**
     * questa funzione ci permette di richiamare in maniera dinamica i dati
     * forniti dall'API. Tramite il search (v-model) la funzione effettua una
     * chiamata dinamica e restituisce all'utente il film che
     * ha inserito all'interno dell'input search. E' stata anche implementata
     * l'opportunità di utilizzare il btn tramite il comando enter da tastiera.
     */
    findFilm() {
      // chiamata dinamica per i film tramite il search. nNella chiamata aggiungiamo il query : searchbox così da renderla dinamica
      const requiredfilm = axios.get(
        `https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&query=${this.searchbox}`
      );
      console.log(requiredfilm);
      // chiamata dinamica per le serie tv tramite il search
      const requireserie = axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=2d4086a1da1ceb84b071c2d1750dc6c4&language=it-IT&page=1&query=${this.searchbox}&include_adult=false`
      );
      axios.all([requiredfilm, requireserie]).then(
        axios.spread((...response) => {
          this.film = [...response[0].data.results];
          console.log(this.film);
          this.series = [...response[0].data.results];
          console.log(this.series);
          //l'input del v-model viene impostato a " " dopo che l'utente ha inserito qualcosa
          this.searchbox = "";
          this.card=false;
        })
      );
    },
    /**
     * Questa funzione è utile se l'API non ha nessuna immagine da restituire.
     * Infatti se quest'ultima non presenta l'immagine questa funziona la rimpiazza
     * come una immagine di defoult così da evitare immagini rotte.
     * @param {*} event
     */
    // se l'immage è mancante l'app la sostituisce con un'altra immagine
    image_fail(event) {
      event.target.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS7BNTLBsW16U2Of9JRgmOiCybiv6LY2f6g&usqp=CAU";
      console.log("evocato");
    },
    Login_system() {
      console.log("ciao");
      let input = this.email_input;
      let pass = this.password;
      console.log(input);

      const mail = [
        "saro.garufi1@gmail.com",
        "giovanni@gmail.com",
        "marco@gmail.com",
        "fabio1234@gmail.com",
        "marta@gmail.com",
        "martina@hotmail.com",
      ];
      const password = ["rosario95", "giovanni", "marco", "fabio"];
      console.log(mail);
      console.log(password);
      let booleaner = false;
      let bool = false;
      for (let i = 0; i < mail.length; i++) {
        console.log(mail[i]);
        if (input == mail[i]) {
          //console.log("funziona");
          bool = true;
        }
        //return input;
      }

      for (let i = 0; i < password.length; i++) {
        console.log(password[i]);
        if (pass == password[i]) {
          //console.log("funziona");
          booleaner = true;
        }
        //return input;
      }

      if (booleaner == true) {
        console.log("funziona passowrddd!!");
      }

      if (bool == true) {
        console.log("email funziona!!");
      }

      if(booleaner != true || bool != true){
        this.bol_falso = this.value2;
        this.email_input = "";
        this.password = "";
        return 0;
      
      }
      this.email_input = "";
      this.password = "";
      this.value1 = true;
      this.value2 = false;
      this.card = true;
      

      // this.Autorized();
    },
    //seconda milestone
    /**
     * questa funzione accetta un parametro in ingresso che è l'indice.
     * Questa funzione ci permette di stabilire, in base alla sigla e
     * facendo riferimento ad una API opportuna, la bandiera e la mostra a schermo
     * in forma di immagine
     *
     * @param {*} index
     */
    printf_flag(index) {
      let flag = this.film[index].original_language;
      if (flag === "en") {
        flag = "gb";
        console.log(flag);
      } else if (flag === "ja") {
        flag = "jp";
        console.log(flag);
      } else if (flag === "el") {
        flag = "gr";
        console.log(flag);
      }
      return flag;
    },
    /**
     * Questa funzione ci permette, tramite un parametro in ingresso, di:
     * 1) arrontondare per essere un numero, ovvero il voto, tramite l'apposito metodo math.ceil
     * 2)mostrare le stelle a schermo grazie al v-for nell'apposita lista
     * @param {*} index
     */
    VoteStars(index) {
      const vote_views = this.film[index].vote_average;
      const voto_round = Math.ceil(vote_views / 2);
      return voto_round;
      // return Math.ceil(vote_views / 2 );
    },
  },
};
</script>
     

//stile documentotransform: scale(1.2);

 <style lang="scss" scoped>
@import "~/node_modules/bootstrap/scss/bootstrap.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,100;1,200;1,300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// #app{
//   font-family:Arial, Helvetica, sans-serif;
//   display:flex;
//   justify-content: center;
//   align-items: center;
//   background-image: url("./assets/img/jumbotron_netflix.jpg");
//   background-blend-mode: overlay;
//   font-weight: bold;
//   margin: -8px;
//   background-color: rgb(51, 51, 51);
//   min-height: 100vh;
// }


    



.alert_login{
  font-size: 15px;
  color:white;
  padding:8px;
  // width: 304px;
  // height: 56px;
  // background-color:rgb(232, 124, 3) ;
}

.access_neg{
  width: 268px;
  height: 100px;
  background-color:rgb(232, 124, 3) ;
  border-radius: 10px;
}
.hex_container {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/img/jumbotron_netflix.jpg");
  background-blend-mode: overlay;
  font-weight: bold;
  margin: -8px;
  background-color: rgb(51, 51, 51);
  min-height: 100vh;
}

.banner_access > h1 {
  font-size: 55px;
}

.init {
  font-size: 28px;
}

.init {
  font-weight: bold;
}

.flag_img {
  width: 25px;
  border-radius: 100%;
}

.login {
  margin: 15px;
  border-bottom:5px solid rgb(232, 124, 3);
}

// .container-fluid{
//   width: 100vw;
//   height: 89.5vh;

//   display:flex;
//   flex-wrap: wrap;
//   flex-direction: column;
//   align-items: center;

// }
.hero_container {
  background-color: rgb(43, 42, 42);
  // min-height: 80vh;
  // margin-top:100px;
  margin-top: 20px;
  width: 1909px;
}
.mx{
  margin:10px;
}
.gx{
  margin:10px;
  display:flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
}

.get_started {
  width: 90px;
  height: 58px;
  margin-left:65px;
}

.form_access_to_app > form {
  display: Flex;
  
  align-items: center;
}

header {
  padding: 2rem;
  height: 10vh;
  display: Flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
}
.btn {
  cursor: pointer;
  transition: 1s;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  background: red;
}

.btn:hover {
  background-color: red;
  color: white;
  position: relative;
}
#search {
  padding: 8px 12px;
  margin-right: 10px;
  border-radius: 10px;
  border: none;
}

h3 {
  color: red;
}
.votazione {
  color: black;
}

.fa-star {
  color: yellow;
}

// sezione tendina

.img_thumb {
  width: 320px;
  height: 425px;

  border-radius: 10px;
  cursor: pointer;
}

.card_thumb {
  position: relative;
}

.play > img {
  position: absolute;
  left: 35%;
  top: 45%;
  display: none;
  cursor: pointer;
}

.card_thumb:hover .play > img {
  display: block;
}

.card_thumb:hover .info_card {
  visibility: visible;
}

.card_thumb:hover .img_thumb {
  filter: brightness(0.5);
}

.movies_card {
  padding-top: 50px;
}
.white {
  color: white;
}

.direction {
  width: 100%;
  display: Flex;
  align-items: center;
  justify-content: space-evenly;
}

.info_card {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  visibility: hidden;
}

.login_input{
  margin-left: -11.2px;
}
</style>








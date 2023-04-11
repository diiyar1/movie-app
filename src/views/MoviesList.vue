<template>
    <Home />
     <div class="  grid grid-cols-3 gap-4"> 
                  
                  <div v-for="film in filterMovies" :key="film.id"
                    class="bg-slate-300 dark:bg-slate-600 h-48 w-56 m-4 rounded-xl relative">
                    <router-link :to="'/movie/'+ film.id">
                       <div class="relative object-cover">
                           <img class="h-32 w-full rounded-t-xl" 
                           src="./main_imgs/thewWtcher.webp">
                       </div>   
                       <div class=" text-center m-4 z-10">{{ film.Title }}</div>
                       <div class=" film-type capitalize">{{ film.Type }}</div>
                     </router-link>

                    </div> 

                 
        </div>
</template>

<script>
// import {ref, computed } from "vue"
import getMovies from '../composables/getMovies'

    export default {

        name:'MoviesList',

        setup(){

          const { search, film, filterMovies, error, load} = getMovies()

          load()

         return {search, film, filterMovies, error, load}

  }
    }
</script>


<template>
    <div class="float-right p-3 ">  <DarkMode /> </div>

    <div class="p-10 space-y-10">
      <!-- show if there is error -->
      <div v-if="error">{{ error }}</div>
      <!-- Search bar -->
        <div class="relative ">
            <svg class="feather feather-search absolute m-4 z-10 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input v-model="search" class="input-search dark:bg-slate-800 dark:text-slate-300 placeholder:px-1 placeholder:text-slate-400" type="text" placeholder="Search..."/>
            <svg class="feather feather-mic absolute m-4 left-80 top-0 z-10 text-slate-400 cursor-pointer hover:animate-pulse " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
        </div>

        <div class="  grid grid-cols-4 gap-4" :film="film">
                  
                  <div v-for="film in filterMovies" :key="film.id"
                   class="bg-slate-300 dark:bg-slate-600 h-48 w-56 m-4 rounded-xl relative">
                   <router-link :to="'/movie/'+ film.id">
                      <div class="relative object-cover">
                          <img class="max-h-full max-w-full rounded-t-xl" src="./main_imgs/theWitcher.jpg">
                      </div>   
                      <div class="text-center m-4">{{ film.Title }}</div>
                      <div class=" film-type capitalize">{{ film.Type }}</div>
                    </router-link>

                   </div> 

                
      </div>
      
    </div>
</template>

<script>

import DarkMode from '../views/DarkMode.vue';
import MoviesList from '../views/MoviesList.vue';
import getMovies from '../composables/getMovies'

export default {
  components:{MoviesList, DarkMode},
    

      setup(){

        const { search, film, filterMovies, error, load} = getMovies()

        load()

        return {search, film, filterMovies, error, load}


  

  
}
}
</script>


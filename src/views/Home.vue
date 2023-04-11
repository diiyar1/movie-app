<template>

<div class="Home " v-if="films">
  

  <div class="float-right p-3 ">  <DarkMode /> </div>
 
<!-- the whole page -->
<div class="flex   lg:divide-x-2  ">
        <!-- first column  -->
        <div class="space-y-20 p-14 ">

          <router-link to="/">
            <div class="flex">
            <h1 class=" your-movie dark:text-slate-100  dark:hover:text-slate-400" title="YourMovie HomePage ">DramaticSky<span class="text-red-500 text-3xl">.</span></h1>
          </div>
          </router-link>

            <div class=" space-y-10 ">
            <!-- Menue section -->
            <p class=" main-section-name  border-b-2 dark:border-pink-600 w-fit ">Menue </p>
            <div class="grid grid-rows-3 gap-10  ">

              <div class="section-order   ">
                <!-- <svg class="feather feather-eye  section p-1 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> -->
               <!-- <img class="section text-slate-500" width="20px" src="./main_imgs/eye.svg" alt=""> -->
                <p class="section dark:hover:bg-pink-600 h-10 w-fit rounded-xl dark:hover:text-white px-5 py-2  dark:text-slate-400  ">Watching</p>
                </div>
                <div class="section-order  ">
                  <!-- <svg class="feather feather-clock  section p-1 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>           -->
                  <p class="section dark:hover:bg-pink-600 h-10 w-fit rounded-xl dark:hover:text-white px-5 py-2  dark:text-slate-400 ">Watch later</p>

                </div>
                <div class="section-order  ">
                  <!-- <svg class="feather feather-heart  section p-1 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> -->
                  <p class="section dark:hover:bg-pink-600 h-10 w-fit rounded-xl dark:hover:text-white px-5 py-2  dark:text-slate-400 ">Favourite</p>
                </div>
             
              
            </div>
            <!-- General section -->
            <p class=" main-section-name  border-b-2 dark:border-pink-600 w-fit ">General</p>
            <div class="grid grid-rows-2 gap-10  ">

              <div class="section-order">
                <!-- <svg class="feather feather-settings  section p-1 dark:text-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> -->
                <router-link to="/darkMode">
                  <p class="section dark:hover:bg-pink-600 h-10 w-fit rounded-xl dark:hover:text-white px-5 py-2 dark:text-slate-400 ">Settings</p>
                </router-link>
                </div>

                <router-link to="/LogIn">
                <div class="section-order">
                  <!-- <svg class="feather feather-log-in  section p-1 dark:text-slate-400 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>             -->
                  <p class="section dark:hover:bg-pink-600 h-10 w-fit rounded-xl dark:hover:text-white px-5 py-2 dark:text-slate-400 ">Log in</p>
                </div>
              </router-link>
             </div>
             
            </div>


            <!-- Support us card -->
            <div class="py-80 ">
            <div class="grid gap-2 support-card  dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-700">
                <div class="text-center ">
                    <h1 class="font-bold text-lg">To Keep The Good Work</h1>
                    <div class="dark:text-slate-400">
                      <p>Weak $10</p>
                      <p>Month $40</p>
                      <p>Year $365</p>
                    </div>
                </div>
               <div class="animate-bounce">
                <button class="btn-support dark:bg-slate-700">Support Us</button>
               </div>

            </div>
          </div>
            
        </div>
        <!-- end of first column -->

       
        <!-- second coloumn -->

        <div class=" space-y-12  p-14 invisible lg:visible">
          <div class="flex justify-between ">
            
            <form class=" " >

                <div class="relative">
                <svg class="feather feather-search absolute m-4 z-10 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <!-- v-on:click="getMovies" v-model="search" -->
                <router-link to="/search" >
                  <input  class="input-search dark:bg-slate-800 dark:text-slate-300 placeholder:px-1 placeholder:text-slate-400" type="text" placeholder="Search..."/>
                 </router-link>
                <svg class="feather feather-mic absolute m-4 left-80 top-0 z-10 text-slate-400 cursor-pointer hover:animate-pulse " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </div>
               

             </form>
             
             <div class="flex space-x-2 ">
                <div class="user-icon dark:border-pink-600" title="Account">
                    <svg class="feather feather-user text-cyan-900 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <p  class="capitalize py-4 text-slate-800 dark:text-slate-200">{{ name }}</p>
             </div>
             
            </div>
            <!-- Home cover images,names -->
            <div class="relative ">
                    
                    <div class=" relative object-cover ">
                    <!-- <img class="slide-imgs transform -scale-x-100"   src="./main_imgs/theWitcher.jpg" alt="The Witcher Poster"> -->
                    <Carousel v-slot="{currentSlide}">
                      <Slide class="slide " v-for="(slide, index) in imgSlide" :key="index">
                        <div v-show="currentSlide === index+1">
                        <img class="slide-imgs transform -scale-x-100" :src="require(`../imge/${slide}.jpg`)" alt="">
                      </div>
                      </Slide>
                    </Carousel>
                  </div>
                    <div class="names-rates">
                      <div class="grid gap-2">
                        <!-- Movie name -->
                        <Carousel v-slot="{currentSlide}">
                        <div  class="movie-name titles" v-for="(title, index) in nameSlide" :key="index">
                        <div v-show="currentSlide === index+1">
                       {{ title }}
                      </div>
                    
                        </div>
                      </Carousel >
                        <!-- Movie generes -->
                        <div class="movie-rate">
                          IMDB\ 9.10
                        </div>
                      </div>
                    </div>
                    <!-- Buttons -->
                    <div class="btns">
                        <div class="flex space-x-10">
                            <!-- Watch button -->
                            <router-link to="/movie/1">
                            <button class="btn-watch dark:bg-pink-600 dark:shadow-2xl dark:shadow-pink-800">
                                Watch
                            </button>
                            </router-link>
                        <!-- Add to favourite button -->
                            <button @click="  favouriteToggle(films)"
                             class="btn-fav" title="Add to favourite">
                                <svg :class="{'fill-red-600 text-slate-900':films.fav}"
                                 class="feather feather-heart text-white cursor-pointer " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                    
                <div class=" bg-slate-200 dark:bg-slate-600 p-3 h-fit w-fit rounded-r-xl">
                  <h class="text-slate-600 dark:text-slate-100 text-3xl">Watch Best</h>
                </div>
                <!-- display movies here -->
                <div class="">
                     <moviesList  />
                    </div>
        </div>
        <!-- end of second column -->
        
    </div>
    
           
</div>
 


</template>

<script>
import DarkMode from '../views/DarkMode.vue';
import MoviesList from '../views/MoviesList.vue';
import LogIn from '../views/LogIn.vue'

import Carousel from '../slideImages/Carousel.vue'
import Slide from '../slideImages/Slide.vue'

// import Textra from 'vue-textra'
export default {
  props:['id'],
  name:'Home',
  components:{ MoviesList,DarkMode,LogIn,Carousel, Slide},
   
  data(){
        return{
            name:'',
            // fav:false,
            films:null,
          
        }

 },
 mounted(){
  
    fetch('http://localhost:3000/movieZfilm')
    .then(res => res.json())
    .then(data => this.films =data)
    .catch(err => console.log(err.message))

   
  
  if(localStorage.name){
    this.name=localStorage.name
  }
 },
 watch:{
name(newName){
  localStorage.name=newName
}

 },

 methods:{
   
    favouriteToggle(films){
        films.fav = !films.fav
    },
   
   
},
setup(){
  const imgSlide =["thewitcher","interstellar","wick-2","avatar"];
  const nameSlide =["The Witcher", "Interstellar","John Wick","Avatar"]
  return {imgSlide, nameSlide}
}
}

</script>

<style>

</style>
<template>
    <div class="float-right p-3 ">  <DarkMode /> </div>
    <div class="MovieDetail" v-if="films">

    <!-- <div>movie id {{  $route.params.id }}</div> -->

    
<!-- the whole page -->

        <div class="flex space-x-10 p-10 ">
            <!-- first column -->
            <div class="grid gap-5">
                <!-- movie poster -->
                <div class="">
                    <!-- border-4 border-slate-600 p-1 -->
                    <img class=" h-auto w-auto rounded-tr-3xl rounded-br-3xl rounded-bl-3xl " 
                    src="./main_imgs/john.jpg">
                </div>
                <!-- pick -->
              

                <div class=" pick-border " >
                    <button  @click=" watchLaterToggle(films), here(films)" title="Add to watch later" class="pick ">
                       <svg :class="{'fill-yellow-400 text-slate-900':films.watchLater}"
                        class="clock section-detail  ml-2 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>          
                    </button>
                    <button @click="  favouriteToggle(films), here(films) " title="Add to favourite" class="pick  ">
                      <svg :class="{'fill-red-600 text-slate-900':films.fav}"
                      class="heart  section-detail  ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button @click=" dislikedToggle(films) , here(films)" title="Dislike" class="dislike pick  ">
                      <svg :class="{'fill-green-600 text-slate-900':films.disliked}"
                       class="thumbs-down section-detail   ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                   </button> 
                </div>

            </div>
            <!-- end of first column -->

            <!-- second column -->
            <div class="space-y-4 ">
                <!-- String Details -->
                
                 <h1 class="film-title">{{ films.Title }}</h1>
                 <div class="flex space-x-3">
                    <p>{{ films.Year }}</p>
                    <p>{{ films.Runtime }}</p>
                    <p>{{ films.Rated }}</p>
                 </div>
                 <div class="flex space-x-2">
                    <svg class="feather feather-star fill-yellow-300 dark:text-slate-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <p> <span class="imdb-rating dark:text-slate-800">IMdb</span> {{ films.imdbRating }}/10</p>
                </div>
                <!-- movie generes -->
                <p>{{ films.Genre }}</p>
                <!-- movie plot -->
                <div class="space-y-3">
                    <h1 class="plot dark:text-slate-900">P l o t </h1>
                     <p class="text-left "> {{ films.Plot }}</p>
               </div>
               <!-- overview on director, cast -->
               <div class="space-y-4 ">
                    <div class="flex space-x-2">
                        <h1>Director:</h1>
                        <p>{{ films.Director }}</p>
                    </div>
                    
                    <div class="flex space-x-2">
                       <h1>Actors:</h1>
                         <p>{{ films.Actors }}</p>
                    </div>
                    
                </div>

                <div class="felx space-x-4 py-6 border-t-2 border-slate-600 w-fit">
                    <button class="tr-watch-btns">Watch Now</button>
                    <button class="tr-watch-btns">Trailer</button>
                    
                </div>
            </div>
            <!-- end of second column -->

            <!-- third column -->
            <div class="float-right">
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
              <!-- end of third column -->
        </div>
    

</div>
<!-- if-else -->

      <div class="text-center p-80 text-5xl" v-else>Loadeing
        <div class="text-center p-4 text-5xl" >Please Wait</div>
    </div>
      
                  
</template>

<script>
import DarkMode from '../views/DarkMode.vue';
export default {
   
    props:['id'],
    components:{ DarkMode},

        data(){
        return{
          
            films:null,
          
        }
    },
   
  mounted(){
    fetch('http://localhost:3000/movieZfilm/'+this.id)
    .then(res => res.json())
    .then(data => this.films =data)
    .catch(err => console.log(err.message))

   
  },
 
  methods:{
    
   async dislikedToggle(films){
      films.disliked = !films.disliked
      
    },
    async favouriteToggle(films){
        films.fav = !films.fav
    },
    async watchLaterToggle(films){
        films.watchLater = !films.watchLater 
    },

    here(films){
        
       
       
        if( films.disliked == true)
            {  films.fav = false 
               films.watchLater = false
            } 
       
      
        if(films.fav == true || films.watchLater == true )
            { films.disliked =false }

        
      
    },
   
    
                          
async fetchMovies()
{
     const res =await fetch('http://localhost:3000/movieZfilm')
     const data = await res.json()

     return data
}  
   
  },
  

  async created(){
    
    this.movieZfilm=await this.fetchMovies()    

    if( localStorage.movieZfilm){
    this.movieZfilm=JSON.parse(localStorage.movieZfilm)
  }
  },
watch:{
    movieZfilm:{
    handler(newDislike){
        
   localStorage.movieZfilm =JSON.stringify(newDislike)
    },
    deep:true
}
},

  
 }
</script>

<style >
    
</style>
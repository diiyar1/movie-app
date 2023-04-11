<template >
  <header>
   <router-link to="/">
     <!-- <div class="bg-slate-400 p-5">
     <h1  class=" text-center text-3xl"><span>Vue</span>Movies</h1>
   </div> -->
 
   </router-link>
  </header>
  <main>
   <router-view/>
  </main>

  
 </template>

 <script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
 
 <style>
html.dark{
  color-scheme: dark;
}

     @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Inconsolata:wght@300&family=Oswald&family=Square+Peg&display=swap');
    
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Inconsolata:wght@300&family=Oswald&family=Square+Peg&display=swap');

 body{
   background-color: rgb(243, 245, 249);
   @apply dark:bg-gray-900 ;
   font-family: 'Bangers', cursive;
font-family: 'Inconsolata', monospace;
font-family: 'Oswald', sans-serif;
font-family: 'Square Peg', cursive;
font-family: 'Varela Round', sans-serif;
 }
 
 </style>
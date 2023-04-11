<template class="">
  <div class="float-right p-3 ">  <DarkMode /> </div>
    <!-- Log in form -->
    <div class="flex justify-center p-20">
    <form class=" flex space-x-2 border-4 border-slate-500 w-fit  ">
        <div>
            <img class="h-96" src="./main_imgs/sky-background.avif" alt="">
           </div>
        <div class=" p-5">
            <div class="grid gap-16 ">
               
                <input type="text" v-model="name" class="w-80 py-3 outline-none border-b-2 border-slate-500 bg-transparent text-slate-800 dark:text-slate-200" placeholder="Name"/>
           
               
                <input type="email" v-model="email" class="w-80 py-3 outline-none border-b-2 border-slate-500 bg-transparent text-slate-800 dark:text-slate-200" placeholder="Email"/>
            
                <input type="password" v-model="password" class="w-80 py-3 outline-none border-b-2 border-slate-500 bg-transparent text-slate-800 dark:text-slate-200" placeholder="Password"/>
         <p>{{ password }}</p>
              </div>
                
           
        </div>
        
    </form>
        
</div>


</template>

<script>
import DarkMode from '../views/DarkMode.vue';

    export default {
        name:'LogIn',
        components:{DarkMode},
        data(){
        return{
            name:'',
            email:'',
            
          
        }

 },
 mounted(){
  if(localStorage.name ){
    this.name=localStorage.name
    
  }
  if( localStorage.email){
    this.email=localStorage.email
  }
  if( localStorage.password){
    this.password=localStorage.password
  }
 },
 watch:{
name(newName){
  localStorage.name=newName
},
email(newEmail){
  localStorage.email=newEmail
},
password(newPassword){
  localStorage.password=newPassword
},

 },

    }
</script>


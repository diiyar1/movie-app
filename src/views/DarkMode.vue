<template>
    <div>
     <!-- <p>isDark:{{ isDark }}</p> -->
     <button @click="toggleDark()">
       <svg class="feather feather-moon dark:fill-yellow-300 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>   
    </button>
    </div>
</template>

<script setup>
  
  import {useDark, useToggle} from '@vueuse/core'


  const isDark = useDark()
  const toggleDark = useToggle(isDark)
 
</script>
<script>
    export default {
   
   name:'DarkMode'

};

</script>

<style >

</style>
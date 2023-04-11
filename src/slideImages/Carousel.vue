<template>
    <div>
          <slot :currentSlide="currentSlide" />

          <!-- Pagination -->
          <!-- <div class="pagi">
            <span 
             class="sp" v-for="(slide,index) in getSlideCount" :key="index" 
            :class="{'bg-red-600 dark:bg-pink-600':index +1 === currentSlide}">
                
            </span>
          </div> -->
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
    export default {
        setup() {
            const currentSlide =ref(1)
            const getSlideCount=ref(null)
            const autoPlayEn =ref(true)
            const timeOutDuration =ref(5000)

            const nextSlide =()=>{
                  if(currentSlide.value === getSlideCount.value){
                    currentSlide.value =1 
                    return
                  }
                  currentSlide.value += 1

            }
            const prevSlide =()=>{
                  if( currentSlide.value ===1){
                    currentSlide.value =1
                    return
                  }
                  currentSlide.value -= 1
            }
            const dotSlide= (index)=>{
                currentSlide.value  =index + 1
            }
            // auto play
            const autoPlay=()=>{
                setInterval(()=>{
                    nextSlide()
                },timeOutDuration.value)
            }
            if(autoPlayEn.value){
                autoPlay()
            }

            onMounted(()=>{
                getSlideCount.value =document.querySelectorAll(".slide").length
            })


            return {currentSlide, nextSlide, prevSlide,getSlideCount,dotSlide}
        }
    }
</script>
<style >
.pagi{
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
  

}
.sp{
   
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    
}

</style>

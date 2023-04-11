<template>
    <div >
        <transition >
          <slot />
        </transition>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.slide-enter-active,
.slide-leave-active{
    transition: opacity 0.7s ease-in-out;
}
.slide-enter-from,
.slide-leave-to{
    opacity: 0;

}
.slide-enter-to,
.slide-leave-active{
    opacity: 1;
}
</style>
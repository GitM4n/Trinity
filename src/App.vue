<template>

  <div class="wrapper">
    <Transition>
      <TLoading v-if="loading" />
    </Transition>
    <TSvgsprites />
    <THeader />
    <main class="main">
      <router-view></router-view>
    </main>
    <TFooter />
  </div>
 
</template>

<script setup>

import { ref } from 'vue';
import TSvgsprites from './components/UI/TSvgsprites.vue';
import THeader from './layouts/THeader.vue'
import TFooter from './layouts/TFooter.vue';
import TLoading from './layouts/TLoading.vue';

const loading = ref(true)

// window.addEventListener('load', ()=>{
//   loading.value = false
// })

setTimeout(()=>{
  loading.value = false
}, 10000)


</script>

<style>




@import url('../public/fonts/Stolz/fonts.css');

html{
  font-size: 10px;

}


body.lock{
  overflow: hidden;
}

body:has(.loading){
  overflow:hidden ;
}



.wrapper{
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 2000px;
  background-color: #161619;
  overflow: hidden;
  z-index: 1;
}

.wrapper::before{
  content: '';
  background:url('./assets/MobileBG.jpg') no-repeat;
  visibility: hidden;
  opacity: 0;
}


.container{
  max-width: 1860px;
  margin: 0 auto;
  padding: 0 30px;
}

.main{
  margin-top: 260px;
}

.underline{
  position:relative;
  display: inline;
  font-size:76px;
  z-index: 1;

   
 }

 
 .underline::before,
 .underline::after{
  transition: all .4s ease;
   position:absolute;
   content:'';
   background-color:#33B7BC;
   width:0%;
   height:4px;
   bottom:2px;
   z-index: -1;
   left:0;
   transform:skewX(-10deg)
 }

 .underline::after{
  transition: all .2s ease;
  left: 2px;
  transform:skewX(-40deg)
}


 .underline:hover::before,
 .underline:hover::after{
  transition: all .2s linear;
      width: 80%;
 }
 .underline:hover::after{

    width: 100%;
 }
 


 .stolz-title{
  font-family: Stolzl;
  font-size: 10rem;
  color: white;
  font-weight: 700;
 }
 .stolz{
  font-family: Stolzl;
  font-size: 1.6rem;
  color: white;
  font-weight: 500;
 }



 @media (max-width:1860px) {
  html{
    font-size: calc(7px + 2 * (100vw / 1860));
  }
}

@media (max-width:769px) {
  .main{
    margin-top: 140px;
  }
}
















/*Transition Loading Component */


/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.v-enter-active {
  transition: all 0.8s ease-out;
}

.v-leave-active {
  transition: all 0.8s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>

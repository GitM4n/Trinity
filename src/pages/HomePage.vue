<template>
    <section class="start">
        <div class="start__inner">
            <h2 class="start__title stolz-title">Dubai</h2>
            <p class="start__text stolz">luxury car rental</p>
        </div>
      <TSocial class="start__socials" />
    </section>
    <TPopular />
    <TCarstabs class='home' :tabsTitles="tabsTitles" :data="autos" :all="false"/>
    <TAbout />
    <TReviews />
    <TAdvantages />
    <TAsk />
    <TDiscountSection />
   
    
</template>

<script setup>
import TPopular from "@/components/TPopular.vue";
import TCarstabs from "@/components/TCarstabs.vue"
import TAbout from "@/components/TAbout.vue";
import TReviews from "@/components/TReviews.vue";
import TAdvantages from "@/components/TAdvantages.vue";
import TAsk from "@/components/TAsk.vue";
import TDiscountSection from "@/components/TDiscountSection.vue";

import {ref} from 'vue'

import {useGlobalStore} from '../store/store'

const global = useGlobalStore()

const tabsTitles = ['Special Offer', 'New Car', 'Most Popular', 'Daily']
const autos = ref(global.autos.slice(0, 4))






</script>

<style scoped>
.start{
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -260px;
}

.start::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: url(../assets/Background.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
}
.start__title{
    font-size: 12rem;
}

.start__text{
    font-size: 3.2rem;
    text-transform: uppercase;
    font-weight: 400;
}

.start__inner{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    justify-content: center;
    align-items: center;
}

.start__socials{
    position: absolute;
    bottom: 10px;
    right: 10px;
}







@media (max-width:768px) {
    .start{
        margin-top: -140px;
    }
    .start__title{
        font-size: 8.5rem;
    }
    .start__text{
        font-size: 1.6rem;
    }
}


</style>
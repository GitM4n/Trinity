<template>
    <section class="popular">
        <div class="container">
            <div class="popular__inner">
                <div class="car-view">
                    <div class="car-view__auto" v-for="auto, i of global.autos.slice(0, 6)" :key="i" :class="{active: i === getItem}">
                        <div class="car-view__img">
                            <img :src="require('../assets/' + auto.img)" :alt="auto.model">
                        </div>
                        <div class="car-view__info">
                            <h3 class="car-view__name stolz">Rent {{ auto.brand }} <br>{{ auto.model }}</h3>
                            <div class="car-view__price stolz">
                                <p class="top_text">Rent is from aed</p>
                                <p class="price">{{auto.price}}</p>
                                <p class="bottom_text">per day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="most-popular">
                    <h3 class="most-popular__title stolz-title">Most popular</h3>
                    <div class="search__wrapper">
                        <TInput class="car-search" :is-search="true" :placeholder="'Car search'" :id="'car-search'" v-model="inputValue"  />
                        <div class="search__content">
                            <ul class="search__results" v-if="inputValue.length > 0">
                                <li class="search__result" v-for="result, i of results" :key="i">
                                    <p  class="stolz">{{result.brand}}</p>
                                    
                                </li>
                                <p class="stolz" v-if="results.length===0">
                                    Not Found
                                </p>
                            </ul>
                            
                        </div>  
                    </div>
                  

                    <div class="most-popular__car-slider">
                      <TSlider @send-range="(n) => getItem = n"/>
                    </div>
                    <t-button class="most-popular__button">view all</t-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useGlobalStore} from '../store/store'
import TSlider from "@/components/UI/TSlider.vue";
const inputValue = ref('')

const getItem = ref(0)

const results = computed(() =>{
    return global.autos.slice(0, 6).filter(result => result.brand.toLowerCase().includes(inputValue.value.toLowerCase()))
})


const global = useGlobalStore()
</script>

<style scoped>
.popular{
    padding-top: 160px;
    padding-bottom: 50px;
}

.popular__inner{
    display: flex;
    gap: 5px;
  
}

.car-view{
    position: relative;
    flex: 0 1 65%;
    left: -35px;
  
  
}

.car-view__auto{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    overflow: hidden;
   
}

.car-view__auto.active{
    display: block;
}


.car-view__name{
    font-size: 4.6rem;
}


.car-view__info{
    position: absolute;
    width: 100%;
    bottom: 40px;
    padding-right: 60px;
    display: flex;
    justify-content: space-between;
    left: 35px;
    z-index: 3;
    
}

.car-view__img{
    position: relative;
    height: 100%;
    
}

.car-view__img::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0px -100px 100px -40px rgba(22,21,22,1) inset;
    z-index: 2;
}





.car-view__img img{
    position: relative;
    z-index: 1;
    width: 150%;
    height: 100%;
    right: 30%;

 

}

.car-view__auto:nth-child(4) img {
    width: 100%;
    height: 100%;
    right: 0;
}

.price{
    font-size: 5rem;
}

.most-popular{
    flex: 0 1 40%;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}

.most-popular__title{
    font-size: 7rem;
}

.search__content{
    position: relative;
}

.search__results{
    position: absolute;
    top: 30px;
    width: 100%;
    gap: 10px;
    border-radius: 10px;
    border: 2px solid #2C2C2C;
    background:  rgba(32, 32, 32, 0.80);
    z-index: 99;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   

}


.search__result{
    cursor: pointer;
}

.search__result:hover p{
    color: #33B7BC;
}
.most-popular__button{
    max-width: 215px;
    margin-left: 116px;
    padding: 20px;
}



@media (max-width:1499px) {
   .most-popular{
    gap: 30px;
   }
   .most-popular__title{
    font-size: 6rem;
   }
}


@media (max-width:1299px) {
    .popular{
        display: none;
    }
}




</style>
<template>
    <div class="slider" @wheel.prevent="event => event.deltaY > 0 ? nextSlide() : prevSlide()">
        <div class="slider__navigation">
            <div class="prev-slide" @click="prevSlide">
                <t-slidebutton></t-slidebutton>      
            </div>
            <div class="range">
                <div class="range__inner">
                    <input class="range-slider" 
                        type="range" 
                        name="range-slider" 
                        id="range-slider" 
                        step="1" 
                        min="0" 
                        v-model.number="rangeValue"
                        :max="global.autos.slice(0, 6).length - 1"
                        @input="rangeSliders"
                        >
                </div> 
            </div>
            <div class="next-slide" @click="nextSlide">
                <t-slidebutton></t-slidebutton>                 
            </div>
        </div>
        <div class="slider__container">
            <ul class="slider__items" :style="{transform:'translateY(calc(220px - (110px * ' + rangeValue + ')))'}">
                <li ref="rangeItem" 
                    class="slider__item" 
                    v-for="item, i in global.autos.slice(0, 6)" 
                    :key="i"
                    :class="{active: i === rangeValue}">
                        <p class="stolz">{{item.brand}}</p>
                        <p class="stolz">{{item.model}}</p>
                </li>
            </ul>
          
        </div>
        
    </div>
</template>






<script setup>

import { ref,  onMounted, defineEmits, watch } from 'vue';
import {useGlobalStore} from '@/store/store'

const emit = defineEmits(['sendRange', 'update:modelValue'])

const global = useGlobalStore()
const rangeValue = ref(0)
const rangeItem = ref(null)



function prevSlide(){
    rangeValue.value < 1 ? rangeValue.value = 0 : rangeValue.value--
    rangeSliders()
   
}
function nextSlide(){
    rangeValue.value > global.autos.slice(0, 6).length -  2 ? rangeValue.value = global.autos.slice(0, 6).length -  1 : rangeValue.value++
    rangeSliders()
}





function rangeSliders() {
    const prevPrevActive = rangeItem.value[rangeValue.value-2]
    const prevActive = rangeItem.value[rangeValue.value-1]
    const nextActive = rangeItem.value[rangeValue.value+1]
    const nextNextActive = rangeItem.value[rangeValue.value+2]
    const activeSLide = rangeItem.value[rangeValue.value]

    activeSLide.style.transform = 'translate3d(0px, 0, 40px) scale(1)';
    if(prevActive){
        prevActive.style.transform = 'translate3d(30px, 0, 20px) scale(0.8)';
        if(prevPrevActive){
            prevPrevActive.style.transform = 'translate3d(60px, 0, 10px) scale(0.6)';
        }
       
    } 
    
    if(nextActive){
        nextActive.style.transform = 'translate3d(30px, 0, 20px) scale(0.8)';
        if(nextNextActive){
            nextNextActive.style.transform = 'translate3d(60px, 0, 10px) scale(0.6)' ;
        } 
    }
}

watch(rangeValue, (newVal) => {
    emit('sendRange', newVal)
})

onMounted(()=>{
    rangeSliders()
})

</script>

<style scoped>
.slider{
    display: flex;
    gap: 70px;
}
.slider__navigation{
    display: flex;
    flex-direction: column;
    align-items: center;
    


}

.range{
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    width: 5px;
    z-index: 1;
   
    
}

.range__inner{
    z-index: -1999;
    position: absolute;
    transform: rotate(90deg);
    height: 100%;
    aspect-ratio: 1 / 1;
}
.range-slider{
   height: 5px;
   position: absolute;
   bottom: 0;
   width: 100%;
   background: #2C2C2C;
}






.range-slider::-webkit-slider-thumb{
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #33B7BC inset;
}






.next-slide{
    transform: rotate(180deg);
}

.slider__container{
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: 500px;
    z-index: 10;
}
.slider__items{
    display: flex;
    flex-direction: column;
    gap: 50px;
    transition: all 0.6s ease;
    padding: 0 10px;
}
.slider__item{
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all .4s ease;
}
.slider__item p {
    font-size: 3rem;
}

.slider__item p:last-child{
    font-size: 1.8rem;
    font-weight: 400;
}

.slider__item.active p{
    color: #33B7BC;
   
}

.slider__item.active{
    transform:translate3d(0, 0, 30px) scale(1);
}






</style>
<template>
    <section class="reviews">
        <h2 class="reviews__title stolz-title">
            Reviews
        </h2>
        <div class="reviews__inner">
            <ul class="reviews__items" :style="{transform:'translateX(calc(-100% *' + value + '))'}">
                <li class="reviews__item">
                    <div class="reviews__preview">
                        <img src="../assets/reviews/1.png" alt="1">
                        <div class="play-btn" @click="runPlayer">   
                        </div>
                    </div>
                   
                </li>
                <li class="reviews__item">
                    <div class="reviews__preview">
                        <img src="../assets/reviews/2.png" alt="2">
                        <div class="play-btn" @click="runPlayer">
                        </div>
                    </div>
                </li>
                <li class="reviews__item">
                    <div class="reviews__preview">
                        <img src="../assets/reviews/3.png" alt="3">
                        <div class="play-btn" @click="runPlayer">   
                        </div>
                    </div>
                </li>
                <li class="reviews__item">
                    <div class="reviews__preview">
                        <img src="../assets/reviews/1.png" alt="4">
                        <div class="play-btn" @click="runPlayer">
                        </div>
                       
                    </div>
                </li>
            </ul>
            <div class="reviews__control-buttons">
                <div class="prev-button" @click="prevItem">
                    <t-slidebutton></t-slidebutton>
                </div>
                <div class="next-button" @click="nextItem">
                    <t-slidebutton></t-slidebutton>
                </div>
            </div>
            <div class="rickrolling" v-show="time === 1">
                <div class="close-player" @click="stopPlayer">
                    <img src="../assets/close.png" alt="close">
                </div>
                <iframe  ref="player" id="player" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=qFP-NhRTCxdEyIOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
               
            </div>
          
        </div>
    </section>
</template>



<script setup>
import {ref} from 'vue'

const player = ref(null)
const value = ref(0)
let time = ref(0)
let playY = ref('')

function runPlayer(){
    if(time.value === 0){
        playY.value = player.value.src += '&autoplay=1'
        time.value = 1
    }
      
}

function stopPlayer(){
    playY.value = playY.value.slice(0, -11)
    player.value.src = playY.value
    time.value = 0
}

function nextItem(){
    if(value.value >= 1){
        value.value = 0
    }else{
        value.value++
    }
   
}

function prevItem(){
    if(value.value <= 0){
        value.value = 1
    }else{
        value.value--
    }
   
}

</script>

<style scoped>
.rickrolling{
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 750px;
    height: 400px;
}

.close-player{
    position: relative;
    z-index: 99;
    margin-left: auto;
    width: 100px;
    height: 100px;
    background: #33B7BC;
    cursor: pointer;
}

.close-player img{
    width: 100%;
}

.reviews{
    margin-bottom: 80px;
}


.reviews__inner{
    position: relative;
   
}
.reviews__title{
    text-align: center;
    margin-bottom: 39px;
}
.reviews__items{
    display: flex;
    justify-content: center;
    gap: 6px;
}
.reviews__preview{
    position: relative;
    z-index: 1;
}


.reviews__preview img{
    transition: all .4s ease;
    width: 100%;
}
.reviews__preview:hover img{
    filter: brightness(50%);
}

.reviews__preview:hover .play-btn{
    opacity: 1;
    visibility: visible;
}

.play-btn:hover{
    box-shadow: 0 0 0 4px #33b7bc83;
}
.play-btn{
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #33B7BC;
    transition: all .3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 3;
}

.play-btn::before{
    content:'';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../assets/play.svg') no-repeat;
    background-position: 55% 50%;
}

.reviews__control-buttons{
    display: none;
    margin-top: 30px;
}

.next-button{
    transform: rotate(90deg);
}

.prev-button{
    transform: rotate(-90deg);
}









iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
}


@media (max-width:899px){
    .reviews__items{
        justify-content: start;
    }
    .reviews__control-buttons{
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .reviews__item{
        flex: 0 0 50%;
    }
}



@media (max-width:769px){
    .reviews__title{
        font-size: 5rem;
    }
    .close-player{
        width: 30px;
        height: 30px;
    }
    .rickrolling{
        width:650px ;
        height: 490px;
    }

    iframe{
        width: 580px;
        height: 400px;
    }
}


@media (max-width:650px){
    .close-player{
        width: 30px;
        height: 30px;
    }
    .rickrolling{
        width:360px ;
        height: 290px;
    }

    iframe{
        width: 300px;
        height: 250px;
    }
}
</style>
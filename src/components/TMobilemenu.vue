<template>
    <div class="mobile-menu">
        <div class="mobile-menu__wrapper">
            <div class="mobile__inner">
                <nav class="mobile__nav">
                    <ul class="mobile__lists">
                        <li class="mobile__li" v-for="list, i in props.lists" :key="i" @click="global.menuOpen = false">
                            <router-link :to="list.path" class="stolz underline">
                                {{ list.name }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="mobile__supplement">
                    <div class="mobile__adress">
                        <p class="stolz">24 4th St - Al Quoz - Al Quoz <br> Industrial Area 3 - Dubai</p>
                    </div>
                    <div class="mobile__contacts">
                        <div class="mobile__phone">
                            <a href="tel:+971585907875" class="phone__text stolz" >+971 58 590 7875</a>
                        </div>
                        <TSocial class="mobile__socials" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
 import { defineProps  } from 'vue';
 import {useGlobalStore} from '../store/store'

 const global = useGlobalStore()
 const props = defineProps({
    lists:Array
 })
</script>

<style scoped>
hr{
    border-bottom:2px solid #272727;
    width: 110vw;
    left: -10vw;
    position: relative;
    opacity: 0.3;
   
}
.mobile-menu{
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 99;
    
   

}

.mobile-menu__wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    
}


.mobile-menu__wrapper::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background:url('../assets/MobileBG.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    filter: contrast(70%) brightness(30%);
   
}

.mobile-menu__wrapper::after{
    content: '';
    position: absolute;
    top: 0;
    width: 150%;
    height: 100%;
    background: radial-gradient(circle, #101b25 0%, rgba(15,157,157,0) 71%);
    left: -50%;
    opacity: 1;
    z-index: 1;
}

.mobile__inner{
    z-index: 2;
    position: relative;
    max-width: 1860px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
   justify-content: center;
   height: 100%;

}


.mobile__nav{
    max-width: 1100px;
    flex-grow: 1;
    display: flex;
    align-items: end;
    overflow: hidden;
    position: relative;
  
  
 
}
.mobile__lists{
    position: absolute;
    margin:210px 30px 100px 30px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    column-fill: auto;
    column-count: 2;
    max-height: 550px;
    max-width: 600px;
   
 
 
   
}

.mobile__li{
    margin-bottom: 50px;
    margin-right: 40px;
    filter: contrast(70%) brightness(70%);
    transition: all .4s ease;
}
.mobile__li:hover{
    filter: contrast(100%) brightness(100%);
}

.mobile__li a{
 
    font-size: 4.4rem;
    font-weight: 700;
}

.mobile__li a.underline:before,
.mobile__li a.underline:after{
    height: 20px;
}

.mobile__li a.underline:after{
    left: 6px;
}

.mobile__supplement{
    position: relative;
    display: flex;
    justify-content: space-between;
    padding:30px;
    align-items: center;
    
}

.mobile__supplement::before{
    content: '';
    position: absolute;
    width: 110vw;
    left: -5vw;
    height: 2px;
    top: 0;
    background-color: #494949;
    opacity: 0.5;
}



.mobile__adress p{
    color: #76828C;
    font-weight: 300;
    font-size: 2.4rem;
}

.mobile__contacts{
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: space-between;
}

.mobile__phone a{
    font-size: 3.4rem;
}


@media (max-width:900px){
    .mobile__lists{
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin:180px 30px 50px 30px;
        column-gap: 40px;
        row-gap: 20px;
    }

    .mobile__li{
        margin: 0;
    }
}


@media (max-width:768px){
    .mobile__adress{
        display: none;
    }
    .mobile__contacts{
        width: 100%;
        flex-wrap: wrap;
    }
}


@media (max-height:800px) {
    .mobile__lists{
        display: flex;
        flex-direction: column;
        justify-content: start;
        margin:180px 30px 50px 30px;
        column-gap: 40px;
        row-gap: 20px;
    
    }

    .mobile__li{
        margin: 0;
    }
}
</style>
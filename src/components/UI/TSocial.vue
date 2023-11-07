<template>
    <div class="social" >
        <div class="social__content">
            <ul class="social-list">
                <li class="socila-list__li"
                v-for="item in global.socials"
                :key="item.id"
                :style="{color: item.color}"
                >
                    <img :src="require('../../assets/social/' + item.path)" :alt="item.name">
                </li>
            </ul>
        </div>
    </div>
</template>




<script>
   import { defineComponent } from 'vue';
   export default defineComponent({
    name:'TSocial'
   })
</script>






<script setup>
import {useGlobalStore} from '../../store/store'

const global = useGlobalStore()
</script>










<style scoped>

.social-list{
    display: flex;
    gap: 20px;
}

.socila-list__li{
    position: relative;
    width: 54px;
    height: 54px;
  
 
}

.socila-list__li img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.socila-list__li::before,
.socila-list__li::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 50%;
    height: 100%;
    transition: all .4s ease;
}


.socila-list__li:hover::before,

.socila-list__li:hover::after{
   
    box-shadow: 0px 0px 0px 8px;
    opacity: 0.3;

}

.socila-list__li:hover::after{
    box-shadow: 0px 0px 0px 4px;
    opacity: 0.6;
}


@media (max-width:769px) {
    .socila-list__li{
        width: 34px;
        height: 34px;
    }
}


</style>
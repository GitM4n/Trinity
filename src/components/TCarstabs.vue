<template>
    <div class="cars-tabs">
        <TTabsWrapper class="cars-tabs__inner" :titles="props.tabsTitles" @update="shuffleAutos()">
            <TTab class='cars-tab__content' v-for="tab of props.tabsTitles" :key="tab" :title="tab" >
                <ul class="cars__items">
                    <li class="cars__item" v-for="auto, i of props.data" :key="i">
                        <div class="item-content">
                            <div class="item__img">
                                <img :src="require('@/assets/' + auto.img)" :alt="i">
                            </div>
                            <div class="item__info">
                                <div class="item__name"><p class="stolz">{{auto.brand}} {{auto.model}}</p></div>
                              <t-button class="item__button bg-none">Rent</t-button>
                            </div>
                        </div>
                    </li>
                </ul>
            </TTab>
        </TTabsWrapper>
        <div class="cars-tabs__btn-wrapper" v-show="!props.all">
            <t-button class="cars-tabs__btn">
               <router-link to="/cars">View all</router-link> 
            </t-button>
        </div>
       
</div>
</template>

<script setup>
import {defineProps, ref, onMounted } from "vue";

const props = defineProps({
    tabsTitles:[String, Array],
    data:Array,
    all:{
        type:Boolean,
        default:true,
    },
})


const randomAutos = ref(props.data)


const shuffleAutos = () => {
    randomAutos.value.sort(()=> Math.random() - 0.5)
}



onMounted(() => {
    shuffleAutos()
   
})

</script>

<style scoped>

.cars-tabs{
    margin-top: 80px;
    max-width: 1940px;
    margin: 80px auto 0 auto;
    position: relative;
    z-index: 1;
    
}

.cars-tabs__inner{
    margin-bottom: 60px;
}

.cars-tab__content{
    margin-top: 50px;
}

/*
.home .cars__items{
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(360px, 1fr));
    grid-template-rows: repeat(2, minmax(240px, 550px));
    gap: 10px;
    width: 100%;
  

}*/

.cars__items{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
}

.cars__item{
    overflow: hidden;
    max-height: 550px;
    
}






.item-content{
    position: relative;
   
}

.item-content,
.item__img,

.item__img img{
    width: 100%;
    height: 100%;


}
.item__img img{
 
    object-fit: cover;
    object-position: center bottom;
    
}

.item__img::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0px -100px 100px -40px rgba(22,21,22,1) inset;
    z-index: 2;
}

.item__info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding:0 60px;
    z-index: 5;
    position: absolute;
    width: 100%;
    bottom: 15px;
}

.item__button{
    padding: 18px 26px;
}

.item__name p{
    font-size: 4rem;
}

.cars-tabs__btn-wrapper{
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
.cars-tabs__btn{
    padding: 20px;
    max-width: 350px;
    margin: 0 auto;
}

/*
@media (max-width:1920px) {
     .cars__items{
        aspect-ratio: 2 /1 ;
    }
}*/


@media (max-width: 1024px) {
    .cars__items{
        grid-template-columns: repeat(1, minmax(360px, 1fr));
        grid-template-rows: repeat(4, minmax(450px, 1fr));
     
    }

    .item__info{
        padding:0 30px;
    }

    .item__name p{
        font-size: 3rem;
    }

    .item__button{
        padding: 12px 15px;
    }
}


@media (max-width: 689px) {
        .cars__items{
        grid-template-columns: repeat(1, minmax(360px, 1fr));
        grid-template-rows: repeat(4, minmax(240px, 1fr));
    }
}



</style>
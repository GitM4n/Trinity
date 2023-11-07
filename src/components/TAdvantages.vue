<template>
    <section class="advantages">
        <h2 class="advantages__title stolz-title">Advantages</h2>
        <div class="advantages__inner">
            <ul class="advantages__lists">
                <li class="advantages__list" v-for="list, i in lists" :key="i">
                    <div class="advantage__item">
                        <div class="advantage__img">
                            <img src="../assets/exapmle.jpg" alt="example">
                        </div>
                        <p class="advantage__text stolz">{{list}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue'

const lists = ref([
    '40+ unique cars for rent from our fleet',
    'Delivery and return of cars in Dubai 24/7',
    'Insurance without a deductible for each car',
    'No video or audio recording in the car',
    '24/7 technical support',
    'All models have a premium package'
])

</script>

<style scoped>
.advantages{
    margin-bottom: 260px;
}
.advantages__title{
    text-align: center;
    margin-bottom: 39px;
}

.advantages__inner{
    margin: 0 auto;
    max-width: 1920px;
}

.advantages__lists{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  

}
.advantage__item{
    position: relative;
}

.advantage__item img{
    filter: brightness(30%);
    width: 100%;
    transition: all 0.4s ease;
}

.advantage__item:hover img {
    filter: brightness(100%);
}
.advantage__text{
    position: absolute;
    bottom: 15px;
    padding: 0 30px;
    font-size:2.4rem;
    text-wrap: balance;
    max-width: 515px;
    font-weight: 400;
}

@media (max-width:1024px) {
    .advantages__lists{
        grid-template-columns: repeat(2, 1fr);
      
    
    }
}

@media (max-width:768px){
    .advantages__title{
        font-size: 5rem;
    }

    .advantages__inner{
       padding:30px 20px;
    }
    .advantages__lists{
        display: flex;
        flex-direction: column;
        row-gap: 35px;
        padding: 58px 35px;
        border: 2px solid rgba(67, 67, 67, 0.66);
        border-radius: 20px;
        transform: skewY(-5deg);
     
    }

    .advantages__list{
        transform: skewY(5deg);
    }
    .advantage__img{
        display: none;
    }

    .advantage__text{
        text-wrap: wrap;
        position: relative;
        text-indent: 20px;
        bottom: 0;
        margin: 0 auto;
      
    }

    .advantage__text::before{
        content: '';
        position: absolute;
        left: 30px;
        top: 0;
        width: 15px;
        height: 15px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 0 3px #33B7BC inset;
    }
}

</style>
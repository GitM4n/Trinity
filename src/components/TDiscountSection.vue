<template>
    <aside class="discount-section">
        <div class="discount-section__wrapper">
            <TDiscount />
        </div>
        <t-marquee class="marquee">
            <li v-for="car, i in global.autos" :key="i">
                <p class="marquee__text underline stolz">{{car.brand}}</p>
            </li>
        </t-marquee>
    </aside>
</template>

<script setup>
import {useGlobalStore} from '../store/store'

const global = useGlobalStore()
  
</script>




 <style scoped>

 .discount-section{
    position: relative;
    margin-bottom: 80px;
    max-width: 1860px;
    margin: 0 auto;
}

.discount-section::before,
.discount-section::after{
    content: '';
    position: absolute;
    background: radial-gradient(circle, rgba(16, 149, 158, 0.938) 0%, rgba(16, 94, 158, 0.4) 30%, rgba(22,21,22,0.2) 100%);
    width: 60%;
    height: 70%;
    top: -35%;
    left: -20%;
    border-radius: 50%;
    filter: blur(300px);
    z-index: -2;

}

.discount-section::after{
    left: auto;
    right: -30%;
    width: 40%;
    height: 60%;
    background: radial-gradient(circle, rgba(16,158,158,1) 0%, rgba(16,158,158,0.4766281512605042) 45%, rgba(15,157,157,0) 78%, rgba(22,21,22,0.2) 100%);
    filter: blur(200px);

}





.discount-section__wrapper{
    position: relative;
    max-width: 1270px;
    margin: 0 auto 260px auto;
    padding: 0 30px;
   
}

.discount-section__wrapper::after{
    content: '';
    position: absolute;
    width: 155px;
    height: 155px;
    background: url('../assets/plusItems.png') no-repeat;
    right: -50px;
    bottom: -50px;
}




.marquee__text{
    font-size: 4rem;
    color: gray;
    cursor: pointer;
    white-space: nowrap;
}
.marquee__text:hover{
    color: #FFF;
}


.marquee .underline::before,
.marquee .underline::after{
    height: 10px;
 }


 @media (max-width:768px) {
    .discount-section__wrapper::after{
        content: none;
    }
 }

</style>
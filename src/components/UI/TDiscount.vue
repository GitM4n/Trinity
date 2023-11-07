<template>
    <div class="discount">
        <div class="discount__inner">
            <h4 class="discount__title stolz">Get a discount of up to <b>60</b>%</h4>
            <p class="discount__text stolz">Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</p>
            <div class="discount__form">
                <TInput :type="email" class="discount__input" :email="true" :placeholder="'Your Email'" v-model="discountMail"/>
                <t-button class="discount__button">Receive</t-button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'TDiscount'
}
</script>

<script setup>
  import {ref} from 'vue'
  const discountMail = ref('')

</script>


<style scoped>
.discount{
    margin: 0 auto;
    position: relative;
    max-width: 1170px;
    border-radius: 129px 20px 20px 20px;
    padding: 80px 30px;
    background: #23232342;
    box-shadow: 0px 10px 62px 0px #35353549 inset, 0px 14px 44px 0px #0e0e0e2d;
    margin-bottom: 60px;
    overflow: hidden;
}

.discount::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 390px;
    left: 5px;
    background: url('../../assets/backCircle.png');
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.1;
}

.discount::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 390px;
    top: -30%;
    right: -10%;
    background: url('../../assets/backCircle.png');
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(250deg);
    opacity: 0.1;
}

.discount__inner{
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}   
.discount__title{
    font-size: 4.6rem;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
}

.discount__text{
    text-align: center;
    text-wrap: balance;
    color: #868686;
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 54px;
}

.discount__form{
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.discount__input{
    flex: 0 1 60%;
    height: 100%;
}
.discount__button{
   padding: 0 20px;
   flex: 0 1 30%;
 
    
}



@media (max-width:769px) {
    .discount::before,
    .discount::after{
        content: none;
    }
    .discount__form{
        flex-direction: column;
        
    }
    .discount__button{
        padding: 20px ;
        max-width: 300px;
        margin: 0 auto;
        width: 100%;
    }
}

</style>
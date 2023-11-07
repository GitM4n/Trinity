<template>
  <TBreadcrumbs :routePath="{path:$route.path, name:$route.name}" />
  <TAbout />
  <section class="info">
      <div class="info__inner">
        <h2 class="info__title stolz-title">
          Glad to present you Dubai Get Car
        </h2>
          <div class="info__text">
            <p class="stolz">
              A company founded by a team of professional enthusiasts who have set themselves the goal of creating a truly exclusive car rental service that is unique for our country. With us, you do not need to spend time and money on regular repairs, paying high taxes and seasonal storage of your car. 
              You just have to enjoy the indescribable emotions from driving the car of your dreams.
            </p>
            <transition>
              <p class="stolz" v-show="hiddenText">
                Your safety is our most important concern. The strictest control over the technical and sanitary-hygienic condition 
                of our vehicles is one of the distinctive features and fundamental ideas that guide us. We guarantee that any car from the Dubai Get Car vehicle fleet will leave a bright mark and unforgettable impressions in your soul.
              </p>
            </transition>
            <t-button class="bg-none read" v-show="isMobile && !hiddenText" @click="hiddenText = true">Read more</t-button>
          </div>
          <div class="info__subtext">
              <p class="stolz">
                We invite you to familiarize yourself with our fleet of vehicles, which are extremely rare in full complete sets of brands: McLaren, Rolls-Royce, Lamborghini, Ferrari, Bentley, Porsche, Mercedes-Benz, etc.
              </p>
          </div>
      </div>
  </section>
  <TAdvantages />
  <TAsk />
  <TDiscountSection />
</template>

<script setup>
import TAdvantages from "@/components/TAdvantages.vue";
import TAbout from "@/components/TAbout.vue";
import TAsk from "@/components/TAsk.vue";
import TDiscountSection from "@/components/TDiscountSection.vue";

import { ref, onMounted} from 'vue'


const isMobile = ref(false)
const hiddenText = ref(false)

onMounted(()=>{
  window.innerWidth < 770 ? isMobile.value = true : isMobile.value = false
})
window.addEventListener('resize', ()=>{
  window.innerWidth < 770 ? isMobile.value = true : isMobile.value = false
})





</script>

<style scoped>

.info__inner{
  max-width: 1436px;
  margin: 0 auto;
}
.info__title{

  font-size: 7rem;
  margin-bottom: 120px;
}
.info__text {
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  margin-bottom: 90px;
 
}

.info__text p{
  max-width: 650px;
  font-weight: 300;
  line-height: 2;
  font-size: 2rem;
}
.info__subtext{
  margin-bottom: 260px;
}

.info__subtext p{
  font-weight: 700;
  font-size: 2.4rem;
}

.read{
  padding: 20px 30px;
  margin:10px auto 0 auto;
}

@media (max-width:769px) {
  .info__text{
    flex-direction: column;
  }
}
</style>
<template>
    <TBreadcrumbs :routePath="{path:$route.path, name:$route.name}" />
   <section class="contact">
        <h1 class="contact__title stolz-title">Contact Us</h1>
        <div class="contact__inner">
            <div class="phone">
                <h4 class="phone__title">Phone</h4>
                <a href="tel:+971585907875" class="phone__text stolz" >+971 58 590 7875</a>
            </div>
            <div class="adress">
                <h4 class="adress__title">Adress</h4>
                <p class="adress__text stolz">24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai</p>
            </div>
        </div>
   </section>
   <TAsk />
    <TDiscountSection />
</template>

<script setup>
import TAsk from "@/components/TAsk.vue";
import TDiscountSection from "@/components/TDiscountSection.vue";
</script>

<style scoped>
.contact{
    margin-bottom: 160px;
}
.contact__title{
    text-align: center;
}
.contact__inner {
   
    max-width: 1860px;
    margin: 0 auto;
  
}

.phone{
    margin-bottom: 57px;
}

.phone,
.adress{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.phone__title,
.adress__title{
    color: #535965;
    text-align: center;
    font-family: Stolzl;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 78px; /* 433.333% */
}

.phone__text,
.adress__text{
    font-size: 4.4rem;
    text-align: center;
   
}

.adress__text{
    max-width: 740px;
}

</style>
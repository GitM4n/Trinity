<template>
    <TBreadcrumbs :routePath="{path:$route.path, name:$route.name}" />
    <section class="car-list">
        <h1 class="car-list__title stolz-title">Car List in Dubai</h1>
        <div class="car-list__inner">
            <TCarstabs :tabsTitles="tabsTitles" :data="autos" />
        </div>
    </section>
    <TAsk />
    <TDiscountSection />

</template>

<script setup>

import TCarstabs from "@/components/TCarstabs.vue"
import TAsk from "@/components/TAsk.vue";
import TDiscountSection from "@/components/TDiscountSection.vue";
import {useGlobalStore} from '../store/store'
import {ref} from 'vue'



const global = useGlobalStore()

const autos = global.autos
const tabsTitles = ref(['All cars', 'SUVs', 'Convertibles', 'Sports Cars', 'Coupe', 'Premium'])
</script>

<style scoped>

.car-list__title{
    text-align: center;
}

</style>
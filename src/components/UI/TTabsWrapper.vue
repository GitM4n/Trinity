<template>
    <div class="tabs-wrapper">
        <ul class="tabs-titles">
            <li class="tabs-title" v-for="tab, i in props.titles" :key="i" @click="changeTab(tab)" :class="{active: tab == selectedTitle}">
                <h5 class="stolz underline">{{tab}}</h5>
            </li>
        </ul>
        <slot />
    </div>
</template>

<script setup>
import { defineProps, provide, ref, defineEmits } from 'vue';
const emit = defineEmits(['update'])
const props = defineProps({
    titles:{
        type:Array,
        default:() => []
    }
})

const selectedTitle = ref(props.titles[0])
provide('selectedTitle', selectedTitle)

function changeTab(title) {
    if(selectedTitle.value == title){
        return false
    }else{
        selectedTitle.value = title
        emit('update', true)
    }
}



</script>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name:'TTabsWrapper'
    })
</script>


<style scoped>
.tabs-titles{
    display: flex;
    justify-content: center;
    column-gap: 60px;
}
.tabs-title h5{
    color: #414141;
    font-size: 4rem;
    font-weight: 500;
    cursor: pointer;
}

.tabs-title.active h5{
    color: white;
}
.tabs-title .underline::before,
.tabs-title .underline::after{
    height: 10px;
 }



 .cars-tabs .tabs-titles{
    padding:0 30px;
 }

 @media (max-width:1024px) {
    .cars-tabs .tabs-titles{
       justify-content: normal;
        overflow-x: scroll;
    }

    .cars-tabs .tabs-title{
        white-space: nowrap;
    }
 }


</style>
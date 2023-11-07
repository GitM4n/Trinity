<template>
    <div class="tab-content" v-show="props.title == selectedTitle">
        <slot />
    </div>
</template>


<script setup>
import { inject, defineProps } from 'vue';

const props = defineProps({
    title:String
})

const selectedTitle = inject('selectedTitle')


</script>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name:'TTab'
    })
</script>

<style scoped>

</style>
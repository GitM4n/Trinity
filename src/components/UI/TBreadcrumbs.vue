<template>
    <div class="breadcrumbs">
        <ul class="breadcrumbs__list">
            <li class="breadcrumbs__li_main ">
                <router-link to="/" class="stolz">Main</router-link>
            </li>
            <li class="breadcrumbs__li stolz" v-for="bread, i of breads.name" :key="i">
                <p class="stolz">>></p>
                <router-link :to="generateBreadpaths(i)" class="stolz">{{bread}}</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:'TBreadcrumbs'
}
</script>

<script setup>
    import { defineProps, computed } from 'vue';

    const props = defineProps({
        routePath:Object,
    })

    const breads = computed(()=>{
     
         return props.routePath
    })
    

    

   

    function generateBreadpaths(index){
        const getPath = breads.value.path.split('/').slice(1).slice(0, index + 1);
        return `/${getPath.join('/')}`
    }




</script>

<style scoped>
.breadcrumbs{
    
}

.breadcrumbs__list{
    display: flex;
    justify-content: center;
    gap: 10px;
}

.breadcrumbs__li_main{
    position: relative;
}

.breadcrumbs__li_main::before{
    content: '';
    height: 7px;
    width: 8px;
    position: absolute;
    
}


.breadcrumbs__li_main a {
    color: #22ECF3;
    font-weight: 300;
}


.breadcrumbs__li_main:hover a,
.breadcrumbs__li:hover a{
    text-decoration: underline;
}

.breadcrumbs__li{
    display: flex;
    gap: 10px;

}

.breadcrumbs__li a,
.breadcrumbs__li p{
    color: #22ECF3;
    font-weight: 300;
    font-size: 1.6rem;
}


.breadcrumbs__li:last-child a,
.breadcrumbs__li p{
    color: #717171;

}

</style>\
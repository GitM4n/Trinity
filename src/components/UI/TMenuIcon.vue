<template>
    <div class="menu "
    @click="menuOpen"
    :class="{open : global.menuOpen}">
    <div class="menu__lines">
        <div class="top-line"></div>
        <div class="bottom-line"></div>
    </div>
    </div>
</template>

<script setup>

    import {watch, computed} from 'vue'
    import {useGlobalStore} from '../../store/store'

    const global = useGlobalStore()
   function menuOpen(){
    global.menuOpen = !global.menuOpen
        
   }

   const watchMenu = computed(()=>{
        return global.menuOpen
   })

   watch(watchMenu, (val)=>{
        val === true ? document.body.classList.add('lock') : document.body.classList.remove('lock')
   })
   

</script>

<style scoped>


.menu{
    width: 61px;
    height: 47px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 100;
}

.menu__lines{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
}

.top-line, .bottom-line{
    position: relative;
    transition: all .4s ease;
    background-color: white;
    left: 0;
}

.top-line{
    left: 10%;
}


.top-line::before, 
.bottom-line::before,
.top-line::after, 
.bottom-line::after{
    content: '';
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: inherit;
    
    
    
}

.top-line::before, 
.top-line::after{  
   top: 0; 
}

.bottom-line::before, 
.bottom-line::after{
   bottom: 0;
   left: 0;   
}


.top-line::after,
.bottom-line::after{
    transform: skewX(-60deg);
    left: 10%;
}

.menu.open .top-line{
    transform: rotate(-42deg) skewX(-60deg);
    top: 3px;
    left: 1px;
}

.menu.open .bottom-line{
    transform: rotate(42deg) skewX(-60deg);
}



.menu:hover .top-line,
.menu:hover .bottom-line{
    background-color: #33B7BC;
}

.menu:hover .top-line{
    left: 0;
}

.menu:hover .bottom-line{
    left: 10%;
}

.menu.open:hover .top-line{
    transform: rotate(-38deg) skewX(-60deg);
    top: 3px;
    left: 1px;
}


.menu.open:hover .bottom-line{
    transform: rotate(38deg) skewX(-60deg);
    left: 0;
    bottom: 0;
}



</style>
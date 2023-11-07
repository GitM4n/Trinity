<template>
    <button class="button__wrapper stolz">
    <div class="button">

            <slot>Button</slot>
       
    </div>
    </button>
</template>

<script>
   import { defineComponent } from 'vue';
   export default defineComponent({
    name:'TButton'
   })
</script>

<style scoped>
.button__wrapper{
    border-radius: 10px;
    background: #33B7BC;
    transition: all .4s ease-out;
   
    
}

.bg-none{
    background: none;
    border: 2px solid #33B7BC;
    border-radius: 10px;
}
.button{
    text-transform: uppercase;
    margin: 0 auto;
    width: 100%;
    font-size: 1.8rem;
}
.bg-none:hover{
    background: #33B7BC;
}
.button__wrapper:hover{
    box-shadow: 0px 0px 20px 0px #33B7BC;
}
</style>
<template>
    <div class="marquee">
        <div class="marquee__content">
           <slot>
            <li v-for="i in 10"  :key="i">
                <p class="stolz maqruee__text underline ">Example</p> 
            </li>
           </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'t-marquee'
    }
</script>

<script setup>




</script>

<style  scoped>

.marquee__content{
    display: flex;
    justify-content: space-between;;
    gap: 60px;
    position: relative;
    left: -100%;
    animation: scroll 30s linear infinite;
    
}

.maqruee__text{
    color: gray;
    cursor: pointer;
    white-space: nowrap;
}


.maqruee__text:hover{
    color: aliceblue;
}




@keyframes scroll {
    from{
        transform: translateX(0%);
    }
    to{
        transform: translateX(50%);
    }
}


@media (max-width:1024px) {
    .marquee__content{
        gap: 30px;
    }
}

@media (max-width:768px) {
    .marquee__content{
        gap: 15px;
        animation: scroll 20s linear infinite;
    }
    @keyframes scroll {
        from{
            transform: translateX(0%);
        }
        to{
            transform: translateX(100%);
        }
    }
}

</style>
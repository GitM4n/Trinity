<template>
    <div class="loading">
        <div class="loading__content">
            <div class="loading__icon">
                <div class="semicircle">
                </div>
                <div class="semicircle-small">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgb(32, 32, 32);

}



.loading__content{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  
}

.loading__icon{
    width: 90px;
    height: 90px;
    position: relative;
    margin: 0 auto;
}

.semicircle,
.semicircle-small{
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotate(-45deg);

}

.semicircle::before,
.semicircle::after,
.semicircle-small::before,
.semicircle-small::after{
    content: '';
    position: absolute;
    background-color: azure;
    border-radius: 99px 99px 0px 0px;
    height: 50%;
    width: 100%;
}

.semicircle::after,
.semicircle-small::after{
    background-color:rgb(32, 32, 32) ;
    border-radius: 99px;
    width: 84px;
    top: 3px;
    left: 3px;
    height: 100%;
    animation-name: opening;
    animation-duration: 3s;
    animation-timing-function: ease;
}

.semicircle-small::before{
    background-color: #33B7BC;
}






.semicircle{
    animation: circle 1.5s linear infinite;
}

.semicircle-small{
    position: absolute;
    top: 0;
    transform: scale(0.8);
    animation: circle-2 1.5s linear infinite;
}


@keyframes circle {
    from{
     transform: rotate(35deg);
    }to{
     transform: rotate(-325deg);
    }
 }


@keyframes circle-2 {
   from{
    transform:scale(0.8) rotate(-45deg);
   }to{
    transform:scale(0.8) rotate(315deg);
   }
}

</style>
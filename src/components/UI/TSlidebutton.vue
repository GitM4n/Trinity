<template>
    <div class="circle">
        <div class="circle__inner">
            <div class="arrow">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.69307 0.296828L13.7127 6.31662C14.0958 6.69955 14.0958 7.32041 13.7127 7.70315C13.3299 8.08593 12.7091 8.08593 12.3263 7.70315L6.9999 2.37657L1.67367 7.703C1.29074 8.08577 0.669973 8.08577 0.287198 7.703C-0.0957325 7.32022 -0.0957325 6.69939 0.287198 6.31646L6.30688 0.296673C6.49836 0.105285 6.74905 0.0096988 6.99987 0.00969883C7.25081 0.00969886 7.50168 0.105471 7.69307 0.296828Z" fill="url(#paint0_linear_79_575)"/>
                    <defs>
                    <linearGradient id="paint0_linear_79_575" x1="8.00003" y1="-1.51442e-05" x2="8.00003" y2="9.49999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B7B7B7"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>    
            </div> 
        </div>    
    </div> 
</template>
<script>
export default {
    name:'t-slidebutton'
}

</script>

<script setup>

</script>

<style  scoped>
.circle{
    width: 46px;
    height: 46px;
    background-image: linear-gradient(#2C2C2C 0%, #2C2C2C 40%, #161516 100%);
    transition: all 1.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: relative;

   

}

.circle::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: linear-gradient(#33B7BC 0%, rgba(40, 123, 126, 0.3) 40%, #161516 100%);
    transition: all .3s ease;
    opacity: 0;
}

.circle__inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #161516;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle:hover::before{
    opacity: 1;
   
}

.arrow svg path{
    fill: #2C2C2C;
}

.circle:hover .arrow svg path{
    fill: #33B7BC;
    
    
}

.arrow{
    width: 14px;
    height: 14px;
}

</style>
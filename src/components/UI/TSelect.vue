<template>
    <div class="select" :class=" {opened:showSelect}"  @click="showSelect = !showSelect" v-click-outside="hideSelect">
        <div class="select__inner">
            <div class="select__default">
                <p class="stolz default__value">{{defaultItem}}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <g clip-path="url(#clip0_79_512)">
                      <path d="M4.50495 7.6447L0.205243 3.34485C-0.0684119 3.07133 -0.0684118 2.62786 0.205243 2.35447C0.478654 2.08106 0.9221 2.08106 1.19549 2.35447L5.00007 6.15918L8.80452 2.35458C9.07805 2.08117 9.52145 2.08117 9.79486 2.35458C10.0684 2.628 10.0684 3.07144 9.79486 3.34497L5.49509 7.64482C5.35831 7.78152 5.17925 7.8498 5.00009 7.8498C4.82085 7.8498 4.64165 7.78139 4.50495 7.6447Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_79_512">
                        <rect width="10" height="10" fill="white" transform="translate(10) rotate(90)"/>
                      </clipPath>
                    </defs>
                  </svg>
            </div>
            <ul ref="selectContainer" 
                class="select__options" 
                @click.stop 
                >
                    <li class="select__option"
                    v-for="option, i of props.options"
                    :key="i"
                    @click="changeValue(i), hideSelect()"
                    >
                        <p class="stolz option__value">{{option}}</p>
                    </li>
            </ul>     
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed, onMounted } from 'vue';

const showSelect = ref(false)
const props = defineProps({
    options:{
        type: Array,
        default: () => []
    }  
})

const selectContainer = ref(null)
let selectWidth = computed(() =>{
        return selectContainer.value.offsetWidth*1.5
    })
function getSelectWidth(){
   
    selectContainer.value.style.width = selectWidth.value + 'px'
}
onMounted(() => {
    getSelectWidth()

})

let defaultItem = ref(props.options[0])
function changeValue (id){
    defaultItem.value = props.options[id]
    
}
function hideSelect(){
    showSelect.value = false
}
</script>

<style scoped>


.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}


.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}




.select__inner{
    position: relative;
    display: inline-block;
   
}

.select__default{
    display: flex;
    align-items: center;
    gap: 15px;
    text-transform: uppercase;
}

.select__default svg{
    transition: all .3s ease;
}

.opened .select__default svg{
    transform: rotate(-180deg);
}

.opened .select__default svg path{
    fill: #33B7BC;
}



.select__options{
    visibility: hidden;
    opacity: 0;
    position: absolute;
    display: flex;
    top: 40px;
    right: 0;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 10px 25px;
    border-radius: 14px;
    border: 1px solid #313131;
    background: rgba(32, 32, 32, 0.40);
}


.opened .select__options{
    visibility: visible;
    opacity: 1;
}

.select__option, 
.select__default{
    cursor: pointer;
}

.select__option{
    padding: 15px 0;
   
}
.select__option:not(:last-child){
    border-bottom: 1px solid #323232 ;
}

.select__option:hover p,
.select__default:hover p {
    color: #33B7BC;
    
}


@media (max-width:1024px) {
    .select__options{
        top: 20px;
    }
}


</style>
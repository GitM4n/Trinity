<template>
    <div class="input-wrapper" :class="{focused:isFocus}">
        <div class="input__inner">
            <div class="email__icon" v-if="props.email && props.modelValue === ''">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <path d="M3.99707 6L9.39707 10.05C9.75263 10.3167 10.2415 10.3167 10.5971 10.05L15.9971 6" stroke="#868686" stroke-linecap="round"/>
                    <rect x="0.49707" y="0.5" width="20" height="17" rx="4.5" stroke="#868686"/>
                  </svg>
            </div>
            <p class="placeholder__text stolz" v-if="props.placeholder && props.modelValue === ''">{{props.placeholder}}</p>
            <input 
                ref="input"
                @focus="isFocus = true"
                @blur="isFocus = false"
                class="input__text stolz" 
                :type="props.type" 
                :id="props.id" 
                :required="props.required" 
                :disabled="props.disabled" 
                :value="props.modelValue" 
                autocomplete="off"
                @input="$emit('update:modelValue', $event.target.value)">
            <div class="search__icon" v-if="props.isSearch">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M14.7089 25.9452C20.9145 25.9452 25.9452 20.9145 25.9452 14.7089C25.9452 8.5033 20.9145 3.47266 14.7089 3.47266C8.5033 3.47266 3.47266 8.5033 3.47266 14.7089C3.47266 20.9145 8.5033 25.9452 14.7089 25.9452Z" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.5225 23.1064L26.9275 27.5002" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
        </div>
        <div class="input__label" v-if="props.label">
            <label :for="props.id">{{props.label}}</label>
        </div>
    </div>
</template>





<script>
   import { defineComponent } from 'vue';
   export default defineComponent({
    name:'TInput'
   })
</script>






<script setup>
import { defineProps, ref } from 'vue';





const props = defineProps({
    type:{
        type:String,
        default:'text',
    },
    id:{
        type:[String, Number],
        default:() => Math.random()
    },
    label:String,
    placeholder:String,
    isSearch:{
        type:Boolean,
        default:false
    },
    email:{
        type:Boolean,
        default:false
    },
    required:{
        type:Boolean,
        default:false
    },
    disabled:{
        type:Boolean,
        default:false
    },
    modelValue:[String, Number],
   
    
})

const input = ref(null)
const isFocus = ref(false)





</script>

<style scoped>



.input-wrapper{
    position: relative;
}

.input__inner{
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    column-gap: 10px;
    border-radius: 10px;
    border: 1px solid rgba(67, 67, 67, 0.66);
    background: linear-gradient(91deg, #1c1c1c7e 0.65%, rgba(27, 27, 27, 0.40) 107.06%);
    padding-right: 36px;
    transition: all .3s ease-in-out;
 
}


.input__inner:hover {
    border: 1px solid #505050;
}

.input__inner:hover .input__text,
.input__inner:hover .placeholder__text{
    color: #C0C0C0;
}

.input__inner:hover .search__icon svg path{
    stroke:#C0C0C0;
}


.input-wrapper.focused .input__inner{
    border: 1px solid #33B7BC;
}

.input-wrapper.focused .input__text,
.input-wrapper.focused .placeholder__text{
    color: #FFF;;
}

.input-wrapper.focused .search__icon svg path{
    stroke: #FFF;
}
    
.error .input__inner{
    border-color: rgba(211, 75, 75, 0.66);  
}

.error .input__text,
.error .placeholder__text{
    color: rgba(211, 75, 75, 0.66);
}

.input__inner input{
    flex:1 1 auto;
    padding: 30px 0;
    text-indent: 36px;
}

.placeholder__text{
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    left: 36px;
}

.input__text, .placeholder__text{
    font-weight: 400;
    font-size: 2rem;
    color: #707070;
    transition: all .3s ease-in-out;
}

.search__icon,
.email__icon{
    cursor: pointer;
   
}


.email__icon{
    position: absolute;
    padding-left: 36px;
    width: 21px;
    height: 18px;
}

.email__icon ~ .placeholder__text{
    left: 74px;
}




.search__icon svg path,
.email__icon svg path{
    transition: all .3s ease-in-out;
}


@media (max-width:1499px) {
    .input__inner input{
        text-indent: 20px;
        padding: 20px 0;
    }
    .placeholder__text{
        left: 20px;
    }
    .input__inner{
        padding-right: 20px;
    }

    .email__icon{
        padding-left: 20px;
    }

    .email__icon ~ .placeholder__text{
        left: 54px;
    }
    
}


@media (max-width:1024px) {
    .input__inner input{
        text-indent: 15px;
        padding: 15px 0;
    }
    .placeholder__text{
        left: 15px;
    }

    .input__inner{
        padding-right: 15px;
    }

    .input__inner input{
        text-indent: 15px;
    }
}



</style>
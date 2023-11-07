<template>
    <div class="textarea__wrapper">
        <div class="textarea__inner">
            <p class="placeholder__text stolz" v-if="props.placeholder && props.modelValue === ''">{{props.placeholder}}</p>
            <textarea class="stolz textarea__text" 
            :name='props.name' 
            :id="props.id" 
            :cols="props.cols" 
            :rows="props.rows" 
            :required="props.required" 
            :disabled="props.disabled" 
            :value="props.modelValue" 
            @input="$emit('update:modelValue', $event.target.value)">"></textarea>
        </div>
        <div class="textarea__label">
            <label :for="props.id"></label>
       </div>
    </div>
</template>
<script>
    export default {
        name:'t-textarea'
    }
</script>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    id:[Number, String],
    placeholder:String,
    modelValue:[String, Number],
    cols:{
        type:Number,
        default:30,
    },
    rows:{
        type:Number,
        default:10,
    },
    name:{
        type:String,
        default:'textarea'
    },
    required:{
        type:Boolean,
        default:false
    },
    disabled:{
        type:Boolean,
        default:false
    },


})

</script>

<style scoped>


.textarea__inner{
    position: relative;
    
}

textarea{
    padding: 36px 30px;
    outline: none;
    border-radius: 10px;
    border: 1px solid rgba(67, 67, 67, 0.66);
    background: linear-gradient(91deg, #1C1C1C 0.65%, rgba(27, 27, 27, 0.40) 107.06%);
    width: 100%;
    height: 100%;
    resize: none;
}

.textarea__text:focus{
    border-color: #33B7BC;
    color: #fff;
}
.textarea__text, .placeholder__text{
    font-weight: 400;
    font-size: 2rem;
    color: #707070;
    transition: all .3s ease-in-out;
}


.placeholder__text{
    position: absolute;
    top: 36px;
    left: 33px;
}




.textarea__inner:hover .textarea__text  {
    border: 1px solid #505050;
    
}

.textarea__inner:hover .input__text,
.textarea__inner:hover .placeholder__text{
    color: #C0C0C0;
    
}
</style>
<template>
   <section class="ask">
        <div class="ask__inner">
            <div class="ask__map">
                <iframe src="https://www.google.com/maps/d/embed?mid=114idMF9D27KB8ooyvkQ2kuKUOdcsUgg&ehbc=2E312F"></iframe>
            </div>
            <form action="#" class="ask__form" @submit.prevent="submit">
                <div class="ask__title stolz-title">Ask us anything</div>
                <div class="form__content">
                    <TInput :id="10" :placeholder="'Name'" :type="'text'" :required="true" v-model="form.formName.val" :class="{error: form.formName.error}" />
                    <TInput :id="11" :placeholder="'Email'" :type="'email'" :required="true" v-model="form.formEmail.val" :class="{error: form.formEmail.error}"  />
                    <TInput :id="12" :placeholder="'+7 (999) 999 - 99 - 99'" :type="'tel'" :required="true" v-model="form.formTel.val" :class="{error: form.formTel.error}" />
                    <t-textarea v-model="textareaValue" :placeholder="'Message'" :id="15"></t-textarea>
                </div>
                <t-button  class="form__button bg-none">Send the request</t-button>
                
            </form>
        </div>
   </section>
</template>

<script setup>
import {ref} from 'vue'
const textareaValue = ref('')

const form = ref({
    formName:{
       val:'',
       error:false, 
    },
    formEmail:{
        val:'',
        error:false, 
    },
    formTel:{
        val:'',
        error:false, 
    }
})


function checkValid(){
    const nameValid = /^{[а-яёА-ЯЁa-zA-z]{3,10}$/;
    const emailValid = /^\d{3}-\d{3}-\d{4}$/;
    const telValid = /^[0-9]{9,11}$/;

    form.value.formName.val = form.value.formName.val.replace(/\d/g,'')
    form.value.formTel.val = form.value.formTel.val.replace(/[а-яёА-ЯЁa-zA-z]/g, '')


    if(nameValid.test(form.value.formName.val)){
        form.value.formName.error = true
        return false
    }else{
        form.value.formTel.error = false
    }

    if( emailValid.test(form.value.formEmail.val)){
        form.value.formEmail.error = true
        return false
    }
    else{
        form.value.formTel.error = false
    }

    if( form.value.formTel.val.length == 0 || !telValid.test(form.value.formTel.val)){
        form.value.formTel.error = true
        return false
    }else{
        form.value.formTel.error = false
    }
    
   
    return true
     

    
  
   
}


function submit(){
    if(checkValid()){
        alert('Данные отправлены! (нет)')
    }else{
        alert('Упс! Где-то ошибка! (исправляй, чебурек!)')
    }
}


</script>

<style scoped>
.ask{
    margin-bottom: 180px;
}
.ask__inner{
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
    column-gap: 30px;
    max-width: 1860px;
    margin: 0 auto;
}

iframe{
    width: 100%;
    height: 100%;
}

.ask__map{
    flex: 1 1 auto;
}


.ask__title{
    margin-bottom: 80px;
}
.ask__form{
    flex:0 1 40%;
}

.form__content{
   
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-bottom: 43px;
}


.form__button{
    max-width: 310px;
    padding: 30px;

}

@media (max-width:1024px) {
    .ask__title{
        font-size: 5rem;
        text-align: center;
    }
    iframe{
        display: none;
    }

    .ask__form{
        flex: 1 1 100%;
    }
}

</style>
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import TClickOutside from './directives/TClickOutside'
// import winResized from '@/mixins/winResized.js'
import router from './router/router'
import TButton from './components/UI/TButton.vue'
import components from "@/components/UI/index";


const app = createApp(App)
const pinia = createPinia()


// app.mixin(winResized)
app.directive('click-outside', TClickOutside)
app.component('t-button', TButton )


components.forEach(component => {
    app.component(component.name, component)
})


app.use(router)
app.use(pinia)
app.mount('#app')

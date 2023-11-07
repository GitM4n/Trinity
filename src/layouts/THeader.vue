<template>
    <div class="header">
        <transition name="menu">
            <TMobilemenu v-show="global.menuOpen" :lists="menuList"/>
        </transition>
      
        <div class="container">
            <div class="header__inner">
                <nav class="nav-left">
                    <TMenuIcon />
                    <ul class="list">
                        <li 
                        v-for="li, i of menuList.slice(0, 3)"
                        :key="i"
                        class="list__li"
                        ><router-link :to="li.path" class="stolz underline">{{li.name}}</router-link></li>
                    </ul>
                </nav>
                <div class="header__logo">
                    <!-- <img src="../assets/Logo.svg" srcset="../assets/Logo_m.svg 280w, ../assets/Logo.svg 1024w" alt="#Logo"> -->
                    <picture>
                        <source srcset="../assets/Logo_m.svg" media="(max-width: 1024px)" />
                        <img src="../assets/Logo.svg" alt="#Logo">
                    </picture>
                </div>
                <nav class="nav-right">
                    <div class="phone">
                        <a href="tel:+971585907875" class="phone__text stolz" >+971 58 590 7875</a>
                    </div>
                    <div class="selects">
                        <TSelect :className="'regions'" :options="global.regions"/>
                        <TSelect :className="'language'" :options="global.lang"/>
                    </div>
                   
                   
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
 
    import TMenuIcon from '@/components/UI/TMenuIcon.vue';
    import TSelect from '../components/UI/TSelect'
    import {useGlobalStore} from '../store/store'
    import TMobilemenu from '@/components/TMobilemenu.vue';

    const global = useGlobalStore()
    

    const menuList = [
        {
            name:'Car List',
            path:'/cars'

        },
        {
            name:'Yacht List',
            path:'/'
        },
        {
            name:'Chauffeur',
            path:'/'
        },
        {
            name:'Conditions',
            path:'/'
        },
        {
            name:'Testimonials',
            path:'/'
        },
        {
            name:'Articles',
            path:'/'
        },
        {
            name:'About Us',
            path:'/about'
        },
        {
            name:'Contacts',
            path:'/contact'
        },

        ]
</script>

<style scoped>

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
.header{
  padding-top: 25px;
  position: absolute;
  width: 100%;
  z-index: 99;
}
.header__inner{
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}


.header__logo{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
}


.list{
    display: flex;
    gap: 40px;
}

.phone:hover .phone__text{
    color: #33B7BC;
}
.phone__text{
    font-weight: 700;
}



.nav-right, 
.nav-left,
.selects{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.nav-right, 
.nav-left{
    gap: 90px;
}

.selects{
    gap: 60px;
}



@media (max-width:1399px) {
    
    .nav-right, 
    .nav-left{
        gap: 40px;
    }
    .selects{
        gap: 30px;
    }
    .list{
        gap: 20px;
    }
}

@media (max-width:1024px){
    .list,
    .phone,
    .regions{
        display: none;
    }
    .header__inner{
        padding: 5px 0;
    }
}



</style>
<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__content">
                <div class="footer__r">
                    <div class="footer__navs">
                        <ul class="footer__nav" v-for="fList, i of footerLists" :key="i">
                            <p class="footer__navTitle stolz">{{ fList.title }}</p>
                            <li class="footer__navli" v-for="list, i of fList.lists" :key="i">
                                <p class="stolz underline">{{list}}</p>
                            </li>
                        </ul>
                    </div>
                 
                </div>
                <div class="footer__l">
                    <div class="footer__contacts">
                        <div class="footer__phone phone">
                            <a href="tel:+971585907875" class="phone__text stolz" >+971 58 590 7875</a>
                        </div>
                        <TSocial class="footer__social" />
                    </div>
                    <t-button class="footer__request bg-none">Request a callback</t-button>
                    <div class="footer__adress">
                        <p class="stolz">24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai</p>
                    </div>
                    <div class="footer__input-wrapper">
                        <TInput :type="email" class="footer__input" :placeholder="'Write your email'" v-model="footerEmail"/>
                        <t-button class="footer__input_btn">Submit</t-button>
                    </div>
                   
                </div>
            </div>
            <div class="footer__items">
                <ul class="companies">
                    <li class="company" v-for="item, i of global.companies" :key="i">
                        <img class="company__img" :src="require('../assets/items/' + item.img)" :alt="item.name">
                    </li>
                </ul>
            </div>
            <div class="footer__privacy">
                <div class="privacy">
                    <a href='#' class="privacy__text stolz">Privacy Policy</a>
                </div>
                <div class="rights">
                    <p class="rights__text stolz">©2023 TRINITY. All rights reserved</p>
                </div>
                <div class="social__items">
                    <ul class="items">
                        <li class="item">
                            <svg class="facebook" view-box="0 0 26 26" width="26" height="26">
                                <use href="#facebook" />
                            </svg>
                        </li>
                        <li class="item">
                            <svg class="instagram" view-box="0 0 26 26" width="26" height="26">
                                <use href="#instagram" />
                            </svg>
                        </li>
                        <li class="item">
                            <svg class="tiktok" view-box="0 0 26 26" width="26" height="26">
                                <use href="#tiktok" />
                            </svg>
                        </li>
                        <li class="item">
                            <svg class="youtube" view-box="0 0 26 26" width="26" height="26">
                                <use href="#youtube" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import {ref} from 'vue'
import {useGlobalStore} from '../store/store'

const global = useGlobalStore()

const footerEmail = ref('')

const footerLists = ref([
    {
        title: 'For Customers',
        lists:[
            'About Us',
            'Conditions',
            'Testimonials',
            'Articles',
            'Contacts'
        ]
    },
    {
        title:'Car List',
        lists:[
            'SUVs',
            'Convertibles',
            'Sports Cars',
            'Premium',
            'Coupe'
        ]
    },
    {
        title:'Service',
        lists:[
            'Car List',
            'Yacht List',
            'Chauffeur'
        ]
    }
])


</script>

<style scoped>
use{
    width: 100%;
    height: 100%;
}


.footer__inner{
    max-width: 1860px;
    margin: 0 auto;
}

.footer__content{
    display: flex;
    border-top: 1px solid #272727;
   
}

.footer__content,
.companies{
 padding: 0 30px;
}

.footer__r{
    position: relative;
    flex: 0 1 60%;

}

.footer__r::before{
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background: #272727;
    right: 0;
    top: 0;
}


.footer__navs{
    max-width: 840px;
    display: flex;
    justify-content: space-between;
    gap: 60px;
}
.footer__nav{

    display: flex;
    flex-direction: column;
    gap: 20px;
   
}

.footer__nav p{
    font-size: 2rem;
}




.footer__navli p{
    font-size: 1.8rem;
    cursor: pointer;
    font-weight: 300;
}


.footer__l{
    flex: 0 1 40%;
    display: flex;
    flex-direction: column;
    
}

.footer__l{
    padding: 62px 0 62px 80px;

}

.footer__r{
    padding: 62px 80px 62px 0;
   
}




.footer__contacts{
    display: flex;
    gap: 37px;
}


.footer__phone a{
    font-weight: 700;
    font-size: 3.4rem;
}

.footer__phone:hover a{
    color: #33B7BC;
}

.footer__request{
    padding: 20px;
    max-width: 294px;
    margin: 30px 0 50px 0;
}
.footer__adress{
    max-width: 420px;
    margin-bottom: 70px;
}
.footer__adress p{
    font-size: 2.4rem;
    text-wrap: balance;
    font-weight: 400;
}

.footer__input-wrapper{
    display: flex;

}

.footer__input{
    flex: 0 1 70%;
}

.footer__input_btn{
    padding: 0 20px;
    flex: 0 1 25%;
}

.footer__items{
    padding: 35px 0;
    border-bottom:1px solid #272727 ;
    border-top: 1px solid #272727;
}
.companies{
    display: flex;
    justify-content: space-between;
}
.company__img{
    filter: grayscale(1);
    width: 100%;
    transition: all 0.4s ease;
    cursor: pointer;
}

.company__img:hover{
    filter: grayscale(0);
}


.footer__privacy{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.privacy__text{
    font-weight: 300;
    color: #33B7BC;
}

.privacy__text:hover{
    text-decoration: underline;
}

.privacy, .rights{
    flex: 0 1 30%;
}


.rights__text{
    font-weight: 300;
    color: #525252;
   
   
    
}



.items{
    display: flex;
    gap: 30px;
}

.item:has(.instagram) {
    display: flex;
    align-items: center;
}


.facebook, .youtube, .tiktok, .instagram{
    color: #33B7BC;
    transition: all .4s ease;
}


.facebook:hover, .youtube:hover, .tiktok:hover, .instagram:hover{
    color: #FFF;
}

@media (max-width:1024px) {
    .footer__content{
        flex-direction: column;
        justify-content: center;
    }
    .footer__l,
    .footer__r{
        padding: 32px 30px;
        align-items: center;
    }
    .footer__contacts{
        flex-direction: column;
        justify-content: center;
    }
    .footer__adress{
        text-align: center;
    }
    .footer__social{
        display: flex;
        justify-content: center;
    }
    .footer__items{
        display: none;
    }
}


@media (max-width:769px) {
    .footer__navs{
        flex-wrap: wrap;
        row-gap: 50px;
    }
    .footer__privacy{
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        padding-bottom: 30px;
    }
}


</style>
import {  defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: () => ({
        menuOpen:false,
        regions:['Dubai', 'Moscow', 'Budapest', 'Wiesbaden'],
        lang:['EN', 'RU'],
        socials:[
            {
                name:'Telegram',
                path:'telegram.svg',
                id:1,
                color:'#34AADF'
            },
            {
                name:'Whatsapp',
                path:'whatsapp.svg',
                id:2,
                color:"#43D854"
            },
        ],
        autos:[
            {
                brand:'Lamborghini',
                model:'Urus',
                price:'2 400$',
                img:'lamb_urus.jpg'
            },
            {
                brand:'BMW',
                model:'X7',
                price:'2 100$',
                img:'bmw_x7.jpg'
            },
            {
                brand:'Ferrari',
                model:'Roma',
                price:'1 800$',
                img:'ferrari_roma.png'
            },
            {
                brand:'Lamborghini',
                model:'Huracan EVO Spyder',
                price:'2 800$',
                img:'lamb_evo.jpg'
            },
            {
                brand:'Mercedes-Benz',
                model:'G-Class',
                price:'1 700$',
                img:'mers_gel.jpg'
            },
            {
                brand:'Porsche',
                model:'911 turbo',
                price:'2 000$',
                img:'porsche_911.jpg'
            },
            {
                brand:'Rolls Royce',
                model:'Ghost',
                price:'3 200$',
                img:'rolls_royce.jpg'
            },
            {
                brand:'BMW',
                model:'X7',
                price:'2 100$',
                img:'bmw_x7.jpg'
            },
            {
                brand:'Mercedes-Benz',
                model:'G-Class',
                price:'1 700$',
                img:'mers_gel.jpg'
            },
            {
                brand:'Lamborghini',
                model:'Urus',
                price:'2 400$',
                img:'lamb_urus.jpg'
            },
            {
                brand:'Ferrari',
                model:'Roma',
                price:'1 800$',
                img:'ferrari_roma.png'
            },
            {
                brand:'Rolls Royce',
                model:'Ghost',
                price:'3 200$',
                img:'rolls_royce.jpg'
            },
            {
                brand:'Lamborghini',
                model:'Huracan EVO Spyder',
                price:'2 800$',
                img:'lamb_evo.jpg'
            },
            {
                brand:'Mercedes-Benz',
                model:'G-Class',
                price:'1 700$',
                img:'mers_gel.jpg'
            },
            {
                brand:'Porsche',
                model:'911 turbo',
                price:'2 000$',
                img:'porsche_911.jpg'
            },
            {
                brand:'Mercedes-Benz',
                model:'G-Class',
                price:'1 700$',
                img:'mers_gel.jpg'
            },
            {
                brand:'Porsche',
                model:'911 turbo',
                price:'2 000$',
                img:'porsche_911.jpg'
            },
            {
                brand:'Rolls Royce',
                model:'Ghost',
                price:'3 200$',
                img:'rolls_royce.jpg'
            },
            
        ],
        companies:[
            {
                name:'Visa',
                img:'1.png'
            },
            {
                name:'MasterCard',
                img:'2.png'
            },
            {
                name:'American Express',
                img:'3.png'
            },
            {
                name:'Google Pay',
                img:'4.png'
            },
            {
                name:'Union Pay',
                img:'5.png'
            },
            {
                name:'Cash U',
                img:'6.png'
            },
            {
                name:'Giro Pay',
                img:'7.png'
            },
            {
                name:'Safety Pay',
                img:'8.png'
            },
            {
                name:'Tether',
                img:'9.png'
            },
            {
                name:'Apple Pay',
                img:'10.png'
            }
        ]
        
    })
})
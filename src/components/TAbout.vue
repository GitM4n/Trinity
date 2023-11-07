<template>
   <section class="about">
        <div class="container">
            <h2 class="about__title stolz-title">About Us</h2>
            <div class="about__inner">     
                <div class="about__numbers">
                    <ul class="numbers__items">
                        <li class="numbers__item number__year">
                            <div class="numbers__title stolz">
                                <div class="int">
                                    <span class="int1">8</span>
                                    <span class="int2">8</span>
                                </div>
                               
                                <span class="small">year</span>
                            </div>
                            <div class="numbers__text ">
                                <p class="stolz">We've come a long way from a 2-people company to winning at Webby's. </p>
                            </div>
                        </li>
                        <li class="numbers__item">
                            <div class="numbers__title stolz">
                                <div class="int">
                                    <span class="int1">72</span>
                                    <span class="int2">72</span>
                                </div>
                                <span class="small">cars</span>
                            </div>
                            <div class="numbers__text ">
                                <p class="stolz">We've come a long way from a 2-people company to winning at Webby's. </p>
                            </div>
                        </li>
                        <li class="numbers__item">
                            <div class="numbers__title stolz">
                                <div class="int">
                                    <span class="int1">190</span>
                                    <span class="int2">190</span>
                                </div>
                                <span class="small">people</span>
                            </div>
                            <div class="numbers__text ">
                                <p class="stolz">We've come a long way from a 2-people company to winning at Webby's. </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="about__quotes">
                    <blockquote class="quote">
                        <p class="quote__text">I’m with cars for over 18 years. My auto passion and attention to details will make your experience with us second to none. Guaranteed.</p>
                    </blockquote>
                    <figcaption>
                        <p class="quote__author stolz">Kirill Aliev, MBA <cite>CEO Trinity car rental boutique</cite></p>
                    </figcaption>
                </div>
            </div>
        </div>
        <div class="author-quote-img">
            <img src="../assets/author.jpg" alt="author">
        </div>     
   </section>
</template>

<script setup>

</script>

<style scoped>
.about{
    position: relative;
    padding-top: 130px;
    margin-bottom: 260px;
    
 
   
}

.about::after{
    content: '';
    position: absolute;
    background: linear-gradient(101deg, rgba(16,158,158,1) 7%, rgba(5,61,170,1) 60%, rgba(5,61,170,0) 100%) no-repeat;
    top: -30%;
    left: -60%;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 420px 300px #161619 inset;
    opacity: 0.2;
    z-index: -2;
    transform: rotate(45deg);

}

.about::before{
    content: '';
    position: absolute;
    width: 50%;
    height: 70%;
    right: -10%;
    top: -3%;
    background:url('../assets/background__logo.svg') no-repeat;
    background-size: contain;
    opacity: 0.05;
    z-index: -1;
    
}

.about__inner{
    display: flex;
    flex-direction: column;
    row-gap: 114px;
}
.about__title{
    font-size: 16rem;
    text-align: center;
    margin-bottom: 146px;
}
.numbers__items{
    max-width: 1416px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    column-gap: 10px;
    row-gap: 40px;
    flex-wrap: wrap;
}

.numbers__item{
    display: flex;
    flex-direction: column;
    gap: 31px;
    max-width: 396px;
}

.numbers__title{
    display: flex;
    align-items: end;
    gap: 15px;
}

.numbers__text p{
    font-size: 1.8rem;
    font-weight: 300;
    color: #DBDBDB;
}

.small{
    font-weight: 500;
    font-size: 2.4rem;
}

.int{
    position: relative;
}

.int1{
    line-height: 90px;
    text-stroke: 1px #22ECF3;;
    -webkit-text-stroke: 2px #22ECF3;
    font-size: 13rem;
    color: transparent;
    
    
}

.int2{
    line-height: 90px;
    position: absolute;
    left: 0;
    top: 0;
    text-stroke: 1px #22ECF3;;
    -webkit-text-stroke: 1px #22ECF3;
    font-size: 13rem;
    color: transparent;
    filter: blur(4px);
    
}

.about__quotes{
    position: relative;
    padding:  40px 100px;
    max-width: 1369px;
    margin: 0 auto;
}

.about__quotes::before,
.about__quotes::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 88px;
    background: url('../assets/quote.png') no-repeat;
    background-size: contain;

}

.about__quotes::after{
    left: auto;
    right: 0;
    top: auto;
    bottom: 100px;
    transform: rotate(360deg) scale(-1, -1);
}

.quote{
    margin-bottom: 30px;
}

.quote__text{
    font-family: Inter;
    font-weight: 800;
    font-style: italic;
    background: #109E9E;
    background: radial-gradient(circle farthest-corner at 40% center, #69f3f3 0%, #FFFFFF 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5.4rem;
    text-align: center;
    margin: 0 auto;
}

.quote__author{
    display: flex;
    flex-direction: column;
    color: #FFF;
    font-style: normal;
    font-weight: 700;
    font-size: 3.2rem;
    text-align: right;
}


.quote__author cite{
    color: #969696;
    font-size: 2rem;
    font-weight: 500;
}

.author-quote-img img{
    width: 100%;
    object-fit: cover;
}

@media (max-width:1024px) {
    .about{
        padding-top: 30px;
    }
    .about::before{
        width: 150px;
        height: 150px;
    }
    .about__title{
        font-size: 5rem;
    }



    .int1, .int2{
        font-size: 8rem;
        line-height: 50px;
    }

    .int2{
        filter: blur(2px);
    }

    .small{
        font-size: 2rem;
    }

    .numbers__item{
        gap: 20px;
    }


    .about__quotes{
        padding: 20px 30px;
    }
    .about__quotes::before,
    .about__quotes::after{
        width: 44px;
        height: 38px;
    }   

    .about__quotes::after{
        bottom: 50px;
    }
    .quote__text{
        font-size: 2.2rem;
    }
    
    .quote__author{
        font-size: 1.8rem;
    }
    .quote__author cite{
        font-size: 1.4rem;
    }
}
</style>
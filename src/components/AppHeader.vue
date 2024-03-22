<script>
    export default {
        name: 'AppHeader',
        data(){
            return {
                logo: '/images/boolean-logo.png',
                linkNav: ['Donna', 'Uomo', 'Bambino'],
                iconNav: ['fa-regular fa-user', 'fa-regular fa-heart', 'fa-solid fa-bag-shopping',]
            }
        }
    }
    
   

</script>

<template>
   <header id="site_header">
        
            <nav class="container">
                <div class="link">
                    <ul class="ul_nav" v-for="link in linkNav">
                        <li><a class="gender" href="#">{{link}}</a></li>
                    </ul>
                </div>
                <div class="logo">
                    <img width="200px" :src="logo" alt="">
                </div>
                <div class="user" >
                    <i v-for="icon in iconNav" :class="icon"></i>
                </div>
            </nav>
        
    </header>
</template>

<style>

</style>

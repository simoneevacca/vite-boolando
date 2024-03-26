<script>
import productCard from './productCard.vue';

import { state } from '../state.js';

export default {
    name: 'AppMain',
    components: {
        productCard
    },
    data() {
        return {
         
            state,
        }
    },

    methods: {
        modale(){
            console.log('ciao');
        }
    },
    mounted () {

        state.GetProduct('http://localhost:3000/products')

       
    }
}


</script>

<template>
    <main>
        <div class="container">
            <div class="row justify-content-between">

                <productCard @performModale="modale" :product="product" :key="product.id" v-for="product in state.products" />

            </div>
        </div>
    </main>


</template>

<style></style>

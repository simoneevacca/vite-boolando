<script>
import productCard from './productCard.vue';
// import { products } from '../data.js';
import { state } from '../state.js';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        productCard
    },
    data() {
        return {
            // products,
            state,
            products: []
        }
    },
    mounted () {

        

        axios.get('http://localhost:3000/products')
        .then(response => {
          console.log(response)
          this.products = response.data
        })
        console.log(this.products);
    }
}


</script>

<template>
    <main>
        <div class="container">
            <div class="row justify-content-between">

                <productCard :product="product" :key="product.id" v-for="product in products" />

            </div>
        </div>
    </main>


</template>

<style></style>

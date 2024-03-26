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

            brand: '',
            model: '',
            price: ''
        }
    },

    methods: {
        modale(id) {
            console.log('ciao', id);
            this.brand = this.state.products[id - 1].brand;
            this.model = this.state.products[id - 1].model;
            this.price = this.state.products[id - 1].price;
            

        }
    },
    mounted() {

        state.GetProduct('http://localhost:3000/products')



    }
}


</script>

<template>
    <main>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col col-4" v-for="product in state.products">

                    <productCard @performModale="modale" :product="product" :key="product.id" />



                </div>

            </div>
        </div>

        <div class="modale">
            <div>marca: {{ brand }}</div>
            <div>modello: {{ model }}</div>
            <div>Prezzo: {{ price }}</div>


        </div>
    </main>


</template>

<style></style>

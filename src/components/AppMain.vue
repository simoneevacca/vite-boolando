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

            isActive: false,
            brand: '',
            model: '',
            price: '',
            firstImage: '',
            secondImage: '',

        }
    },

    methods: {
        modale(id) {
            this.isActive = true
            console.log('ciao', id);
            this.brand = this.state.products[id - 1].brand;
            this.model = this.state.products[id - 1].model;
            this.price = this.state.products[id - 1].price;
            this.firstImage = this.state.products[id - 1].firstImage;
            this.secondImage = this.state.products[id - 1].secondImage;

        },

        closeModale() {
            this.isActive = false
            console.log(this.isActive);
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

        <div :class="{ modale: isActive }" v-show="isActive == true">
            <div class="close" @click="closeModale">X</div>
            <div class="content">
                <div class="left">
                    <img :src="firstImage" alt="">
                    <img :src="secondImage" alt="">
                    
                </div>
                <div class="right">
                    <div>Marca: {{ brand }}</div>
                    <div>Modello: {{ model }}</div>
                    <div>Prezzo: {{ price }}€</div>
                </div>
            </div>


        </div>
    </main>


</template>

<style></style>

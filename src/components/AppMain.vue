<script>
import productCard from './productCard.vue';
import { products } from '../data.js';
export default {
    name: 'AppMain',
    components: {
        productCard
    },
    data() {
        return {
            message: 'hello world',

            products


            // products: [
            //     {
            //         firstImage: "/images/1.webp",
            //         secondImage: "/images/1b.webp",
            //         discount: "-50%",
            //         sostenibilita: true,
            //         brand: "Levi's",
            //         model: "RELAXED FIT TEE UNISEX",
            //         price: "14,99",
            //         oldPrice: "25,99"
            //     },
            //     {
            //         firstImage: "/images/2.webp",
            //         secondImage: "/images/2b.webp",
            //         discount: "-30%",
            //         sostenibilita: false,
            //         brand: "Guess",
            //         model: "ROSES TEE",
            //         price: "20,99",
            //         oldPrice: "29,99"
            //     },
            //     {
            //         firstImage: "/images/3.webp",
            //         secondImage: "/images/3b.webp",
            //         discount: "-30%",
            //         sostenibilita: false,
            //         brand: "Come Zucchero Filato",
            //         model: "VOGLIA DI COLORI PASTELLO",
            //         price: "129,99",
            //         oldPrice: "104,99"
            //     },
            //     {
            //         firstImage: "/images/4.webp",
            //         secondImage: "/images/4b.webp",
            //         discount: "-50%",
            //         sostenibilita: true,
            //         brand: "Levi's",
            //         model: "TEE UNISEX",
            //         price: "14,99",
            //         oldPrice: "29,99"
            //     },
            //     {
            //         firstImage: "/images/5.webp",
            //         secondImage: "/images/5b.webp",
            //         discount: null,
            //         sostenibilita: false,
            //         brand: "Maya Deluxe",
            //         model: "STRIPE BODICE",
            //         price: "99,99",
            //         oldPrice: null
            //     },
            //     {
            //         firstImage: "/images/6.webp",
            //         secondImage: "/images/6b.webp",
            //         discount: null,
            //         sostenibilita: true,
            //         brand: "Levi's",
            //         model: "RELAXED FIT TEE UNISEX",
            //         price: "29,99",
            //         oldPrice: null
            //     },

            //],
        }
    }
}


</script>

<template>
    <main>
        <div class="container">
            <div class="row justify-content-between">
                <!-- <div class="col col-4"> -->
                    <productCard :product="product" :key="product.id" v-for="product in products" />










                    <!-- <div class="img">
                        <img :src="product.firstImage" alt="">
                        <img class="hover_fig" :src="product.secondImage" alt="">
                        <div class="banner">
                            <div class="discount" v-if="product.discount">{{product.discount}}</div>
                            <div v-show="product.sostenibilita == true" class="sustainability">Sostenibilità</div>
                        </div>
                        <div class="heart">&hearts;</div>
                    </div>
                    <div class="text">
                        <div class="brand">{{product.brand}}</div>
                        <div class="name"><strong>{{product.model}}</strong></div>
                        <div class="price">
                            <span class="actual_price">{{product.price}} &euro; </span>
                            <span class="old_price" v-if="product.discount"> {{product.oldPrice}} &euro;</span>
                        </div>
                    </div> -->
                <!-- </div> -->
            </div>
        </div>
    </main>


</template>

<style></style>

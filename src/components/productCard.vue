<script>
export default {
    name: 'productCard',
    emits: ['performModale'],
    props: {
        product: Object,
    },

    methods: {
        modale() {
            this.$emit('performModale', this.product.id)
        }
    }
}
</script>

<template>
    <div class="img">
        <img :src="product.firstImage" alt="">
        <img class="hover_fig" :src="product.secondImage" alt="">
        <div class="banner">
            <div class="discount" v-if="product.discount">{{ product.discount }}</div>
            <div v-show="product.sostenibilita == true" class="sustainability">Sostenibilità</div>
        </div>
        <div class="heart">&hearts;</div>
    </div>
    <div class="text">
        <div class="brand">{{ product.brand }}</div>
        <div class="name" @click="modale"><strong>{{ product.model }}</strong></div>
        <div class="price">
            <span class="actual_price">{{ product.price }} &euro; </span>
            <span class="old_price" v-if="product.discount"> {{ product.oldPrice }} &euro;</span>
        </div>
    </div>
</template>

<style></style>
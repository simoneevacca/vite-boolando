<script>
export default {
    name: 'productCard',
    props: {
        product: Object
    }
}
</script>

<template>

    <div class="col col-4">
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
            <div class="name"><strong>{{ product.model }}</strong></div>
            <div class="price">
                <span class="actual_price">{{ product.price }} &euro; </span>
                <span class="old_price" v-if="product.discount"> {{ product.oldPrice }} &euro;</span>
            </div>
        </div>
    </div>

</template>

<style></style>
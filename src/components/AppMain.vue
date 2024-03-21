<script>
export default {
    name: 'AppMain',
    data() {
        return {
            message: 'hello world', 
            products: [
                {
                    firstImage: "/images/1.webp",
                    secondImage: "1b.webp",
                    discount: "-50%",
                    sostenibilita: true,
                    brand: "Levi's",
                    model: "RELAXED FIT TEE UNISEX",
                    price: "14,99€",
                    oldPrice: "25,99€"
                }
            ],
        }
    }
}


</script>

<template>
{{ message }}
</template>

<style></style>

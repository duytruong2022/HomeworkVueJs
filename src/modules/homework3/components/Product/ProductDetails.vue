<template>
    <ul class="prod-specifications">
        <li v-for="(prodInfo, index) in product.specifications" :key="index">
            {{ prodInfo }}
        </li>
    </ul>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        product: Object,
    },
})
export default class ProductDetails extends Vue {}
</script>

<style lang="scss" scoped>
.prod-specifications {
    margin-bottom: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    color: #000000;
}
</style>

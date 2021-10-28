<template>
    <ul class="prod_specifications">
        <li v-for="(prodInfo, index) in product.specifications" :key="index">
            {{ prodInfo }}
        </li>
    </ul>
</template>
<script>
import { object } from 'yup/lib/locale';
export default {
    props: {
        product: object,
    },
};
</script>

<style lang="scss">
.prod_specifications {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    color: #000000;
    margin-bottom: 8px;
}
</style>

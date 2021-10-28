<template>
    <div class="prod_about_product">
        <div class="prod_description">{{ product.description }}</div>
        <ul class="prod_color">
            <li
                v-for="(color, index) in product.colors"
                :key="index"
                class="color_bd"
                :class="{ boder: color == selectedColor }"
                @click="selectColor(color)"
            >
                <div class="color" :style="{ backgroundColor: color }"></div>
            </li>
        </ul>
    </div>
</template>
<script>
import { object } from 'yup/lib/locale';
export default {
    props: {
        product: object,
    },
    data() {
        return {
            selectedColor: 'red',
        };
    },
    methods: {
        selectColor(color) {
            this.selectedColor = color;
        },
    },
};
</script>
<style lang="scss">
.prod_about_product {
    .prod_description {
        margin-top: 12px;
        margin-bottom: 23px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #000000;
    }
    .prod_color {
        display: flex;
        list-style: none;
        margin-top: 23px;
        padding: 0px;
        margin-bottom: 0px;
    }
}
</style>

<template>
    <div class="prod-about-product">
        <div class="prod-description">{{ product.description }}</div>
        <ul class="prod-color">
            <li
                v-for="(color, index) in product.colors"
                :key="index"
                class="color-bd"
                :class="{ boder: color == selectedColor }"
                @click="selectColor(color)"
            >
                <div class="color" :style="{ backgroundColor: color }"></div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        product: Object,
    },
})
export default class ProductAbout extends Vue {
    selectedColor = 'red';

    selectColor(color: string): void {
        this.selectedColor = color;
    }
}
</script>
<style lang="scss" scoped>
.prod-about-product {
    .prod-description {
        margin-top: 12px;
        margin-bottom: 23px;
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 30px;
        align-items: center;
        color: #000000;
    }
}
.prod-color {
    display: flex;
    list-style: none;
    margin-top: 23px;
    padding: 0px;
    margin-bottom: 0px;
    .color-bd {
        width: 32px;
        height: 32px;
        margin-right: 7px;
        text-align: center;
        border-radius: 50%;
        .color {
            width: 24px;
            height: 24px;
            margin: 2px;
            border-radius: 50%;
        }
    }
    .boder {
        border: 2px solid #0156ff;
    }
}
</style>

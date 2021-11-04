<template>
    <div class="shopping-cart-distcount">
        <div class="distcount">
            Apply Discount Code
            <i
                class="distcount-drop-icon fas"
                :class="{ 'fa-angle-up': isPlay, 'fa-angle-down': !isPlay }"
                @click="compact()"
            ></i>
        </div>
        <div v-show="isPlay">
            <div class="distcount-option">Enter discount code</div>
            <el-input placeholder="Enter discount code" v-model="input"></el-input>
            <button class="apply-discount-button">
                <div>Apply Discount</div>
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ShoppingCartDistcount extends Vue {
    input = '';
    isPlay = true;

    compact(): void {
        this.isPlay = !this.isPlay;
    }
}
</script>
<style lang="scss" scoped>
.shopping-cart-distcount {
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 18.5px;
    margin-bottom: 29px;
    .distcount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 3%;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: #000000;
        .distcount-drop-icon {
            font-size: 14px;
            line-height: 15px;
        }
    }
    .distcount-option {
        height: 38px;
        padding-top: 7px;
        margin-top: 5px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        align-items: center;
        color: #000000;
    }
    .apply-discount-button {
        width: 100%;
        height: 40px;
        margin-top: 19px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        text-align: center;
        color: #0156ff;
        background: none;
        border: 2px solid #0156ff;
        border-radius: 30px;
    }
}
</style>

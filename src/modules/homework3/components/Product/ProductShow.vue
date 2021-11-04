<template>
    <div class="product-show">
        <div class="product-img">
            <div class="product-img-icon">
                <img src="../../../../assets/images/homework3/icon/prod_hear_icon.svg" />
                <img src="../../../../assets/images/homework3/icon/prod_trac_icon.svg" />
                <img src="../../../../assets/images/homework3/icon/prod_mail_icon.svg" />
            </div>
            <div class="blocka">
                <el-carousel>
                    <el-carousel-item v-for="(imge, index) in product.img" :key="index">
                        <img :src="require('@/assets/images/homework3/' + imge)" />
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="product-logo">
            <img
                class="image"
                src="../../../../assets/images/homework3/product/prod_logo.png"
            />
            <div class="product-text">
                <p class="text">
                    own it now, up to 6 months interest free
                    <a class="link" href="#">learn more</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        product: Object,
    },
};
</script>
<style lang="scss" scoped>
.product-show {
    padding: 20px;
}
.product-img {
    display: flex;
    .blocka {
        width: 75%;
        height: 430px;
    }
    .product-img-icon {
        display: flex;
        flex-direction: column;
        margin-top: 35px;
        margin-left: 0.5%;
        margin-right: 5%;
    }
}
.product-logo {
    margin-top: 32px;
    margin-left: 12%;
    display: flex;
    .image {
        padding: 0px 11px;
        height: 27px;
        width: inherit;
        border-right: 3px solid #00aeb8;
    }
    .product-text {
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 120.5%;
        display: flex;
        align-items: center;
        height: 28px;
        width: 180px;
        margin-left: 11px;
        color: #000000;
        .text {
            margin: 0px;
        }
        .link {
            border-bottom: 1px solid #000000;
        }
    }
}
</style>

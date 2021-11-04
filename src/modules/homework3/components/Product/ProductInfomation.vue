<template>
    <div class="prod-info">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Laptops</el-breadcrumb-item>
            <el-breadcrumb-item>MSI WS Series</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="prod-name">
            {{ product.name }}
        </div>
        <div class="prod-review">
            <a class="link" href="#">Be the first to review this product</a>
        </div>
        <router-view :product="product" />
        <div class="prod-question">
            <div class="prod-contact">
                Have a Question? <a class="link" href="#">Contact Us</a>
            </div>
            <div class="prod-code">{{ product.code }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        product: Object,
    },
})
export default class ProductInfomation extends Vue {}
</script>

<style lang="scss" scoped>
.prod-info {
    width: 100%;
    padding-left: 25%;
    padding-top: 67px;
    padding-bottom: 166px;
    padding-right: 11%;
    .prod-name {
        margin-top: 25px;
        margin-bottom: 7.5px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        color: #000000;
    }
    .prod-review {
        margin-top: 7.5px;
        margin-bottom: 23px;
        .link {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            align-items: center;
            color: #0156ff;
        }
    }
    .prod-question {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        .prod-contact {
            display: flex;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            align-items: center;
            color: #000000;
            .link {
                font-weight: 400;
                margin-left: 5px;
                line-height: 11px;
                color: #0156ff;
                border-bottom: 1px solid #0156ff;
            }
        }
        .prod-code {
            font-family: Poppins;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 18px;
            align-items: center;
            text-align: center;
            color: #000000;
        }
    }
}
</style>

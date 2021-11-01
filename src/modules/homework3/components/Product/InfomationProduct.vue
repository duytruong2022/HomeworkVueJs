<template>
    <div class="prod_info">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Laptops</el-breadcrumb-item>
            <el-breadcrumb-item>MSI WS Series</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="prod_name">
            {{ product.name }}
        </div>
        <div class="prod_review">
            <a href="#">Be the first to review this product</a>
        </div>
        <router-view :product="product" />
        <div class="prod_question">
            <div class="prod_contact">Have a Question? <a href="#">Contact Us</a></div>
            <div class="prod_code">{{ product.code }}</div>
        </div>
    </div>
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
.prod_info {
    width: 100%;
    padding-left: 25%;
    padding-top: 67px;
    padding-bottom: 166px;
    padding-right: 11%;
    .el-breadcrumb {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
    }
    .prod_name {
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        color: #000000;
        margin-top: 25px;
        margin-bottom: 7.5px;
    }
    .prod_review {
        margin-top: 7.5px;
        margin-bottom: 23px;
        a {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            display: flex;
            align-items: center;
            color: #0156ff;
        }
    }
    .prod_question {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        .prod_contact {
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            display: flex;
            align-items: center;
            color: #000000;
            a {
                font-weight: 400;
                margin-left: 5px;
                line-height: 11px;
                color: #0156ff;
                border-bottom: 1px solid #0156ff;
            }
        }
        .prod_code {
            font-family: Poppins;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 18px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #000000;
        }
    }
}
</style>

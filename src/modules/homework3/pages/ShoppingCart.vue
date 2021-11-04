<template>
    <Contact />
    <Topbar />
    <div class="shopping-cart-breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Login</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="shoppong-cart-title">Shopping Cart</div>
    <div class="shoppong-cart-layout">
        <el-row gutter="14">
            <el-col :md="17" :lg="17" :xl="17">
                <el-row>
                    <el-col :md="12" :lg="12" :xl="12" class="shoppong-cart-parameter">
                        Item
                    </el-col>
                    <el-col :md="4" :lg="4" :xl="4" class="shoppong-cart-parameter">
                        Price
                    </el-col>
                    <el-col :md="3" :lg="3" :xl="3" class="shoppong-cart-parameter">
                        Qty
                    </el-col>
                    <el-col :md="4" :lg="4" :xl="4" class="shoppong-cart-parameter">
                        Subtotal
                    </el-col>
                    <el-col
                        :md="1"
                        :lg="1"
                        :xl="1"
                        class="shoppong-cart-parameter"
                    ></el-col>
                    <ProductShoppingCart
                        v-for="(product, index) in products"
                        :key="index"
                        :product="product"
                    />
                </el-row>
                <div class="shoppong-cart-button">
                    <div>
                        <router-link
                            :to="{ name: 'homework3', param: {} }"
                            class="buttons shopping-button"
                            tag="button"
                        >
                            Continue Shopping
                        </router-link>
                        <button class="buttons cart-button" @click="clearCart()">
                            Clear Shopping Cart
                        </button>
                    </div>
                    <button class="buttons cart-button" @click="updateCart()">
                        Update Shopping Cart
                    </button>
                </div>
            </el-col>
            <el-col :md="7" :lg="7" :xl="7">
                <SummrayShoppingCart />
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { carts } from '../store';
import { ICartItem } from '../type';
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
import ProductShoppingCart from '../components/ShoppingCart/ShoppngCartProduct.vue';
import SummrayShoppingCart from '../components/ShoppingCart/ShoppingCartSummay.vue';
export default {
    components: {
        Topbar,
        Contact,
        ProductShoppingCart,
        SummrayShoppingCart,
    },
    methods: {
        clearCart(): void {
            carts.clearCart();
        },
        updateCart(): void {
            carts.updateCart();
        },
    },
    computed: {
        products(): Array<ICartItem> {
            return carts.getAlllistCarts;
        },
    },
};
</script>
<style lang="scss">
.shopping-cart-breadcrumb {
    margin-top: 21px;
    margin-left: 10%;
    margin-bottom: 19px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    color: #000000;
}
.shoppong-cart-title {
    margin-left: 10%;
    margin-bottom: 29px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    align-items: center;
    color: #000000;
}
.shoppong-cart-layout {
    margin-right: 10%;
    margin-left: 10%;
    .shoppong-cart-parameter {
        margin-bottom: 13px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        color: #000000;
    }
    .shoppong-cart-button {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        .buttons {
            width: 200px;
            height: 40px;
            padding-top: 8px;
            padding-bottom: 8px;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
            border-radius: 50px;
        }
        .shopping-button {
            border: 2px solid #a2a6b0;
            color: #a2a6b0;
            background: none;
            margin-right: 10px;
        }
        .cart-button {
            border: none;
            color: #ffffff;
            background-color: #000000;
        }
    }
}
</style>

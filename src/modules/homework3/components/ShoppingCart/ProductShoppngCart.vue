<template>
    <div class="product-shopping-cart">
        <el-row>
            <el-col :md="4" :lg="4" :xl="4">
                <router-link
                    class="product_img"
                    :to="{ name: 'product-info', params: { id: product.id } }"
                >
                    <img
                        class="product-shopping-cart-img"
                        :src="require('@/assets/images/homework3/' + product.image)"
                    />
                </router-link>
            </el-col>
            <el-col :md="8" :lg="8" :xl="8">
                <div class="product-shopping-cart-description">
                    {{ product.description }}
                </div>
            </el-col>
            <el-col :md="4" :lg="4" :xl="4">
                <div class="product-shopping-cart-price">${{ product.price }}.00</div>
            </el-col>
            <el-col :md="3" :lg="3" :xl="3">
                <div class="product-shopping-quarity">
                    {{ product.quantity }}
                    <div class="product-shopping-quarity-edit">
                        <i class="fas fa-angle-up" @click="numProductUp(product.id)"></i>
                        <i
                            class="fas fa-angle-down"
                            @click="numProductDown(product.id)"
                        ></i>
                    </div>
                </div>
            </el-col>
            <el-col :md="4" :lg="4" :xl="4">
                <div class="product-shopping-cart-price">${{ product.subtotal }}.00</div>
            </el-col>
            <el-col :md="1" :lg="1" :xl="1">
                <div class="product-shopping-icongroup">
                    <img
                        class="product-shopping-icon"
                        src="../../../../assets/images/homework3/icon/shoppingcart-delete-icon.svg"
                    />
                    <img
                        class="product-shopping-icon"
                        src="../../../../assets/images/homework3/icon/shoppingcart-edit-icon.svg"
                    />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { product } from '../../store';
export default {
    props: {
        product: Object,
    },
    methods: {
        numProductUp(id: string): void {
            product.upQuantityCart(id);
        },
        numProductDown(id: string): void {
            product.downQuantityCart(id);
        },
    },
};
</script>

<style lang="scss" scoped>
.product-shopping-cart {
    border-top: 1px solid #cacdd8;
    border-bottom: 1px solid #cacdd8;
    padding: 25px 4px 25px 0px;
    .product-shopping-cart-img {
        width: 80%;
    }
    .product-shopping-cart-description {
        width: 95%;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        color: #000000;
    }
    .product-shopping-cart-price {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: left;
        color: #000000;
    }
    .product-shopping-quarity {
        width: 70px;
        height: 50px;
        margin-left: 3%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        align-items: center;
        text-align: center;
        background: #f5f7ff;
        border-radius: 5px;
        .product-shopping-quarity-edit {
            display: flex;
            flex-direction: column;
            font-weight: 200;
        }
    }
    .product-shopping-icongroup {
        display: flex;
        flex-direction: column;
        .product-shopping-icon {
            margin-bottom: 6px;
            width: 27px;
        }
    }
}
</style>

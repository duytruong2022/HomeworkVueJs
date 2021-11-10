<template>
    <el-row gutter="1">
        <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            :xl="4"
            v-for="(product, index) in products"
            :key="index"
        >
            <div class="product">
                <div class="product-stock">
                    <div v-if="!product.isSock" class="in-stock">
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/success_icon.svg"
                        />
                        in stock
                    </div>
                    <div v-else class="out-stock">
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/failure_icon.svg"
                        />
                        out stock
                    </div>
                </div>
                <router-link
                    class="product-img"
                    :to="{ name: 'about-product', params: { id: product.id } }"
                >
                    <img
                        class="image"
                        :src="require('@/assets/images/homework3/' + product.img[0])"
                    />
                </router-link>
                <div class="reviews">
                    <div class="start">
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/star.svg"
                        />
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/star.svg"
                        />
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/star.svg"
                        />
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/star.svg"
                        />
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/star_none.svg"
                        />
                    </div>
                    <div class="review">Review ({{ product.reviews }})</div>
                </div>
                <div class="product-description">{{ product.description }}</div>
                <div class="real-price">${{ product.realPrice }}</div>
                <div class="sale-price">${{ product.salePrice }}</div>
            </div>
        </el-col>
    </el-row>
</template>
<script lang="ts">
import { carts } from '../../store';
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        products: Object,
    },
})
export default class CaculateListViewProduct extends Vue {
    addToCart(id: string): void {
        const el = { id: id };
        carts.addToCart(el);
        alert('success');
    }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 0px) {
    .product {
        padding: 7px 25px 7px 25px;
    }
}
@media screen and (min-width: 420px) {
    .product {
        padding-left: 100px;
        padding-right: 100px;
    }
}
@media screen and (min-width: 620px) {
    .product {
        padding-left: 170px;
        padding-right: 170px;
    }
}
@media screen and (min-width: 768px) {
    .product {
        padding: 7px 25px 7px 25px;
    }
}
.product {
    font-family: Poppins;
    font-style: normal;
    .in-stock {
        font-size: 10px;
        line-height: 210%;
        align-items: center;
        color: #78a962;
    }
    .out-stock {
        font-size: 10px;
        line-height: 210%;
        align-items: center;
        color: red;
        .image {
            height: 10px;
            width: 10px;
        }
    }
    .product-img {
        margin-top: 7px;
        .image {
            width: 150px;
            height: 150px;
        }
    }
    .reviews {
        margin-top: 10px;
        display: flex;
        .start {
            padding-top: 2px;
            margin-right: 10px;
            .image {
                margin-right: 2px;
            }
        }
        .review {
            font-size: 12px;
            line-height: 210%;
            align-items: center;
            text-align: center;
            color: #a2a6b0;
        }
    }
    .product-description {
        display: inline-block;
        font-size: 13px;
        line-height: 19px;
        align-items: flex-end;
        word-wrap: break-word;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        color: #000000;
    }
    .real-price {
        margin-right: 6px;
        padding-top: 13px;
        align-items: center;
        text-decoration-line: line-through;
        color: #666666;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140%;
    }
    .sale-price {
        padding-top: 2px;
        padding-bottom: 10px;
        align-items: center;
        font-weight: bolder;
        font-size: 16px;
        line-height: 140%;
    }
}
</style>

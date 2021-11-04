<template>
    <div class="product">
        <el-row gutter="16">
            <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
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
            </el-col>
            <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
                <div class="product-name">{{ product.name }}</div>
                <div class="product-description">{{ product.description }}</div>
                <div class="product-price">
                    <div class="real-price">${{ product.realPrice }}</div>
                    <div class="sale-price">${{ product.salePrice }}</div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn" @click="addToCart(product.id)">
                        <img
                            class="image"
                            src="../../../../assets/images/homework3/icon/shopping_icon.svg"
                        />
                        Add To Cart
                    </button>
                </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="product-stock">
                    <div v-if="!isSock" class="in-stock">
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
                <div class="product-info">
                    <div class="info">
                        <div class="name-info">CPU</div>
                        <div>{{ product.CPU }}</div>
                    </div>
                    <div class="Featured info">
                        <div class="name-info">Featured</div>
                        <div>{{ product.Featured }}</div>
                    </div>
                    <div class="IOPorts info">
                        <div class="name-info">I/O Ports</div>
                        <div>{{ product.IOPorts }}</div>
                    </div>
                </div>
                <div class="icon-pro">
                    <img
                        class="image"
                        src="../../../../assets/images/homework3/icon/mail_icon.svg"
                    />
                    <img
                        class="image"
                        src="../../../../assets/images/homework3/icon/trac_icon.svg"
                    />
                    <img
                        class="image"
                        src="../../../../assets/images/homework3/icon/hear_icon.svg"
                    />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts">
import { carts } from '../../store';
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        product: Object,
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
.product {
    margin-top: 7.5px;
    margin-bottom: 7.5px;
    margin-left: 5px;
    margin-right: 5px;
    padding-bottom: 35px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
}
.product-img {
    margin-left: 3%;
    margin-right: 9%;
    margin-bottom: 21px;
    .image {
        width: 100%;
        height: 100%;
    }
}
.reviews {
    margin-left: 7%;
    display: flex;
    .start {
        margin-right: 10px;
        .image {
            margin-right: 2px;
        }
    }
}
.product-name {
    margin-top: 60px;
    margin-bottom: 22px;
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    color: #000000;
}
.product-description {
    margin-top: 10.5px;
    margin-bottom: 18px;
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    align-items: center;
    color: #000000;
}
.product-price {
    display: flex;
    margin-top: 8px;
    margin-bottom: 16px;
    font-family: Poppins;
    .real-price {
        margin-right: 6px;
        padding-top: 4px;
        align-items: center;
        text-decoration-line: line-through;
        color: #666666;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140%;
    }
    .sale-price {
        align-items: center;
        font-weight: bolder;
        font-size: 16px;
        line-height: 140%;
    }
}
.add-to-cart {
    margin-top: 50px;
    background-color: white;
    .add-to-cart-btn {
        padding-top: 8.5px;
        padding-bottom: 8.5px;
        padding-left: 16.5px;
        padding-right: 16.5px;
        display: flex;
        background-color: white;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        color: #0156ff;
        border: 2px solid #0156ff;
        box-sizing: border-box;
        border-radius: 50px;
        .image {
            margin-right: 10px;
        }
    }
}
.product-stock {
    margin-top: 21px;
    margin-right: 20px;
    display: flex;
    justify-content: right;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 210%;
    align-items: center;
    text-align: center;
    .image {
        height: 10px;
        width: 10px;
    }
    .in-stock {
        color: #78a962;
    }
    .out-stock {
        color: red;
    }
}
.product-info {
    margin-top: 56px;
    margin-left: 15%;
    width: 70%;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    align-items: center;
    color: #000000;
    .info {
        margin-top: 6px;
        margin-bottom: 6px;
        padding-left: 8px;
        display: flex;
        .name-info {
            width: 60%;
        }
    }
    .Featured {
        background-color: #f5f7ff;
    }
}
.icon-pro {
    margin-top: 56px;
    display: flex;
    justify-content: right;
    margin-right: 20px;
    .image {
        margin-left: 6px;
    }
}
</style>

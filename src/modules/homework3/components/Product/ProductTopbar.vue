<template>
    <div class="prod-topbar">
        <el-row gutter="1">
            <el-col :xs="13" :sm="13" :md="13" :lg="13" :xl="13">
                <div class="list-page">
                    <div class="page" v-for="page in pages" :key="page.name">
                        <router-link
                            :class="{
                                'page-selected': page.name == pageSelected,
                                'page-normal': page.name != pageSelected,
                            }"
                            @click="selectPage(page.name)"
                            :to="{ name: page.link, param: {} }"
                            >{{ page.name }}</router-link
                        >
                    </div>
                </div>
            </el-col>
            <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="prod-add-to-cart">
                    <div class="prod-price">
                        On Sale from
                        <div class="prod-saleprice">{{ product.salePrice }}</div>
                    </div>
                    <div class="prod-count">
                        {{ numProduct }}
                        <div class="prod-count-icon">
                            <i class="fas fa-angle-up" @click="numProductUp()"></i>
                            <i class="fas fa-angle-down" @click="numProductDown()"></i>
                        </div>
                    </div>
                    <button
                        class="prod-button btn btn-primary btn-lg btn-block rounded-pill"
                        @click="addToCart(product.id, numProduct)"
                    >
                        Add to Cart
                    </button>
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
export default class ProductTopbar extends Vue {
    pages = [
        {
            name: 'About Product',
            link: 'about-product',
        },
        {
            name: 'Details',
            link: 'details-product',
        },
        {
            name: 'Specs',
            link: 'specs-product',
        },
    ];

    numProduct = 1;

    pageSelected = 'About Product';

    numProductUp(): void {
        if (this.numProduct < 100) this.numProduct++;
    }

    numProductDown(): void {
        if (this.numProduct > 0) this.numProduct--;
    }

    selectPage(page: string): void {
        this.pageSelected = page;
    }

    addToCart(id: string, num: number): void {
        const el = { id: id, num: num };
        carts.addToCart(el);
        alert('success');
    }
}
</script>
<style lang="scss" scoped>
.prod-topbar {
    background-color: #ffffff;
    border-bottom: 1px solid rgb(204, 204, 204);
}
.list-page {
    margin-left: 23%;
    margin-top: 41px;
    margin-bottom: 39px;
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    align-items: center;
    text-align: center;
    .page {
        margin-left: 15px;
        margin-right: 15px;
    }
    .page-selected {
        color: #000000;
        border-bottom: 2px solid blue;
    }
    .page-normal {
        color: #666666;
    }
}
.prod-add-to-cart {
    display: flex;
    padding-left: 35px;
    .prod-price {
        margin-top: 41px;
        margin-bottom: 39px;
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        text-align: center;
        color: #000000;
        .prod-saleprice {
            margin-left: 5px;
            font-weight: 600;
        }
    }
    .prod-count {
        width: 70px;
        height: 50px;
        border-radius: 5px;
        margin-top: 27px;
        margin-bottom: 24px;
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
        .prod-count-icon {
            display: flex;
            flex-direction: column;
            font-weight: 200;
        }
    }
    .prod-button {
        margin-top: 26px;
        margin-bottom: 20px;
        margin-left: 5%;
        height: 55px;
        padding: 8px 30px;
    }
}
</style>

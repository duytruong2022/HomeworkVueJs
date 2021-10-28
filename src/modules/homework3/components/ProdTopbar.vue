<template>
    <div class="prod_topbar">
        <el-row gutter="1">
            <el-col :xs="13" :sm="13" :md="13" :lg="13" :xl="13">
                <div class="list_page">
                    <div v-for="page in pages" :key="page.name">
                        <a
                            :href="page.link"
                            :class="{
                                page_selected: page.name == pageSelected,
                                page_normal: page.name != pageSelected,
                            }"
                            @click="selectPage(page.name)"
                            >{{ page.name }}</a
                        >
                    </div>
                </div>
            </el-col>
            <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <div class="prod_add_to_cart">
                    <div class="prod_price">
                        On Sale from
                        <div class="prod_saleprice">{{ product.salePrice }}</div>
                    </div>
                    <div class="prod_count">
                        {{ numProduct }}
                        <div>
                            <i class="fas fa-angle-up" @click="numProductUp()"></i>
                            <i class="fas fa-angle-down" @click="numProductDown()"></i>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-lg btn-block rounded-pill">
                        Add to Cart
                    </button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { object } from 'yup/lib/locale';
export default {
    props: {
        product: object,
    },
    data() {
        return {
            pages: [
                {
                    name: 'About Product',
                    link: '#',
                },
                {
                    name: 'Details',
                    link: '#',
                },
                {
                    name: 'Specs',
                    link: '#',
                },
            ],
            numProduct: '100',
            pageSelected: 'About Product',
        };
    },
    methods: {
        numProductUp() {
            if (this.numProduct < 100) return this.numProduct++;
        },
        numProductDown() {
            if (this.numProduct > 0) return this.numProduct--;
        },
        selectPage(page) {
            this.pageSelected = page;
        },
    },
};
</script>
<style lang="scss">
.prod_topbar {
    background-color: #ffffff;
    border-bottom: 1px solid rgb(204, 204, 204);
}
.list_page {
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 23%;
    margin-top: 41px;
    margin-bottom: 39px;
    div {
        margin-left: 15px;
        margin-right: 15px;
    }
    .page_selected {
        color: #000000;
        border-bottom: 2px solid blue;
    }
    .page_normal {
        color: #666666;
    }
}
.prod_add_to_cart {
    display: flex;
    padding-left: 35px;
    .prod_price {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        margin-top: 41px;
        margin-bottom: 39px;
        .prod_saleprice {
            margin-left: 5px;
            font-weight: 600;
        }
    }
    .prod_count {
        width: 70px;
        height: 50px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        display: flex;
        align-items: center;
        text-align: center;
        background: #f5f7ff;
        border-radius: 5px;
        margin-top: 27px;
        margin-bottom: 24px;
        margin-left: 3%;
        padding: 10px;
        justify-content: space-between;
        div {
            display: flex;
            flex-direction: column;
            font-weight: 200;
        }
    }
    button {
        margin-top: 26px;
        margin-bottom: 20px;
        margin-left: 5%;
        height: 55px;
        padding: 8px 30px;
    }
}
</style>

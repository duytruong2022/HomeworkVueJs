<template>
    <!-- Navbar -->
    <nav class="topbars">
        <div class="navbar-custom">
            <div class="topbars-logo">
                <router-link :to="{ name: 'homework3', param: {} }"
                    ><img src="../../../assets/images/homework3/logo.svg" alt=""
                /></router-link>
            </div>
            <div
                class="topbars-list-category"
                v-for="category in categorys"
                :key="category.name"
            >
                <a :href="category.link">{{ category.name }}</a>
            </div>
            <div class="topbars-deals">
                <button class="topbars-deals-button">Our Deals</button>
            </div>
            <div class="topbars-op-icon">
                <div class="topbars-gg-search" @click="showSearch()">
                    <img src="../../../assets/images/homework3/icon/gg_search.svg" />
                </div>
                <router-link
                    class="topbars-shoppng-cart"
                    :to="{ name: 'cart', param: {} }"
                >
                    <el-badge :value="numberProductinCart" class="item">
                        <img
                            src="../../../assets/images/homework3/icon/shopping_cart.svg"
                        />
                    </el-badge>
                </router-link>
            </div>
            <div class="topbars-customer-img">
                <img src="../../../assets/images/homework3/customer.png" />
            </div>
        </div>
        <div class="search" v-show="viewSearch">
            <el-input v-model="searchText" placeholder="what are you looking for" />
            <el-button
                type="primary"
                icon="el-icon-search"
                class="search-button"
                @click="search(searchText)"
            >
                Search
            </el-button>
        </div>
    </nav>
    <!-- end navbar-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { carts, filters } from '../store';

@Options({
    computed: {
        numberProductinCart() {
            return carts.getNumberProductinCart;
        },
    },
})
export default class TopBar extends Vue {
    categorys = [
        {
            name: 'Laptops',
            link: '#',
        },
        {
            name: 'Desktop PCs',
            link: '#',
        },
        {
            name: 'Networking Devices',
            link: '#',
        },
        {
            name: 'Printers & Scanners',
            link: '#',
        },
        {
            name: 'PC Parts',
            link: '#',
        },
        {
            name: 'All Other Products',
            link: '#',
        },
        {
            name: 'Repairs',
            link: '#',
        },
    ];

    viewSearch = false;
    searchText = '';

    showSearch(): void {
        this.viewSearch = !this.viewSearch;
    }

    search(): void {
        this.$router.push({ path: '/homework3', query: { s: this.searchText } });
        filters.updateSearch(this.searchText);
        filters.updateproductFilter();
        filters.updateListShowProducts();
    }
}
</script>

<style lang="scss" scoped>
.topbars {
    border: 1px solid #e3ebf6;
}
.navbar-custom {
    display: flex;
    border: none;
}
.topbars-logo {
    margin-left: 7.7%;
    margin-top: 11px;
    margin-bottom: 12px;
    margin-right: 0.91%;
}
.topbars-list-category {
    margin-right: 0.651%;
    margin-left: 0.651%;
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    align-items: center;
    text-align: center;
}
.topbars-deals {
    margin-left: 0.651%;
    margin-top: 27px;
    margin-bottom: 26px;
    .topbars-deals-button {
        padding: 8px 26px;
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        text-align: center;
        color: #0156ff;
        border: 2px solid #0156ff;
        box-sizing: border-box;
        border-radius: 50px;
        background-color: #fff;
    }
}

.topbars-op-icon {
    margin-left: 9.16%;
    display: flex;
    .topbars-gg-search {
        margin-top: 39px;
        margin-bottom: 34px;
    }
    .topbars-shoppng-cart {
        margin-top: 36px;
        margin-bottom: 28px;
        padding-left: 39%;
    }
}
.topbars-customer-img {
    margin-top: 28px;
    margin-bottom: 28px;
    margin-left: 3.8%;
    margin-right: 7.7%;
}
.search {
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 5px;
    border-radius: 25px;
    display: flex;
    .search-button {
        margin-left: 15px;
    }
}
</style>

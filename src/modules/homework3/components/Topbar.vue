<template>
    <!-- Navbar -->
    <nav class="topbars">
        <div class="navbar-custom">
            <div class="menu">
                <div class="topbars-logo">
                    <router-link :to="{ name: 'list', param: {} }"
                        ><img src="../../../assets/images/homework3/logo.svg" alt=""
                    /></router-link>
                </div>
                <img
                    @click="changePlay()"
                    class="dropdowm_menu"
                    src="../../../assets/images/homework3/icon/list_icon.svg"
                />
                <div class="menu_item">
                    <div
                        class="topbars-list-category"
                        v-for="category in categorys"
                        :key="category.name"
                    >
                        <a :href="category.link">{{ category.name }}</a>
                    </div>
                </div>
                <div class="topbars-deals">
                    <button class="topbars-deals-button">Our Deals</button>
                </div>
            </div>
            <div class="customer">
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
    isPlay = false;

    showSearch(): void {
        this.viewSearch = !this.viewSearch;
    }

    search(): void {
        this.$router.push({ path: '/homework3', query: { s: this.searchText } });
        filters.updateSearch(this.searchText);
        filters.updateproductFilter();
        filters.updateListShowProducts();
    }

    changePlay(): void {
        this.isPlay = !this.isPlay;
    }
}
</script>

<style lang="scss" scoped>
.topbars {
    border-bottom: 1px solid #e3ebf6;
    margin-left: 8.5%;
    margin-right: 8.5%;
}
.navbar-custom {
    display: flex;
    border: none;
    justify-content: space-between;
}
@media screen and (min-width: 1100px) {
    .menu {
        display: flex;
        width: 80%;
        .topbars-list-category {
            display: flex;
        }
        .dropdowm_menu {
            display: none;
        }
        .menu_item {
            width: 75%;
            display: flex;
        }
    }
}
@media screen and (max-width: 1100px) {
    .menu {
        display: flex;
        width: 30%;
        .dropdowm_menu {
            width: 45px;
            height: 45px;
            margin-top: 25px;
        }
        .none-play-menu {
            display: none;
        }
        .menu_item {
            width: 1500px;
        }
    }
}
.menu {
    .topbars-logo {
        margin-top: 11px;
        margin-bottom: 12px;
        margin-right: 3px;
    }
    .menu_item {
        .topbars-list-category {
            margin-right: 1%;
            margin-left: 1%;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            align-items: center;
            text-align: center;
        }
    }
    .topbars-deals {
        margin-left: 15px;
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
}

.customer {
    display: flex;
    width: 150px;
    justify-content: space-between;
    .topbars-op-icon {
        margin-left: 0px;
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

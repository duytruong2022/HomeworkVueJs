<template>
    <div class="topbars">
        <!-- Navbar -->
        <nav>
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
                    <div class="topbars-gg-search">
                        <img src="../../../assets/images/homework3/icon/gg_search.svg" />
                    </div>
                    <router-link
                        class="topbars-shoppng-cart"
                        :to="{ name: 'cart', param: {} }"
                    >
                        <img
                            src="../../../assets/images/homework3/icon/shopping-cart.svg"
                        />
                    </router-link>
                </div>
                <div class="topbars-customer-img">
                    <img src="../../../assets/images/homework3/customer.png" />
                </div>
            </div>
        </nav>
        <!-- end navbar-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            categorys: [
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
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.topbar {
    height: 92px;
}
.navbar-custom {
    display: flex;
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
        margin-top: 32px;
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
</style>

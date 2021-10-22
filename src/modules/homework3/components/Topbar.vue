<template>
    <div class="topbar">
        <!-- Navbar -->
        <nav>
            <div class="navbar-custom">
                <div class="logo">
                    <a href="#"
                        ><img src="../../../assets/images/homework3/logo.svg" alt=""
                    /></a>
                </div>
                <div
                    class="list_category"
                    v-for="category in categorys"
                    :key="category.name"
                >
                    <a :href="category.link">{{ category.name }}</a>
                </div>
                <div class="deals">
                    <button>Our Deals</button>
                </div>
                <div class="op_icon">
                    <div class="gg_search">
                        <img src="../../../assets/images/homework3/icon/gg_search.svg" />
                    </div>
                    <div class="shoppng_cart">
                        <img
                            src="../../../assets/images/homework3/icon/shopping-cart.svg"
                        />
                    </div>
                </div>
                <div class="customer_img">
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
.logo {
    margin-left: 7%;
    margin-top: 11px;
    margin-bottom: 12px;
    margin-right: 0.91%;
}
.list_category {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 0.651%;
    margin-left: 0.651%;
}
.deals {
    margin-left: 0.651%;
    margin-top: 27px;
    margin-bottom: 26px;
}
.deals button {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 8px 26px;
    border: 2px solid #0156ff;
    box-sizing: border-box;
    border-radius: 50px;
    color: #0156ff;
    background-color: #fff;
}
.op_icon {
    margin-left: 9.16%;
    display: flex;
}
.op_icon .gg_search {
    margin-top: 39px;
    margin-bottom: 34px;
}
.op_icon .shoppng_cart {
    margin-top: 32px;
    margin-bottom: 28px;
    padding-left: 39%;
}
.customer_img {
    margin-top: 28px;
    margin-bottom: 28px;
    margin-left: 3.8%;
}
</style>

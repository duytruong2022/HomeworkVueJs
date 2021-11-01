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
                        <button class="buttons shopping-button">Continue Shopping</button>
                        <button class="buttons cart-button">Clear Shopping Cart</button>
                    </div>
                    <button class="buttons cart-button">Update Shopping Cart</button>
                </div>
            </el-col>
            <el-col :md="7" :lg="7" :xl="7">
                <SummrayShoppingCart />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
import ProductShoppingCart from '../components/ShoppingCart/ProductShoppngCart.vue';
import SummrayShoppingCart from '../components/ShoppingCart/SummayShoppingCart.vue';
export default {
    components: {
        Topbar,
        Contact,
        ProductShoppingCart,
        SummrayShoppingCart,
    },
    data() {
        return {
            products: [
                {
                    img: require('@/assets/images/homework3/product/product.png'),
                    code: 'SKU D5515AI',
                    name: 'MSI MPG Trident 3 ',
                    description:
                        'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
                    realPrice: '$3,300.00',
                    salePrice: 329900,
                    CPU: 'N/A',
                    Featured: 'N/A',
                    IOPorts: 'N/A',
                    specifications: [
                        'Intel Core i7-10700F',
                        'Intel H410',
                        'WHITE',
                        'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                        'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                        '2 total slots (64GB Max)',
                        '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                        'Gaming Keyboard GK30 + Gaming Mouse GM11',
                        '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                        'Intel WGI219Vethernet (10/100/1000M)',
                        'AX200 (WIFI 6)+BT5.1',
                        'PSU 330W',
                        'Fan Cooler',
                    ],
                    colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
                    isSock: true,
                    rating: '4.00',
                    reviews: '4',
                },
                {
                    img: require('@/assets/images/homework3/product/product.png'),
                    code: 'SKU D5515AI',
                    name: 'MSI MPG Trident 3 ',
                    description:
                        'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
                    realPrice: '$3,300.00',
                    salePrice: 329900,
                    CPU: 'N/A',
                    Featured: 'N/A',
                    IOPorts: 'N/A',
                    specifications: [
                        'Intel Core i7-10700F',
                        'Intel H410',
                        'WHITE',
                        'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                        'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                        '2 total slots (64GB Max)',
                        '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                        'Gaming Keyboard GK30 + Gaming Mouse GM11',
                        '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                        'Intel WGI219Vethernet (10/100/1000M)',
                        'AX200 (WIFI 6)+BT5.1',
                        'PSU 330W',
                        'Fan Cooler',
                    ],
                    colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
                    isSock: true,
                    rating: '4.00',
                    reviews: '4',
                },
            ],
        };
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

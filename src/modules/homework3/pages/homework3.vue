<template>
    <div>
        <Contact />
        <Topbar />
        <div class="banner">
            <img src="../../../assets/images/homework3/baner.png" />
        </div>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item>Laptops</el-breadcrumb-item>
                <el-breadcrumb-item>Everyday Use Notebooks</el-breadcrumb-item>
                <el-breadcrumb-item>MSI Prestige Series</el-breadcrumb-item>
                <el-breadcrumb-item>MSI WS Series</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="title">MSI PS Series (20)</div>
        <div class="layouts">
            <el-row :gutter="6">
                <el-col :md="4" :lg="4" :xl="4">
                    <ListFiler />
                </el-col>
                <el-col :md="20" :lg="20" :xl="20">
                    <div class="product_header">
                        <div class="num_product">Items 1 - 35 of 61</div>
                        <div class="show_op">
                            <div class="sort_op">
                                <label>Sort By: </label>
                                <select name="" id="">
                                    <option value="" selected>Option 1</option>
                                    <option value="">Option 2</option>
                                </select>
                            </div>
                            <div class="num_show">
                                <label>Show </label>
                                <select name="" id="">
                                    <option value="" selected>35 per page</option>
                                    <option value="">40 per page</option>
                                </select>
                            </div>
                            <div class="pr_icon">
                                <img
                                    src="../../../assets/images/homework3/icon/op_icon.svg"
                                />
                                <img
                                    src="../../../assets/images/homework3/icon/list_icon.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="product_list">
                        <Product
                            v-for="product in products"
                            :key="product.name"
                            :product="product"
                        />
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
import ListFiler from '../components/listFilter.vue';
import Product from '../components/Product.vue';
export default {
    components: {
        Topbar,
        Contact,
        ListFiler,
        Product,
    },
    data() {
        return {
            products: [
                {
                    img: require('@/assets/images/homework3/product/1.png'),
                    name: 'SKU D5515AI',
                    description:
                        'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
                    realPrice: '$499.00',
                    salePrice: '$499.00',
                    CPU: 'N/A',
                    Featured: 'N/A',
                    IOPorts: 'N/A',
                    isSock: true,
                    rating: '4.00',
                    reviews: '4',
                },
            ],
        };
    },
};
</script>
<style>
.banner {
    margin-top: 8px;
    text-align: center;
}
.banner img {
    width: 82%;
    height: 100px;
}
.breadcrumb {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-top: 19px;
    margin-left: 9%;
    margin-bottom: 19px;
}
.title {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #000;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 9%;
    margin-bottom: 30px;
}
.layouts {
    margin-left: 9%;
    margin-right: 9%;
}
button {
    text-align: center;
}
.product_header {
    display: flex;
    justify-content: space-between;
}
.show_op {
    display: flex;
}
.num_product {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 210%;
    display: flex;
    align-items: center;
    color: #a2a6b0;
}
.sort_op,
.num_show {
    height: 50px;
    border: 2px solid #cacdd8;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 11px;
    margin-right: 11px;
    font-family: Poppins;
    font-style: normal;
    font-size: 13px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
}
.sort_op select,
.num_show select {
    border: none;
    font-weight: 600;
    color: #000;
}
.sort_op label,
.num_show label {
    border: none;
    font-weight: 600;
    color: #a2a6b0;
}
.pr_icon img {
    margin-top: 9px;
    margin-bottom: 9px;
    margin-left: 5px;
    margin-right: 5px;
}
.product_list {
    margin-top: 13.5px;
    margin-left: 5px;
    margin-right: 5px;
}
</style>

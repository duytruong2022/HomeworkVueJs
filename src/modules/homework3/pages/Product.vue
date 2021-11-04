<template>
    <div>
        <Contact />
        <Topbar />
        <ProdTopbar :product="product" />
        <el-row gutter="1">
            <el-col :xs="13" :sm="13" :md="13" :lg="13" :xl="13">
                <div class="prod-left-layout">
                    <ProdInfo :product="product" />
                    <div class="prod-more-info">+ MORE INFORMATION</div>
                </div>
            </el-col>
            <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <router-view>
                    <ProdShow :product="product" />
                </router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { product } from '../store';
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
import ProdTopbar from '../components/Product/ProductTopbar.vue';
import ProdInfo from '../components/Product/ProductInfomation.vue';
import ProdShow from '../components/Product/ProductShow.vue';
@Options({
    components: {
        Topbar,
        Contact,
        ProdTopbar,
        ProdInfo,
        ProdShow,
    },
})
export default class Product extends Vue {
    el = product.getAllProduct;
    tempProduct = this.el.find((item) => item.id === this.$route.params.id);
    product = this.tempProduct ?? {
        id: '2',
        img: ['product/2_1.png', 'product/3_1.png', 'product/2_1.png'],
        code: 'SKU D5515AI',
        name: 'MSI MPG Trident 2 ',
        category: 'MSI ALL-IN-ONE PCS',
        description:
            'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
        realPrice: 3300,
        salePrice: 3299,
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
        reviews: 4,
    };
}
</script>
<style lang="scss" scoped>
.prod-left-layout {
    margin-bottom: 200px;
    background-color: #f5f7ff;
    .prod-more-info {
        margin-left: 15%;
        padding-bottom: 59px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        color: #000000;
    }
}
</style>

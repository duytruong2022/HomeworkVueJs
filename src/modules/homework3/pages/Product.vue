<template>
    <div>
        <Contact />
        <Topbar />
        <ProdTopbar :product="product" />
        <el-row gutter="1">
            <el-col :xs="13" :sm="13" :md="13" :lg="13" :xl="13">
                <div class="prod_left_layout">
                    <ProdInfo :product="product" />
                    <div class="prod_more_info">+ MORE INFORMATION</div>
                </div>
            </el-col>
            <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                <ProdShow :product="product" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
import ProdTopbar from '../components/ProdTopbar.vue';
import ProdInfo from '../components/ProdInfo.vue';
import ProdShow from '../components/ProdShow.vue';
export default {
    components: {
        Topbar,
        Contact,
        ProdTopbar,
        ProdInfo,
        ProdShow,
    },
    data() {
        return {
            product: {
                img: require('@/assets/images/homework3/product/product.png'),
                code: 'SKU D5515AI',
                name: 'MSI MPG Trident 3 ',
                description:
                    'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
                realPrice: '$3,300.00',
                salePrice: '$3,299.00',
                CPU: 'N/A',
                Featured: 'N/A',
                IOPorts: 'N/A',
                info: [
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
        };
    },
};
</script>
<style lang="scss">
.prod_left_layout {
    background-color: #f5f7ff;
    margin-bottom: 200px;
    .prod_more_info {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        color: #000000;
        margin-left: 20%;
        padding-bottom: 59px;
    }
}
</style>

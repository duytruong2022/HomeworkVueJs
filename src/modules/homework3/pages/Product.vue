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

<script>
import { product } from '../store';
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
import ProdTopbar from '../components/Product/ProductTopbar.vue';
import ProdInfo from '../components/Product/ProductInfomation.vue';
import ProdShow from '../components/Product/ProductShow.vue';
export default {
    components: {
        Topbar,
        Contact,
        ProdTopbar,
        ProdInfo,
        ProdShow,
    },
    computed: {
        product() {
            const el = product.getAllProduct;
            return el.find((item) => item.id === this.$route.params.id);
        },
    },
};
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

<template>
    <div>
        <Contact />
        <Topbar />
        <div class="list-view-catalog-banner">
            <img
                class="list-view-catalog-banner-img"
                src="../../../assets/images/homework3/baner.png"
            />
        </div>
        <div class="list-view-catalog-breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item>Laptops</el-breadcrumb-item>
                <el-breadcrumb-item>Everyday Use Notebooks</el-breadcrumb-item>
                <el-breadcrumb-item>MSI Prestige Series</el-breadcrumb-item>
                <el-breadcrumb-item>MSI WS Series</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="list-view-catalog-title">MSI PS Series (20)</div>
        <div class="list-view-catalog-layouts">
            <el-row :gutter="6">
                <el-col :md="5" :lg="5" :xl="5">
                    <ListFiler :listFiler="listFilters" />
                </el-col>
                <el-col :md="19" :lg="19" :xl="19">
                    <CaculateTop :listFilters="listFilters" @itemper-page="ItemperPage" />
                    <div
                        class="list-view-catalog-product-product-list"
                        id="caculete-produ"
                    >
                        <router-view :products="products" />
                        <el-pagination
                            :page-size="numItemperPage"
                            :pager-count="7"
                            layout="prev, pager, next"
                            :total="numProductFilter"
                            @current-change="selectPage"
                        >
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Topbar from '../components/Topbar.vue';
import Contact from '../components/Contact.vue';
import ListFiler from '../components/Catalog/CaculoateListViewListFilter.vue';
import CaculateTop from '../components/Catalog/CaculateListViewTop.vue';
import { filters } from '../store';
import { IListFilter, IProduct } from '../type';
@Options({
    props: {
        search: String,
    },
    components: {
        Topbar,
        Contact,
        ListFiler,
        CaculateTop,
    },
    computed: {
        products(): Array<IProduct> {
            filters.updateListShowProducts();
            return filters.getListShowProducts;
        },
        listFilters(): IListFilter {
            return { ...filters.getAllFilter };
        },
        numProductFilter(): number {
            return filters.getNumberofProductFilter;
        },
    },
    created() {
        filters.updateSearch(this.search);
        filters.updateproductFilter();
        filters.updateListShowProducts();
    },
})
export default class ListViewCaculate extends Vue {
    search!: string;
    numItemperPage = '3';
    selectPage(param: number): void {
        filters.updatePageSelectd(param);
        filters.updateListShowProducts();
    }

    ItemperPage(param: string): void {
        this.numItemperPage = param;
    }
}
</script>
<style lang="scss" scoped>
.list-view-catalog-banner {
    margin-top: 8px;
    text-align: center;
    .list-view-catalog-banner-img {
        width: 82%;
        height: 100px;
    }
}

.list-view-catalog-breadcrumb {
    margin-top: 19px;
    margin-left: 9%;
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
.list-view-catalog-title {
    display: flex;
    margin-left: 9%;
    margin-bottom: 30px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    align-items: center;
    text-align: center;
    color: #000;
}
@media screen and (min-width: 1300px) {
    .list-view-catalog-layouts {
        margin-left: 9%;
        margin-right: 9%;
    }
}
@media screen and (max-width: 1300px) {
    .list-view-catalog-layouts {
        margin-left: 2%;
        margin-right: 2%;
    }
}
@media screen and (max-width: 1000px) {
    .list-view-catalog-layouts {
        margin-left: 9%;
        margin-right: 9%;
    }
}
@media screen and (max-width: 800px) {
    .list-view-catalog-layouts {
        margin-left: 2%;
        margin-right: 2%;
    }
}
.list-view-catalog-product-product-list {
    margin-top: 13.5px;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
}
</style>

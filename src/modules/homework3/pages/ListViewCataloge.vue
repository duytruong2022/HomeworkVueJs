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
                    <div class="list-view-catalog-product-header">
                        <div class="list-view-catalog-productnum-product">
                            Items {{ (numberPageSelect - 1) * numItemperPage + 1 }} -
                            {{ numberPageSelect * numItemperPage }} of
                            {{ numProductFilter }}
                        </div>
                        <div class="list-view-catalog-product-show-op">
                            <div class="list-view-catalog-product-op-box">
                                <label class="list-view-catalog-product-laber"
                                    >Sort By:
                                </label>
                                <select
                                    class="list-view-catalog-product-select"
                                    v-model="sort"
                                    placeholder="Sort"
                                >
                                    <option
                                        class="list-view-catalog-product-op-box"
                                        value="name"
                                        selected
                                    >
                                        Name
                                    </option>
                                    <option
                                        class="list-view-catalog-product-op-box"
                                        value="code"
                                    >
                                        Code
                                    </option>
                                    <option
                                        class="list-view-catalog-product-op-box"
                                        value="price"
                                    >
                                        Price
                                    </option>
                                </select>
                            </div>
                            <div class="list-view-catalog-product-op-box">
                                <label class="list-view-catalog-product-laber"
                                    >Show
                                </label>
                                <select
                                    class="list-view-catalog-product-select"
                                    v-model="numItemperPage"
                                >
                                    <option value="3" selected>3 per page</option>
                                    <option value="5">5 per page</option>
                                </select>
                            </div>
                            <div class="list-view-catalog-product-pr-icon">
                                <img
                                    src="../../../assets/images/homework3/icon/op_icon.svg"
                                />
                                <img
                                    src="../../../assets/images/homework3/icon/list_icon.svg"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="list-view-catalog-product-category-selected">
                        <div
                            v-for="(item, index) in listFilters.filterName.listCategorys"
                            :key="index"
                        >
                            <div class="list-view-catalog-product-op-box">
                                <div>{{ item.name }}</div>
                                <div class="list-view-catalog-product-category-num">
                                    ({{ item.quantity }})
                                </div>
                                <img
                                    class="list-view-catalog-product-img"
                                    src="../../../assets/images/homework3/icon/delete_icon.svg"
                                    @click="clearCategory(item.id)"
                                />
                            </div>
                        </div>
                        <div
                            class="list-view-catalog-product-op-box"
                            @click="clearAll()"
                            v-show="numCategory"
                        >
                            Clear All
                        </div>
                    </div>
                    <div
                        class="list-view-catalog-product-product-list"
                        id="caculete-produ"
                    >
                        <CaculeteProdu
                            v-for="(product, index) in products"
                            :key="index"
                            :product="product"
                        />
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
import CaculeteProdu from '../components/Catalog/CaculateListViewProduct.vue';
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
        CaculeteProdu,
    },
    computed: {
        products(): Array<IProduct> {
            return filters.getListShowProducts;
        },
        listFilters(): IListFilter {
            return { ...filters.getAllFilter };
        },
        numCategory(): number {
            return filters.getNumberCatagorySelected;
        },
        numProductFilter(): number {
            return filters.getNumberofProductFilter;
        },
        numberPageSelect(): number {
            return filters.getNumberPageSelect;
        },
    },
    watch: {
        sort() {
            filters.SortProductFilter(this.sort);
            filters.updateListShowProducts();
        },
        numItemperPage() {
            if (this.numItemperPage === '3') filters.updateNumberItemperPage(3);
            else filters.updateNumberItemperPage(5);
            filters.updateListShowProducts();
        },
    },
    created() {
        filters.updateSearch(this.search);
        filters.updateproductFilter();
        filters.updateListShowProducts();
    },
})
export default class ListViewCaculate extends Vue {
    sort = '';
    numItemperPage = '3';
    search!: string;
    clearCategory(id: string): void {
        filters.clearCategory(id);
        filters.updateFilter();
        filters.updateproductFilter();
        filters.updateListShowProducts();
        filters.updateNumFiler();
        filters.updateNumberCatagorySelected();
    }

    clearAll(): void {
        filters.clearAllCategory();
        filters.updateproductFilter();
        filters.updateListShowProducts();
        filters.updateNumFiler();
        filters.updateNumberCatagorySelected();
    }

    selectPage(param: number): void {
        filters.updatePageSelectd(param);
        filters.updateListShowProducts();
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
.list-view-catalog-layouts {
    margin-left: 9%;
    margin-right: 9%;
    .list-view-catalog-product-header {
        margin-left: 8px;
        margin-right: 8px;
        display: flex;
        justify-content: space-between;
    }
    .list-view-catalog-product-category-selected {
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 10px;
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        align-items: center;
        color: #000000;
        .list-view-catalog-product-op-box {
            height: 30px;
            padding: 11px;
            margin-right: 11px;
            border: 2px solid #cacdd8;
            box-sizing: border-box;
            border-radius: 2px;
        }
        .list-view-catalog-product-category-num {
            margin-left: 2px;
            font-weight: 400;
            color: #a2a6b0;
        }
        .list-view-catalog-product-img {
            margin-left: 10px;
        }
    }
    .list-view-catalog-product-show-op {
        display: flex;
        .pr_icon img {
            margin-top: 3px;
            margin-bottom: 3px;
            margin-left: 5px;
            margin-right: 5px;
        }
    }
    .list-view-catalog-product-num-product {
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 210%;
        align-items: center;
        color: #a2a6b0;
    }
    .list-view-catalog-product-op-box {
        height: 40px;
        display: flex;
        padding: 11px;
        margin-right: 11px;
        font-family: Poppins;
        font-style: normal;
        font-size: 13px;
        line-height: 24px;
        align-items: center;
        text-align: center;
        border: 2px solid #cacdd8;
        box-sizing: border-box;
        border-radius: 2px;
        .list-view-catalog-product-select {
            font-weight: 600;
            border: none;
            color: #000;
        }
        .list-view-catalog-product-laber {
            font-weight: 600;
            border: none;
            color: #a2a6b0;
        }
    }
}

.list-view-catalog-product-product-list {
    margin-top: 13.5px;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
}
</style>

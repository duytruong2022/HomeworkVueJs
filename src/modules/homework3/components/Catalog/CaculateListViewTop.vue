<template>
    <div class="list-view-catalog-product-header">
        <div class="list-view-catalog-productnum-product">
            Items {{ (numberPageSelect - 1) * numItemperPage + 1 }} -
            {{ numberPageSelect * numItemperPage }} of
            {{ numProductFilter }}
        </div>
        <div class="list-view-catalog-product-show-op">
            <div class="list-view-catalog-product-op-box">
                <label class="list-view-catalog-product-laber">Sort By: </label>
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
                    <option class="list-view-catalog-product-op-box" value="code">
                        Code
                    </option>
                    <option class="list-view-catalog-product-op-box" value="price">
                        Price
                    </option>
                </select>
            </div>
            <div class="list-view-catalog-product-op-box">
                <label class="list-view-catalog-product-laber">Show </label>
                <select class="list-view-catalog-product-select" v-model="numItemperPage">
                    <option value="3" selected>3 per page</option>
                    <option value="5">5 per page</option>
                </select>
            </div>
            <router-link
                :to="{
                    name: 'grid',
                    params: {},
                }"
            >
                <div
                    class="product-pr-icon"
                    @click="SelectProductShow('grid')"
                    :class="{
                        selected: selectShowOption === 'grid',
                        'none-selected': selectShowOption !== 'grid',
                    }"
                >
                    <i class="el-icon-s-grid"></i>
                </div>
            </router-link>
            <router-link
                :to="{
                    name: 'list',
                    params: {},
                }"
            >
                <div
                    class="product-pr-icon"
                    @click="SelectProductShow('list')"
                    :class="{
                        selected: selectShowOption === 'list',
                        'none-selected': selectShowOption !== 'list',
                    }"
                >
                    <i class="el-icon-s-fold"></i>
                </div>
            </router-link>
        </div>
    </div>
    <div class="list-view-catalog-product-category-selected">
        <div v-for="(item, index) in listFilters.filterName.listCategorys" :key="index">
            <div class="list-view-catalog-product-op-box">
                <div>{{ item.name }}</div>
                <div class="list-view-catalog-product-category-num">
                    ({{ item.quantity }})
                </div>
                <img
                    class="list-view-catalog-product-img"
                    src="../../../../assets/images/homework3/icon/delete_icon.svg"
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
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { filters } from '../../store';
@Options({
    props: {
        search: String,
        listFilters: Object,
    },
    computed: {
        numProductFilter(): number {
            return filters.getNumberofProductFilter;
        },
        numberPageSelect(): number {
            return filters.getNumberPageSelect;
        },
        numCategory(): number {
            return filters.getNumberCatagorySelected;
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
            this.$emit('itemper-page', this.numItemperPage);
        },
    },
})
export default class ListViewCaculate extends Vue {
    numItemperPage = '3';
    sort = '';
    selectShowOption = 'list';
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

    SelectProductShow(show: string): void {
        this.selectShowOption = show;
    }
}
</script>
<style lang="scss" scoped>
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
    .product-pr-ico {
        width: 19px;
        height: 19px;
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
    .product-pr-icon {
        font-size: 26px;
        margin-right: 2px;
    }
    .selected {
        color: #000;
    }
    .none-selected {
        color: #a2a6b0;
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
</style>

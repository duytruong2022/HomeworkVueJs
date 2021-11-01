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
                    <ListFiler
                        :listFiler="listFiler"
                        @add-category="addCategory"
                        @add-price="addPrice"
                        @clear-filter="clearAll"
                        @update-filter="updateFilter"
                    />
                </el-col>
                <el-col :md="19" :lg="19" :xl="19">
                    <div class="list-view-catalog-product-header">
                        <div class="list-view-catalog-productnum-product">
                            Items 1 - 35 of 61
                        </div>
                        <div class="list-view-catalog-product-show-op">
                            <div class="list-view-catalog-product-op-box">
                                <label class="list-view-catalog-product-laber"
                                    >Sort By:
                                </label>
                                <select class="list-view-catalog-product-select">
                                    <option value="" selected>Option 1</option>
                                    <option value="">Option 2</option>
                                </select>
                            </div>
                            <div class="list-view-catalog-product-op-box">
                                <label class="list-view-catalog-product-laber"
                                    >Show
                                </label>
                                <select class="list-view-catalog-product-select">
                                    <option value="" selected>35 per page</option>
                                    <option value="">40 per page</option>
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
                            v-for="(item, index) in listFiler.filterName.listCategorys"
                            :key="index"
                        >
                            <div
                                v-if="item.selected"
                                class="list-view-catalog-product-op-box"
                            >
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
                        <div class="list-view-catalog-product-op-box" @click="clearAll()">
                            Clear All
                        </div>
                    </div>
                    <div class="list-view-catalog-product-product-list">
                        <CaculeteProdu
                            v-for="(product, index) in products"
                            :key="index"
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
import ListFiler from '../components/Catalog/ListFilterListViewCataloge.vue';
import CaculeteProdu from '../components/Catalog/ProductListViewCaculate.vue';
export default {
    components: {
        Topbar,
        Contact,
        ListFiler,
        CaculeteProdu,
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
            listFiler: {
                category: {
                    title: 'Category',
                    listCategorys: [
                        {
                            id: 1,
                            name: 'CUSTOM PCS',
                            quantity: 15,
                            selected: true,
                        },
                        {
                            id: 2,
                            name: 'MSI ALL-IN-ONE PCS',
                            quantity: 45,
                            selected: true,
                        },
                        {
                            id: 3,
                            name: 'HP/COMPAQ PCS',
                            quantity: 1,
                            selected: false,
                        },
                    ],
                },
                price: {
                    title: 'Price',
                    listPrices: [
                        {
                            id: 1,
                            min: 0,
                            max: 1000000,
                            quantity: 19,
                            selected: false,
                        },
                        {
                            id: 2,
                            min: 1000000,
                            max: 2000000,
                            quantity: 21,
                            selected: false,
                        },
                        {
                            id: 3,
                            min: 2000000,
                            max: 3000000,
                            quantity: 9,
                            selected: false,
                        },
                        {
                            id: 4,
                            min: 3000000,
                            max: 4000000,
                            quantity: 6,
                            selected: false,
                        },
                        {
                            id: 5,
                            min: 4000000,
                            max: 5000000,
                            quantity: 3,
                            selected: false,
                        },
                        {
                            id: 6,
                            min: 5000000,
                            max: 6000000,
                            quantity: 1,
                            selected: false,
                        },
                        {
                            id: 7,
                            min: 6000000,
                            max: 7000000,
                            quantity: 1,
                            selected: false,
                        },
                        {
                            id: 8,
                            min: 7000000,
                            quantity: 1,
                            selected: false,
                        },
                    ],
                },
                color: {
                    title: 'Color',
                    colors: ['black', 'red'],
                },
                filterName: {
                    title: 'Filter Name',
                    num: 0,
                    listCategorys: [],
                    listPrices: [],
                },
            },
        };
    },
    methods: {
        clearCategory(id) {
            for (const l of this.listFiler.category.listCategorys) {
                if (l.id === id) {
                    l.selected = false;
                }
            }
        },
        clearAll() {
            for (const l of this.listFiler.category.listCategorys) {
                l.selected = false;
            }
            for (const l of this.listFiler.price.listPrices) {
                l.selected = false;
            }
            this.listFiler.filterName.listCategorys = [];
            this.listFiler.filterName.listPrices = [];
        },
        addCategory(id) {
            for (const l of this.listFiler.category.listCategorys) {
                if (l.id === id) {
                    l.selected = true;
                }
            }
            console.log(id);
        },
        addPrice(id) {
            for (const l of this.listFiler.price.listPrices) {
                if (l.id === id) {
                    l.selected = true;
                    console.log('a');
                }
            }
            console.log(id);
        },
        updateFilter() {
            const f = this.listFiler.category.listCategorys.filter(
                (item) => item.selected === true,
            );
            this.listFiler.filterName.listCategorys = f;
            const g = this.listFiler.price.listPrices.filter(
                (item) => item.selected === true,
            );
            console.log(f);
            this.listFiler.filterName.listPrices = g;
        },
    },
    watch: {
        listFiler: {
            handler: function () {
                console.log('num');
                this.listFiler.filterName.num =
                    this.listFiler.filterName.listCategorys.length +
                    this.listFiler.filterName.listPrices.length;
            },
            deep: true,
        },
    },
};
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
    display: flex;
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
}
</style>

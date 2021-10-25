<template>
    <div class="menu">
        <div class="filters">Filters</div>
        <button type="button" class="btn btn-outline-secondary rounded-pill">
            Clear Filter
        </button>
        <div class="list_filter">
            <Filter v-for="(filter, index) in listFiler" :key="index" :filter="filter" />
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block rounded-pill">
            <div>Apply Filter (2)</div>
        </button>
    </div>
</template>

<script>
import Filter from './filter.vue';

export default {
    components: {
        Filter,
    },
    data() {
        return {
            listFiler: [
                {
                    title: 'Category',
                    listOptions: [
                        {
                            op: 'CUSTOM PCS',
                            quantity: 15,
                        },
                        {
                            op: 'MSI ALL-IN-ONE PCS',
                            quantity: 45,
                        },
                        {
                            op: 'HP/COMPAQ PCS',
                            quantity: 1,
                        },
                    ],
                },
                {
                    title: 'Price',
                    listOptions: [
                        {
                            op: '$0.00 - $1,000,000',
                            quantity: 19,
                        },
                        {
                            op: '$1,000,000 - $2,000,000',
                            quantity: 21,
                        },
                        {
                            op: '$2,000,000 - $3,000,000',
                            quantity: 9,
                        },
                        {
                            op: '$3,000,000 - $4,000,000',
                            quantity: 6,
                        },
                        {
                            op: '$4,000,000 - $5,000,000',
                            quantity: 3,
                        },
                        {
                            op: '$5,000,000 - $5,000,000',
                            quantity: 1,
                        },
                        {
                            op: '$6,000,000 - $7,000,000',
                            quantity: 1,
                        },
                        {
                            op: '$7,000,000 And Above',
                            quantity: 1,
                        },
                    ],
                },
                {
                    title: 'Color',
                    colors: ['black', 'red'],
                },
                {
                    title: 'Filter Name',
                },
            ],
        };
    },
};
</script>

<style>
.menu {
    background-color: #f5f7ff;
    padding-bottom: 13px;
}
.filters {
    width: 100%;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    justify-content: center;
    padding-top: 13px;
}
.menu button {
    width: 85.5%;
    margin-left: 6.8%;
    margin-right: 7.7%;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 13px;
}
</style>

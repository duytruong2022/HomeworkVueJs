<template>
    <div class="menu">
        <div class="filters">Filters</div>
        <button
            type="button"
            class="filter-button btn btn-outline-secondary rounded-pill"
            @click="clearFilter()"
        >
            <div class="button-title">Clear Filter</div>
        </button>
        <div class="list_filter">
            <Filter v-for="(filter, index) in listFiler" :key="index" :filter="filter" />
        </div>
        <button
            type="button"
            class="filter-button btn btn-primary btn-lg btn-block rounded-pill"
            @click="updateFilter()"
        >
            <div class="button-title">Apply Filter ({{ listFiler.filterName.num }})</div>
        </button>
    </div>
</template>

<script lang="ts">
import Filter from './CatalogeListViewFilter.vue';
import { filters } from '../../store';

export default {
    components: {
        Filter,
    },
    props: {
        listFiler: Object,
    },
    methods: {
        clearFilter(): void {
            filters.clearAllCategory();
            filters.updateproductFilter();
            filters.updateNumFiler();
            filters.updateNumberCatagorySelected();
        },
        updateFilter(): void {
            filters.updateFilter();
            filters.updateproductFilter();
            filters.updateNumFiler();
            filters.updateNumberCatagorySelected();
        },
    },
};
</script>

<style lang="scss" scoped>
.menu {
    background-color: #f5f7ff;
    padding-bottom: 13px;
    .filter-button {
        width: 85.5%;
        margin-top: 13px;
        margin-left: 6.8%;
        margin-right: 7.7%;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        text-align: center;
        .button-title {
            width: 100%;
        }
    }
    .filters {
        width: 100%;
        padding-top: 13px;
        display: flex;
        justify-content: center;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        align-items: center;
        text-align: center;
        color: #000000;
    }
}
</style>

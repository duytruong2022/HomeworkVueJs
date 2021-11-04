<template>
    <div class="menu">
        <div class="filters">Filters</div>
        <button
            type="button"
            class="btn btn-outline-secondary rounded-pill"
            @click="clearFilter()"
        >
            <div>Clear Filter</div>
        </button>
        <div class="list_filter">
            <Filter v-for="(filter, index) in listFiler" :key="index" :filter="filter" />
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block rounded-pill">
            <div @click="updateFilter()">
                Apply Filter ({{ listFiler.filterName.num }})
            </div>
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
        clearFilter() {
            filters.clearAllCategory();
        },
        updateFilter() {
            filters.updateFilter();
        }
    },
};
</script>

<style lang="scss">
.menu {
    background-color: #f5f7ff;
    padding-bottom: 13px;
    button {
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
        div {
            width: 100%;
        }
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
}
</style>

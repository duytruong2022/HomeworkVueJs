<template>
    <div class="filter">
        <div class="filter_title">
            {{ filter.title }}
            <i class="fas fa-angle-up"></i>
        </div>
        <ul v-if="filter.listOptions" class="list_options">
            <li v-for="(item, index) in filter.listOptions" :key="index" class="op">
                <div>{{ item.op }}</div>
                <div>{{ item.quantity }}</div>
            </li>
        </ul>
        <div v-if="filter.colors">
            <el-radio-group
                v-model="radio"
                v-for="(color, index) in filter.colors"
                :key="index"
                class="list_color list_options"
                :style="{ backgroundColor: color }"
            >
                <el-radio :label="color"></el-radio>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
import { object } from 'yup/lib/locale';
export default {
    props: {
        filter: object,
    },
    data() {
        return {
            radio: '1',
        };
    },
};
</script>

<style>
.filter_title {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-left: 6.8%;
    margin-right: 8.5%;
    justify-content: space-between;
    margin-top: 17px;
}
.list_options {
    list-style: none;
    padding: 0px;
    margin-top: 6px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 210%;
    align-items: center;
    color: #000000;
}
.op {
    margin-left: 6.8%;
    margin-right: 8.5%;
    display: flex;
    justify-content: space-between;
}
.list_color {
    display: flex;
    margin-left: 6.8%;
    margin-right: 8.5%;
}
.color {
    list-style: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 6px;
    display: flex;
}
.el-radio__label {
    display: none;
}
</style>

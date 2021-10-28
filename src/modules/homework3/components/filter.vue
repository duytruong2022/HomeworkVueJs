<template>
    <div class="filter">
        <div class="filter_title">
            {{ filter.title }}
            <i
                class="fas"
                :class="{ 'fa-angle-up': isPlay, 'fa-angle-down': !isPlay }"
                @click="compact()"
            ></i>
        </div>
        <div :class="{ display_no: !isPlay }">
            <ul v-if="filter.listCategorys" class="list_options">
                <li
                    v-for="(item, index) in filter.listCategorys"
                    :key="index"
                    class="op"
                    @click="addCategory(item.id)"
                >
                    <div>{{ item.name }}</div>
                    <div>{{ item.quantity }}</div>
                </li>
            </ul>
            <ul v-if="filter.listPrices" class="list_options">
                <li
                    v-for="(item, index) in filter.listPrices"
                    :key="index"
                    class="op"
                    @click="addPrice(item.id)"
                >
                    <div>
                        ${{ item.min }} <span v-if="!item.min">.00 </span>
                        <span v-if="item.max">- ${{ item.max }}</span>
                        <span v-else>And About</span>
                    </div>
                    <div>{{ item.quantity }}</div>
                </li>
            </ul>
            <ul v-if="filter.colors" class="list_color">
                <li
                    v-for="(color, index) in filter.colors"
                    :key="index"
                    class="color_bd"
                    :class="{ boder: color == selectedColor }"
                    @click="selectColor(color)"
                >
                    <div class="color" :style="{ backgroundColor: color }"></div>
                </li>
            </ul>
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
            isPlay: true,
            isSelect: false,
            selectedColor: 'red',
        };
    },
    methods: {
        compact() {
            this.isPlay = !this.isPlay;
        },
        selectColor(color) {
            this.selectedColor = color;
        },
        addCategory(id) {
            this.$emit('add-category', id);
            console.log(id);
        },
        addPrice(id) {
            this.$emit('add-price', id);
            console.log(id);
        },
    },
};
</script>

<style lang="scss">
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
    list-style: none;
    padding: 0px;
    display: flex;
    margin-left: 6.8%;
    margin-right: 8.5%;
    margin-top: 10px;
}
.color_bd {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 7px;
    text-align: center;
    .color {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin: 2px;
    }
}

.display_no {
    display: none;
}
.boder {
    border: 2px solid #0156ff;
}
</style>

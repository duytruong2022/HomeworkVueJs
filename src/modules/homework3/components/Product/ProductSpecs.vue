<template>
    <div class="prod_specs">
        <div class="prod_CPU info">
            <div class="prod_name_info info">CPU</div>
            <div class="info">{{ product.CPU }}</div>
        </div>
        <div class="prod_Featured info">
            <div class="prod_name_info info">Featured</div>
            <div class="info">{{ product.Featured }}</div>
        </div>
        <div class="prod_IOPorts info">
            <div class="prod_name_info info">I/O Ports</div>
            <div class="info">{{ product.IOPorts }}</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        product: Object,
    },
};
</script>

<style lang="scss" scoped>
.prod_specs {
    width: 70%;
    margin-bottom: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    align-items: center;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #cacdd8;
    .info {
        padding-top: 6px;
        padding-bottom: 6px;
        padding-left: 8px;
        display: flex;
        .prod_name_info {
            width: 35%;
        }
    }
    .prod_Featured {
        background-color: #f5f7ff;
    }
}
</style>

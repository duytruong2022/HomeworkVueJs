<template>
    <div class="prod_specs">
        <div class="prod_CPU">
            <div class="prod_name_info">CPU</div>
            <div>{{ product.CPU }}</div>
        </div>
        <div class="prod_Featured">
            <div class="prod_name_info">Featured</div>
            <div>{{ product.Featured }}</div>
        </div>
        <div class="prod_IOPorts">
            <div class="prod_name_info">I/O Ports</div>
            <div>{{ product.IOPorts }}</div>
        </div>
    </div>
</template>

<script>
import { object } from 'yup/lib/locale';
export default {
    props: {
        product: object,
    },
};
</script>

<style lang="scss">
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
    div {
        margin-top: 6px;
        margin-bottom: 6px;
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

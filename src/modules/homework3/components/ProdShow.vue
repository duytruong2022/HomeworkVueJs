<template>
    <div class="prod_show">
        <div class="prod_img">
            <div>
                <img src="../../../assets/images/homework3/icon/prod_hear_icon.svg" />
                <img src="../../../assets/images/homework3/icon/prod_trac_icon.svg" />
                <img src="../../../assets/images/homework3/icon/prod_mail_icon.svg" />
            </div>
            <img v-bind:src="product.img" />
        </div>
        <div class="prod_logo">
            <img src="../../../assets/images/homework3/product/prod_logo.png" />
            <div>
                <p>
                    own it now, up to 6 months interest free
                    <a href="#">learn more</a>
                </p>
            </div>
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
.prod_show {
    padding: 20px;
    .prod_img {
        display: flex;
        div {
            display: flex;
            flex-direction: column;
            margin-top: 35px;
            margin-left: 0.5%;
            margin-right: 5%;
        }
    }
    .prod_logo {
        margin-top: 32px;
        margin-left: 12%;
        display: flex;
        img {
            padding: 0px 11px;
            height: 27px;
            width: inherit;
            border-right: 3px solid #00aeb8;
        }
        div {
            font-family: Poppins;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 120.5%;
            display: flex;
            align-items: center;
            height: 28px;
            width: 180px;
            margin-left: 11px;
            color: #000000;
            p {
                margin: 0px;
            }
            a {
                border-bottom: 1px solid #000000;
            }
        }
    }
}
</style>

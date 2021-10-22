<template>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <div class="product">
            <div class="product_img">
                <img v-bind:src="product.img" />
            </div>
            <div class="product_description">
                {{ product.description }}
            </div>
            <div class="product_price">
                {{ product.price }}
            </div>
            <div class="product_tag">
                {{ product.tag }}
            </div>
            <div class="product_rating">
                <div class="start">
                    <img src="../../../assets/images/homework1/icon/start.svg" />
                    <img src="../../../assets/images/homework1/icon/start.svg" />
                    <img src="../../../assets/images/homework1/icon/start.svg" />
                    <img src="../../../assets/images/homework1/icon/start.svg" />
                    <img src="../../../assets/images/homework1/icon/half_start.svg" />
                </div>
                <div class="rating">
                    {{ product.rating }}
                </div>
                <div class="watch">
                    <div class="heart">
                        <img src="../../../assets/images/homework1/icon/heart.svg" />
                    </div>
                    <div class="text_watch">Watch</div>
                </div>
            </div>
        </div>
    </el-col>
</template>

<script>
export default {
    name: 'Layout',
    props: {
        product: Object,
    },
};
</script>
<style scoped lang="css">
.product {
    margin-bottom: 24px;
    height: 472px;
}
.product_img {
    margin-top: 16px;
    margin-right: 16px;
    margin-left: 16px;
    text-align: center;
}
.product_description {
    margin-top: 12px;
    margin-right: 16px;
    margin-left: 16px;
    font-size: 16px;
    line-height: 150%;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    height: 74px;
    color: #19191d;
    letter-spacing: 0.0275em;
}
.product_price {
    margin-top: 8px;
    margin-right: 16px;
    margin-left: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.87);
}
.product_tag {
    margin-top: 8px;
    margin-right: 16px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 143%;
    height: 40px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    letter-spacing: 0.018em;
    color: #787885;
}
.product_rating {
    margin-top: 9px;
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
}
.start {
    margin-left: 2.47px;
    margin-right: 10.47px;
    widows: 11.07px;
    height: 10.32px;
    color: #fb8200;
}
.rating {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    letter-spacing: 0.1px;
    color: #5e6366;
    margin-right: auto;
}
.watch {
    border: 1px solid #9dc2ff;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
}
.heart {
    color: #2979ff;
    width: 28px;
    height: 28px;
    margin-left: 11px;
}
.text_watch {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 143%;
    top: calc(50% - 24px / 2);
    color: #2979ff;
    margin-left: 4px;
    margin-right: 12px;
}
</style>

<template>
    <div class="product">
        <el-row>
            <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7">
                <div class="product_img">
                    <img v-bind:src="product.img" />
                </div>
                <div class="reviews">
                    <div class="start">
                        <img src="../../../assets/images/homework3/icon/star.svg" />
                        <img src="../../../assets/images/homework3/icon/star.svg" />
                        <img src="../../../assets/images/homework3/icon/star.svg" />
                        <img src="../../../assets/images/homework3/icon/star.svg" />
                        <img src="../../../assets/images/homework3/icon/star_none.svg" />
                    </div>
                    <div class="review">Review ({{ product.reviews }})</div>
                </div>
            </el-col>
            <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
                <div class="product_name">{{ product.name }}</div>
                <div class="product_description">{{ product.description }}</div>
                <div class="product_price">
                    <div class="real_price">{{ product.realPrice }}</div>
                    <div class="sale_price">{{ product.salePrice }}</div>
                </div>
                <div class="add_to_cart">
                    <button>
                        <img
                            src="../../../assets/images/homework3/icon/shopping_icon.svg"
                        />
                        Add To Cart
                    </button>
                </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="product_stock">
                    <div v-if="!isSock" class="in_stock">
                        <img
                            src="../../../assets/images/homework3/icon/success_icon.svg"
                        />
                        in stock
                    </div>
                    <div v-else class="out_stock">
                        <img
                            src="../../../assets/images/homework3/icon/failure_icon.svg"
                        />
                        out stock
                    </div>
                </div>
                <div class="product_info">
                    <div class="CPU">
                        <div class="name_info">CPU</div>
                        <div>{{ product.CPU }}</div>
                    </div>
                    <div class="Featured">
                        <div class="name_info">Featured</div>
                        <div>{{ product.Featured }}</div>
                    </div>
                    <div class="IOPorts">
                        <div class="name_info">I/O Ports</div>
                        <div>{{ product.IOPorts }}</div>
                    </div>
                </div>
                <div class="icon_pro">
                    <img src="../../../assets/images/homework3/icon/mail_icon.svg" />
                    <img src="../../../assets/images/homework3/icon/trac_icon.svg" />
                    <img src="../../../assets/images/homework3/icon/hear_icon.svg" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'Product',
    props: {
        product: Object,
    },
};
</script>
<style lang="scss">
.product {
    margin-top: 7.5px;
    margin-bottom: 7.5px;
    margin-left: 5px;
    margin-right: 5px;
    padding-bottom: 35px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
}
.product_img {
    margin-left: 3%;
    margin-right: 9%;
    margin-bottom: 21px;
    img {
        width: 100%;
        height: 100%;
    }
}
.reviews {
    margin-left: 7%;
    display: flex;
    .start {
        margin-right: 10px;
        img {
            margin-right: 2px;
        }
    }
}
.product_name {
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-top: 60px;
    margin-bottom: 22px;
}
.product_description {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-top: 10.5px;
    margin-bottom: 18px;
}
.product_price {
    font-family: Poppins;
    display: flex;
    margin-top: 8px;
    margin-bottom: 16px;
    .real_price {
        align-items: center;
        text-decoration-line: line-through;
        color: #666666;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        padding-top: 4px;
        line-height: 140%;
        margin-right: 6px;
    }
    .sale_price {
        align-items: center;
        font-weight: bolder;
        font-size: 16px;
        line-height: 140%;
    }
}
.add_to_cart {
    margin-top: 50px;
    background-color: white;
    button {
        background-color: white;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #0156ff;
        border: 2px solid #0156ff;
        box-sizing: border-box;
        border-radius: 50px;
        padding-top: 8.5px;
        padding-bottom: 8.5px;
        padding-left: 16.5px;
        padding-right: 16.5px;
        img {
            margin-right: 10px;
        }
    }
}
.product_stock {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 210%;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 21px;
    margin-right: 20px;
    justify-content: right;
    img {
        height: 10px;
        width: 10px;
    }
    .in_stock {
        color: #78a962;
    }
    .out_stock {
        color: red;
    }
}
.product_info {
    margin-top: 56px;
    margin-left: 15%;
    width: 70%;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    align-items: center;
    color: #000000;

    div {
        margin-top: 6px;
        margin-bottom: 6px;
        padding-left: 8px;
        display: flex;
        .name_info {
            width: 60%;
        }
    }
    .Featured {
        background-color: #f5f7ff;
    }
}
.icon_pro {
    margin-top: 56px;
    display: flex;
    justify-content: right;
    margin-right: 20px;
    img {
        margin-left: 6px;
    }
}
</style>

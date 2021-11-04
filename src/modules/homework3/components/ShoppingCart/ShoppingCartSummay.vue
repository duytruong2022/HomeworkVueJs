<template>
    <div class="summay-shopping-cart">
        <div class="summay-shopping-cart-title">Summary</div>
        <ShoppingCartShippingTax
            @update-shipping="changeShipping"
            @update-country="updateCountry"
            @update-state="updateState"
            @update-zip="updateZip"
        />
        <ShoppingCartDistcount />
        <div class="shopping-cart-subtotal">
            <div class="cart-price">
                Subtotal
                <div>${{ subtotal }}.00</div>
            </div>
            <div class="cart-price">
                Shipping
                <div>${{ shipping }}.00</div>
            </div>
            <div v-show="shipping" class="shipping-info">
                (Standard Rate - Price may vary depending on the item/destination. Shop
                Staff will contact you.)
            </div>
            <div class="cart-price">
                Tax
                <div>$1.91</div>
            </div>
            <div class="cart-price">
                GST
                <div>${{ gst }}</div>
            </div>
            <div class="cart-price">
                Order Total
                <div>${{ orderTotal }}</div>
            </div>
            <button class="cart-checkout-button" @click="updateCustomerInfo()">
                Proceed to Checkout
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { ICustomerInfo } from '../../type';
import { Options, Vue } from 'vue-class-component';
import ShoppingCartShippingTax from './ShoppingCartShippingTax.vue';
import ShoppingCartDistcount from './ShoppingCartDistcount.vue';
import { carts } from '../../store';
@Options({
    components: {
        ShoppingCartShippingTax,
        ShoppingCartDistcount,
    },
    watch: {
        subtotal(): void {
            this.gst = 0.1 * this.subtotal;
            this.orderTotal = this.subtotal + this.gst + this.shipping + 1.91;
        },
        shipping(): void {
            this.orderTotal = this.subtotal + this.gst + this.shipping + 1.91;
        },
    },
})
export default class ShoppingCartSummay extends Vue {
    shipping = 21;
    orderTotal = 0;
    gst = 0;
    country = '';
    state = '';
    zip = '';
    subtotal = carts.getSumSubtotal;

    changeShipping(label: string): void {
        if (label === '2') this.shipping = 0;
        else this.shipping = 21;
    }

    updateCountry(country: string): void {
        this.country = country;
    }

    updateState(state: string): void {
        this.state = state;
    }

    updateZip(zip: string): void {
        this.zip = zip;
    }

    updateCustomerInfo(): void {
        let shipping;
        if (this.shipping) {
            shipping = true;
        } else {
            shipping = false;
        }
        const info: ICustomerInfo = {
            customerCountry: this.country,
            customerState: this.state,
            customerZip: this.zip,
            shipping: shipping,
        };
        carts.updatedCustomerInfo(info);
    }
}
</script>
<style lang="scss" scoped>
.summay-shopping-cart {
    width: 100%;
    background-color: #f5f7ff;
    padding-bottom: 200px;
    .summay-shopping-cart-title {
        margin-left: 7%;
        padding-top: 17.5px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        align-items: center;
        color: #000000;
    }
    .shopping-cart-subtotal {
        margin-left: 7%;
        margin-right: 7%;
        border-top: 1px solid #cacdd8;
        padding-top: 10px;
        .cart-price {
            display: flex;
            justify-content: space-between;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 210%;
            align-items: center;
            color: #000000;
        }
        .cart-checkout-button {
            width: 100%;
            height: 40px;
            margin-top: 19px;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            align-items: center;
            text-align: center;
            color: #ffffff;
            background-color: #0156ff;
            border-radius: 30px;
            border: none;
        }
    }
    .shipping-info {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 180%;
        align-items: center;
        color: #a2a6b0;
    }
}
</style>

<template>
    <div class="shopping-cart-shipping-tax">
        <div class="shipping-tax">
            Estimate Shipping and Tax
            <i
                class="shipping-tax-drop-icon fas"
                :class="{ 'fa-angle-up': isPlay, 'fa-angle-down': !isPlay }"
                @click="compact()"
            ></i>
        </div>
        <div class="shipping-tax-instruct">
            Enter your destination to get a shipping estimate.
        </div>
        <div v-show="isPlay">
            <el-select v-model="country" placeholder="Choose your country">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
            <div class="shipping-tax-option">State/Province</div>
            <el-input
                placeholder="Enter your state or province"
                v-model="state"
            ></el-input>
            <div class="shipping-tax-option">Zip/Postal Code</div>
            <el-input
                placeholder="Enter your zip or postal code"
                v-model="zip"
            ></el-input>
            <div class="shipping-tax-option">Standard Rate</div>
            <el-radio v-model="radio" label="1" @change="chooseShipping">
                Price may vary depending on the item/destination. Shop Staff will contact
                you. $21.00</el-radio
            >
            <div class="shipping-tax-option">Pickup from store</div>
            <el-radio v-model="radio" label="2" @change="chooseShipping">
                1234 Street Adress City Address, 1234 $0.00
            </el-radio>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            options: [
                {
                    value: 'Việt Nam',
                    label: 'Việt Nam',
                },
                {
                    value: 'Australia',
                    label: 'Australia',
                },
            ],
            country: '',
            state: '',
            zip: '',
            radio: '1',
            isPlay: false,
        };
    },
    methods: {
        compact(): void {
            this.isPlay = !this.isPlay;
        },
        chooseShipping(label: string): void {
            this.$emit('update-shipping', label);
        },
    },
    watch: {
        country(): void {
            this.$emit('update-country', this.country);
        },
        state(): void {
            this.$emit('update-state', this.state);
        },
        zip(): void {
            this.$emit('update-zip', this.zip);
        },
    },
};
</script>
<style lang="scss" scoped>
.shopping-cart-shipping-tax {
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 18.5px;
    .shipping-tax-instruct {
        width: 75%;
        margin-top: 12.5px;
        padding-bottom: 20px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        color: #666666;
    }
    .shipping-tax {
        display: flex;
        align-items: center;
        margin-right: 3%;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: #000000;
        justify-content: space-between;
        .shipping-tax-drop-icon {
            font-size: 14px;
            line-height: 15px;
        }
    }
    .shipping-tax-option {
        height: 38px;
        padding-top: 7px;
        margin-top: 5px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        align-items: center;
        color: #000000;
    }
}
</style>

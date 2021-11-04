<template>
    <div class="contact">
        <el-row>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="contact-time-working">
                    <div class="contact-date">Mon-Thu:</div>
                    <div class="contact-time">
                        <el-select
                            v-model="value"
                            clearable
                            placeholder="9:00AM - 5:30PM"
                        >
                            <el-option value="9:00AM-5:30PM">9:00AM-5:30PM</el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="contact-address">
                    <div class="contact-address-text">
                        Visit our showroom in 1234 Street Adress City Address, 1234
                    </div>
                    <div class="contact-address-link">
                        <a class="contact-address-link" href="#">Contact Us</a>
                    </div>
                </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="contact-phone">
                    <div class="contact-phone-number">Call Us: (00) 1234 5678</div>
                    <div class="contact-icon">
                        <img src="../../../assets/images/homework3/icon/fb_icon.svg" />
                    </div>
                    <div class="contact-icon">
                        <img src="../../../assets/images/homework3/icon/insta_icon.svg" />
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.contact {
    height: 44px;
    text-align: center;
    background-color: #000;
    .contact-time-working {
        display: flex;
        justify-content: center;
        .contact-date {
            margin-right: 7px;
            margin-top: 8px;
            margin-bottom: 9px;
            display: flex;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            align-items: center;
            color: #a2a6b0;
        }
    }
    .contact-address {
        margin-top: 13.2px;
        margin-bottom: 13.2px;
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        align-items: center;
        text-align: center;
        color: #acacac;
        .contact-address-text {
            margin-right: 10px;
        }
        .contact-address-link {
            text-decoration: underline;
            color: white;
        }
    }
    .contact-phone {
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        align-items: center;
        justify-content: center;
        color: #fff;
        .contact-phone-number {
            margin-top: 13.2px;
            margin-bottom: 13.2px;
            margin-right: 10px;
        }
        .contact-icon {
            margin-left: 12px;
        }
    }
}
</style>

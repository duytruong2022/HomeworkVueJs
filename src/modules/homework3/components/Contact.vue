<template>
    <div class="contact">
        <el-row>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="time_working">
                    <div class="contact_date">Mon-Thu:</div>
                    <div class="contact_time">
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
                <div class="address">
                    <div class="address_text">
                        Visit our showroom in 1234 Street Adress City Address, 1234
                    </div>
                    <div class="address_link">
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="phone">
                    <div class="phone_number">Call Us: (00) 1234 5678</div>
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

<style>
.contact {
    text-align: center;
    background-color: #000;
    height: 44px;
}
.time_working {
    display: flex;
    justify-content: center;
}
.contact_date {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #a2a6b0;
    margin-right: 7px;
    margin-top: 8px;
    margin-bottom: 9px;
}
.contact_time input {
    color: red;
    background-color: #000;
    border: none;
}
.contact_time .el-input__suffix {
    left: 55px;
}
.el-select .el-input .el-select__caret {
    color: white;
}
.address {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #acacac;
    margin-top: 13.2px;
    margin-bottom: 13.2px;
}
.address_text {
    margin-right: 10px;
}
.address_link a {
    color: white;
    text-decoration: underline;
}
.phone {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.phone_number {
    margin-top: 13.2px;
    margin-bottom: 13.2px;
    margin-right: 10px;
}
.contact-icon {
    margin-left: 12px;
}
</style>

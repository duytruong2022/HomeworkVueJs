<template>
    <el-row :gutter="16">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="footers">
                <div class="footer_img">
                    <img src="../../../assets/images/homework1/icon/lightbulb.svg" />
                </div>
                <div class="footer_title">Clear & Usable user flows</div>
                <div class="footer_data">Let’s boost yout marketplace</div>
            </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="footers">
                <div class="footer_img">
                    <img src="../../../assets/images/homework1/icon/magic.svg" />
                </div>
                <div class="footer_title">Fine & Styled components</div>
                <div class="footer_data">Speed up with Setproduct templates</div>
            </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
            <div class="footers">
                <div class="footer_img">
                    <img src="../../../assets/images/homework1/icon/palette.svg" />
                </div>
                <div class="footer_title">Customizable & Reusable</div>
                <div class="footer_data">Take our UX patterns and rebuild</div>
            </div>
        </el-col>
    </el-row>
</template>

<script></script>

<style>
.footers {
    text-align: center;
    background-color: #ededf0;
    border-radius: 8px;
}
.footer_img {
    margin-top: 8px;
}
.footer_title {
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.87);
}
.footer_data {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #5a5b6a;
}
</style>

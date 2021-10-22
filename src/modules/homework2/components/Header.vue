<template>
    <div class="headers">
        <div class="tc">
            <div class="select">
                <el-select v-model="value" clearable placeholder="Sort by" id="sort">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        style="margin-left: 20px"
                    >
                    </el-option>
                </el-select>
                <el-select v-model="value" clearable placeholder="Condition">
                    <el-option
                        multiple
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        style="margin-left: 20px"
                    >
                    </el-option>
                </el-select>
                <el-select v-model="value" clearable placeholder="Delivery options">
                    <el-option
                        multiple
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>

            <div class="options">
                <div class="ht">
                    <el-button-group>
                        <el-button>Show all</el-button>
                        <el-button
                            style="
                                background-color: #fff;
                                border-radius: 4px;
                                box-shadow: 1px 1px 1px rgb(178, 201, 238);
                            "
                            >Auction</el-button
                        >
                        <el-button>Buy now</el-button>
                    </el-button-group>
                </div>
                <div class="op">
                    <el-button-group>
                        <el-button>
                            <img
                                style="width: 17px; height: 14px"
                                src="../../../assets/images/homework1/icon/list.svg"
                            />
                        </el-button>
                        <el-button
                            style="
                                background-color: #fff;
                                border-radius: 4px;
                                box-shadow: 1px 1px 1px rgb(178, 201, 238);
                            "
                        >
                            <img
                                style="width: 14px; height: 14px"
                                src="../../../assets/images/homework1/icon/op.svg"
                            />
                        </el-button>
                    </el-button-group>
                </div>
            </div>
        </div>
        <div class="relateds">
            Related
            <button v-for="related in relateds" :key="related">{{ related }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    value: 'Option1',
                    label: 'Option1',
                },
                {
                    value: 'Option2',
                    label: 'Option2',
                },
                {
                    value: 'Option3',
                    label: 'Option3',
                },
                {
                    value: 'Option4',
                    label: 'Option4',
                },
                {
                    value: 'Option5',
                    label: 'Option5',
                },
            ],
            relateds: [
                'relateds',
                'under $50',
                'kitten',
                'plastic plugs',
                'pucker shoes',
                'vintage typewriter',
            ],
            value: '',
        };
    },
};
</script>
<style scoped>
.headers {
    margin-top: 40px;
    margin-left: 16px;
    margin-right: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;
}
.tc {
    height: 37px;
    display: flex;
    justify-content: space-between;
}
.ht {
    margin-left: 30px;
}
.select {
    max-width: 500px;
    justify-content: flex-start;
}
.el-select {
    width: 30%;
    margin-left: 1%;
}
.tc .el-button {
    background-color: rgb(235, 242, 255);
    text-align: center;
    height: 36px;
    margin-bottom: 0.5px;
    border: none;
    padding-left: 7%;
    padding-right: 7%;
}
.options {
    display: flex;
    justify-content: flex-end;
    width: 37%;
    min-width: 350px;
}
.options .ht {
    width: 70%;
    margin-right: 4%;
}
.tc .el-button-group {
    background-color: rgb(235, 242, 255);
    border-radius: 4px;
}
.ht .el-button-group {
    width: 100%;
}
.op .el-button-group {
    width: 100%;
}
.ht .el-button {
    width: 33%;
}
.options .op {
    width: 25%;
}
.op .el-button-group .el-button {
    width: 50%;
}
.relateds {
    text-align: left;
    margin-top: 30px;
}
.relateds button {
    height: 32px;
    margin-left: 0.7%;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 17px;
    border: white;
}
</style>

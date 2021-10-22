<template>
    <div class="homework2">
        <div class="titles">Inside Open Art</div>
        <div>
            <el-row :gutter="10">
                <el-col
                    :xs="24"
                    :sm="12"
                    :md="8"
                    :lg="8"
                    :xl="8"
                    v-for="card in cards"
                    :key="card"
                >
                    <div class="cards">
                        <div class="icons">
                            <img v-bind:src="card.icon" />
                        </div>
                        <div class="names">{{ card.title }}</div>
                        <div class="datas">{{ card.data }}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    icon: require('@/assets/images/homework2/icon/1.svg'),
                    title: '4pt grid system',
                    data: 'Base on 4pt grid system. Our UI kit help you create perfect white space',
                },
                {
                    icon: require('@/assets/images/homework2/icon/2.svg'),
                    title: 'Color style',
                    data: 'All color in OpenArt are styled. You can change all design color with one click',
                },
                {
                    icon: require('@/assets/images/homework2/icon/3.svg'),
                    title: 'Free font',
                    data: 'OpenArt use Epilogue font family Available with open licence in gooogle font',
                },
                {
                    icon: require('@/assets/images/homework2/icon/4.svg'),
                    title: 'Darkmode avaiable',
                    data: 'Our UI Kit support darkmode Chage your design to dark mode with one click',
                },
                {
                    icon: require('@/assets/images/homework2/icon/5.svg'),
                    title: 'Easy to customize',
                    data: 'Create any design with OpenArt UI kits',
                },
                {
                    icon: require('@/assets/images/homework2/icon/6.svg'),
                    title: 'Variant components',
                    data: 'All component art variant, easy to design, easy to control',
                },
            ],
        };
    },
};
</script>
<style scoped>
.homework2 {
    background-image: url('../../assets/images/homework2/Group 3.png');
    font-family: 'Epilogue', sans-serif;
    padding-left: 3.9%;
    padding-right: 3.9%;
    padding-bottom: 117px;
}
.titles {
    font-family: Epilogue;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    color: #000000;
    padding-top: 117px;
    margin-bottom: 92px;
}
.cards {
    background: #ffffff;
    border-radius: 16px;
    height: 197.78px;
    margin-bottom: 34px;
}
.icons img {
    margin-top: 39px;
    margin-left: 8.3%;
    color: #000000;
}
.names {
    margin-top: 19px;
    margin-left: 6%;
    font-family: Epilogue;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
}
.datas {
    margin-top: 9.5px;
    margin-bottom: 36px;
    margin-left: 6.5%;
    margin-right: 7%;
    font-family: Epilogue;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #555555;
}
</style>
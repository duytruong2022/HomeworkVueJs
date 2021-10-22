<template>
    <div>
        <Header />
        <div class="product_list">
            <el-row :gutter="16">
                <Product
                    v-for="product in products"
                    :key="product.name"
                    :product="product"
                />
            </el-row>
        </div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src

import Header from './components/Header.vue';
import Product from './components/Product.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        Header,
        Product,
        Footer,
    },
    data() {
        return {
            products: [
                {
                    img: require('@/assets/images/homework1/Product/1.svg'),
                    description:
                        'Vintage Typewriter to post awesome stories about UI design and webdev.',
                    price: '$49.50',
                    rating: '4.05',
                    tag: 'Eligible for Shipping To Mars or somewhere else',
                },
                {
                    img: require('@/assets/images/homework1/Product/2.svg'),
                    description:
                        'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
                    price: '$13.95',
                    rating: '4.56',
                    tag: '1258 bids, 359 watchers $5.95 for shipping',
                },
                {
                    img: require('@/assets/images/homework1/Product/3.svg'),
                    description:
                        'Timesaving kitten to save months on development. Playful, cute, cheap!',
                    price: '$128.99',
                    rating: '4.78',
                    tag: 'Eligible for nothing :(',
                },
                {
                    img: require('@/assets/images/homework1/Product/4.svg'),
                    description:
                        'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
                    price: '$12.48',
                    rating: '4.99',
                    tag: 'Wordwide shitting available Buyers protection possible!',
                },
                {
                    img: require('@/assets/images/homework1/Product/5.svg'),
                    description:
                        'Creativity stimulating lotion. Drink every morning to generate better ideas!',
                    price: '$12.48',
                    rating: '4.99',
                    tag: 'Wordwide shifting available Buyers protection possible!',
                },
                {
                    img: require('@/assets/images/homework1/Product/6.svg'),
                    description: 'Prototyping items to create a lot if useless things...',
                    price: '$128.99',
                    rating: '4.87',
                    tag: 'Showcasing onHovered state',
                },
                {
                    img: require('@/assets/images/homework1/Product/7.svg'),
                    description: 'John Von Ebalkin SPRING ',
                    price: '$13.95',
                    rating: '4.56',
                    tag: '1258 bids, 359 watchers $5.95 for shipping',
                },
                {
                    img: require('@/assets/images/homework1/Product/8.svg'),
                    description:
                        'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
                    price: '$9.50',
                    rating: '4.77',
                    tag: 'Eligible for Shipping To Mars or somewhere else',
                },
                {
                    img: require('@/assets/images/homework1/Product/9.svg'),
                    description:
                        'Professional teadrinking set for every designer and developer',
                    price: '$128.99',
                    rating: '4.87',
                    tag: 'Eligible for nothing :(',
                },
                {
                    img: require('@/assets/images/homework1/Product/10.svg'),
                    description: 'One string Bonsai description',
                    price: '$11.68',
                    rating: '4.99',
                    tag: 'Wordwide shifting available Buyers protection possible!',
                },
                {
                    img: require('@/assets/images/homework1/Product/11.svg'),
                    description:
                        'Simply best item in town to shine bright with your Nine Inch Nails',
                    price: '$1.25',
                    rating: '4.77',
                    tag: 'Eligible for Shipping To Mars or somewhere else',
                },
                {
                    img: require('@/assets/images/homework1/Product/12.svg'),
                    description:
                        'KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!',
                    price: '$23.25',
                    rating: '4.56',
                    tag: '1258 bids, 359 watchers $5.95 for shipping',
                },
            ],
        };
    },
};
</script>
<style lang="css">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.product_list {
    margin-left: 16px;
    margin-right: 16px;
}
</style>

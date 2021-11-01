import { RouteRecordRaw } from 'vue-router';
import homework3 from './pages/ListViewCataloge.vue';
import Product from './pages/Product.vue';
import Cart from './pages/ShoppingCart.vue';
import AboutProduct from './components/Product/AboutProduct.vue';
import ProductDetails from './components/Product/DetailsProduct.vue';
import ProductSpecs from './components/Product/SpecsProduct.vue';

export default [
    {
        path: '/homework3',
        name: 'homework3',
        component: homework3,
        meta: {
            public: true,
        },
    },
    {
        path: '/product',
        name: 'product',
        component: Product,
        meta: {
            public: true,
        },
        children: [
            {
                path: 'about',
                name: 'about-product',
                component: AboutProduct,
                meta: {
                    public: true,
                },
            },
            {
                path: 'details',
                name: 'details-product',
                component: ProductDetails,
                meta: {
                    public: true,
                },
            },
            {
                path: 'specs',
                name: 'specs-product',
                component: ProductSpecs,
                meta: {
                    public: true,
                },
            },
        ],
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];

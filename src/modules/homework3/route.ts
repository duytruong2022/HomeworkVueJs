import { RouteRecordRaw } from 'vue-router';
import homework3 from './pages/ListViewCataloge.vue';
import Product from './pages/Product.vue';
import Cart from './pages/ShoppingCart.vue';
import AboutProduct from './components/Product/ProductAbout.vue';
import ProductDetails from './components/Product/ProductDetails.vue';
import ProductSpecs from './components/Product/ProductSpecs.vue';

export default [
    {
        path: '/homework3',
        name: 'homework3',
        component: homework3,
        meta: {
            public: true,
        },
        props: (route) => ({ search: route.query.s }),
    },
    {
        path: '/product/:id',
        name: 'product-info',
        component: Product,
        props: true,
        meta: {
            public: true,
        },
        children: [
            {
                path: '',
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

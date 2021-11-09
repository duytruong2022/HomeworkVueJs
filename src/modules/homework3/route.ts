import { RouteRecordRaw } from 'vue-router';
import homework3 from './pages/ListViewCataloge.vue';
import Product from './pages/Product.vue';
import Cart from './pages/ShoppingCart.vue';
import CaculateProductList from './components/Catalog/CaculateListViewProductList.vue';
import CaculateProductGrid from './components/Catalog/CaculateListViewProductGrid.vue';
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
        children: [
            {
                path: '',
                name: 'list',
                component: CaculateProductList,
                meta: {
                    public: true,
                },
            },
            {
                path: '/grid',
                name: 'grid',
                component: CaculateProductGrid,
                meta: {
                    public: true,
                },
            },
        ],
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

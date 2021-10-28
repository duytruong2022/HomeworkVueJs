import { RouteRecordRaw } from 'vue-router';
import homework3 from './pages/listView.vue';
import Product from './pages/Product.vue';

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
                path: 'product',
                name: 'product',
                component: Product,
                meta: {
                    public: true,
                },
            },
        ],
    },
] as RouteRecordRaw[];

import { RouteRecordRaw } from 'vue-router';
import homework1 from './homework1.vue';

export default [
    {
        path: '/homework1',
        name: 'homework1',
        component: homework1,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];

import { RouteRecordRaw } from 'vue-router';
import homework2 from './homework2.vue';

export default [
    {
        path: '/homework2',
        name: 'homework2',
        component: homework2,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];

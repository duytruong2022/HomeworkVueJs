import { RouteRecordRaw } from 'vue-router';
import homework3 from './pages/listView.vue';

export default [
    {
        path: '/homework3',
        name: 'homework3',
        component: homework3,
        meta: {
            public: true,
        },
    },
] as RouteRecordRaw[];

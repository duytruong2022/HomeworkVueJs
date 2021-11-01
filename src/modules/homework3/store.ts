import { getModule, VuexModule, Mutation, Module } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, namespaced: true, store, name: 'Cart' })
class Product extends VuexModule {
    sumSubtotal = 0;
    @Mutation
    UpdateCart(data: number) {
        this.sumSubtotal += data;
    }

    @Mutation
    ResetCart() {
        this.sumSubtotal = 0;
    }
}

export const cart = getModule(Product);

import { getModule, VuexModule, Mutation, Module } from 'vuex-module-decorators';
import store from '@/store';
import { ICartItem, IProduct } from './type';

@Module({ dynamic: true, namespaced: true, store, name: 'product' })
class Product extends VuexModule {
    products: Array<IProduct> = [
        {
            id: '1',
            img: ['product/product.png', 'product/1.png', 'product/product.png'],
            code: 'SKU D5515AI',
            name: 'MSI MPG Trident 3 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3300,
            salePrice: 3299,
            CPU: 'N/A',
            Featured: 'N/A',
            IOPorts: 'N/A',
            specifications: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            isSock: true,
            rating: '4.00',
            reviews: 4,
        },
        {
            id: '2',
            img: ['product/product.png', 'product/1.png', 'product/product.png'],
            code: 'SKU D5515AI',
            name: 'MSI MPG Trident 3 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3300,
            salePrice: 3299,
            CPU: 'N/A',
            Featured: 'N/A',
            IOPorts: 'N/A',
            specifications: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            isSock: true,
            rating: '4.00',
            reviews: 4,
        },
        {
            id: '3',
            img: ['product/product.png', 'product/1.png', 'product/product.png'],
            code: 'SKU D5515AI',
            name: 'MSI MPG Trident 3 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3300,
            salePrice: 3299,
            CPU: 'N/A',
            Featured: 'N/A',
            IOPorts: 'N/A',
            specifications: [
                'Intel Core i7-10700F',
                'Intel H410',
                'WHITE',
                'NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6',
                'SO-DIMM 16GB (16GB x 1) DDR4 2666MHz',
                '2 total slots (64GB Max)',
                '512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM',
                'Gaming Keyboard GK30 + Gaming Mouse GM11',
                '3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)',
                'Intel WGI219Vethernet (10/100/1000M)',
                'AX200 (WIFI 6)+BT5.1',
                'PSU 330W',
                'Fan Cooler',
            ],
            colors: ['#4B4D4F', '#F2E9DC', '#EAE8EB'],
            isSock: true,
            rating: '4.00',
            reviews: 4,
        },
    ];

    get getAllProduct() {
        return this.products;
    }
}

export const product = getModule(Product);

@Module({ dynamic: true, namespaced: true, store, name: 'cart' })
class Carts extends VuexModule {
    sumSubtotal = 0;
    listCarts: Array<ICartItem> = [
        {
            id: '1',
            image: 'product/product.png',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 1000,
            quantity: 1,
            subtotal: 1000,
        },
    ];

    get getAlllistCarts() {
        return this.listCarts;
    }

    get getSumSubtotal() {
        return this.sumSubtotal;
    }

    @Mutation
    updateCart(): void {
        this.sumSubtotal = 0;
        for (const item of this.listCarts) {
            this.sumSubtotal += item.subtotal;
        }
    }

    @Mutation
    clearCart(): void {
        this.listCarts = [];
    }

    @Mutation
    addToCart(productAdd: { id: string; num?: number }): void {
        const cartItem = this.listCarts.find((item) => item.id === productAdd.id);
        console.log(productAdd.num);
        if (cartItem) {
            cartItem.quantity += productAdd.num ?? 1;
            cartItem.subtotal += (productAdd.num ?? 1) * cartItem.price;
        } else {
            const prod = product.products.find((item) => item.id === productAdd.id);
            const p = prod?.realPrice ?? 0;
            const item: ICartItem = {
                id: prod?.id ?? '',
                quantity: productAdd.num ?? 1,
                price: p,
                image: prod?.img[1],
                description: prod?.description,
                subtotal: (productAdd.num ?? 1) * p,
            };
            this.listCarts.push(item);
        }
    }

    @Mutation
    upQuantityCart(id: string): void {
        const cartItem = this.listCarts.find((item) => item.id === id);
        if (cartItem) {
            cartItem.quantity += 1;
            cartItem.subtotal += cartItem.price;
        }
    }

    @Mutation
    downQuantityCart(id: string): void {
        const cartItem = this.listCarts.find((item) => item.id === id);
        if (cartItem) {
            if (cartItem.quantity >= 1) {
                cartItem.quantity -= 1;
                cartItem.subtotal -= cartItem.price;
            }
        }
    }
}

export const carts = getModule(Carts);

@Module({ dynamic: true, namespaced: true, store, name: 'filter' })
class Filters extends VuexModule {
    listFiler = {
        category: {
            title: 'Category',
            listCategorys: [
                {
                    id: '1',
                    name: 'CUSTOM PCS',
                    quantity: 15,
                    selected: true,
                },
                {
                    id: '2',
                    name: 'MSI ALL-IN-ONE PCS',
                    quantity: 45,
                    selected: true,
                },
                {
                    id: '3',
                    name: 'HP/COMPAQ PCS',
                    quantity: 1,
                    selected: false,
                },
            ],
        },
        price: {
            title: 'Price',
            listPrices: [
                {
                    id: '1',
                    min: 0,
                    max: 1000000,
                    quantity: 19,
                    selected: false,
                },
                {
                    id: '2',
                    min: 1000000,
                    max: 2000000,
                    quantity: 21,
                    selected: false,
                },
                {
                    id: '3',
                    min: 2000000,
                    max: 3000000,
                    quantity: 9,
                    selected: false,
                },
                {
                    id: '4',
                    min: 3000000,
                    max: 4000000,
                    quantity: 6,
                    selected: false,
                },
                {
                    id: '5',
                    min: 4000000,
                    max: 5000000,
                    quantity: 3,
                    selected: false,
                },
                {
                    id: '6',
                    min: 5000000,
                    max: 6000000,
                    quantity: 1,
                    selected: false,
                },
                {
                    id: '7',
                    min: 6000000,
                    max: 7000000,
                    quantity: 1,
                    selected: false,
                },
                {
                    id: '8',
                    min: 7000000,
                    quantity: 1,
                    selected: false,
                },
            ],
        },
        color: {
            title: 'Color',
            colors: ['black', 'red'],
        },
        filterName: {
            title: 'Filter Name',
            num: 0,
            listCategorys: [],
            listPrices: [],
        },
    };

    get getAllFilter() {
        return this.listFiler;
    }

    @Mutation
    clearCategory(id: string): void {
        for (const l of this.listFiler.category.listCategorys) {
            if (l.id === id) {
                l.selected = false;
            }
        }
    }

    @Mutation
    clearAllCategory(): void {
        for (const l of this.listFiler.category.listCategorys) {
            l.selected = false;
        }
        for (const l of this.listFiler.price.listPrices) {
            l.selected = false;
        }
        this.listFiler.filterName.listCategorys = [];
        this.listFiler.filterName.listPrices = [];
    }

    @Mutation
    addCategory(id: string): void {
        for (const l of this.listFiler.category.listCategorys) {
            if (l.id === id) {
                l.selected = true;
            }
        }
    }

    @Mutation
    addPrice(id: string): void {
        for (const l of this.listFiler.price.listPrices) {
            if (l.id === id) {
                l.selected = true;
            }
        }
        console.log(id);
    }

    @Mutation
    updateFilter(): void {
        const f = this.listFiler.category.listCategorys.filter(
            (item) => item.selected === true,
        );
        this.listFiler.filterName.listCategorys = f as any;
        const g = this.listFiler.price.listPrices.filter(
            (item) => item.selected === true,
        );
        this.listFiler.filterName.listPrices = g as any;
    }

    @Mutation
    updateNumFiler() {
        this.listFiler.filterName.num =
            this.listFiler.filterName.listCategorys.length +
            this.listFiler.filterName.listPrices.length;
        console.log('test');
    }
}

export const filters = getModule(Filters);

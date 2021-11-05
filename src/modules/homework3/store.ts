import { getModule, VuexModule, Mutation, Module } from 'vuex-module-decorators';
import store from '@/store';
import { ICartItem, IProduct, IListFilter, ICustomerInfo } from './type';

@Module({ dynamic: true, namespaced: true, store, name: 'products' })
class Product extends VuexModule {
    products: Array<IProduct> = [
        {
            id: '1',
            img: ['product/1_1.png', 'product/4_1.png', 'product/3_1.png'],
            code: 'SKU D5515AI3',
            name: 'MSI MPG Trident 1 ',
            category: 'HP/COMPAQ PCS',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3000,
            salePrice: 2999,
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
            img: ['product/2_1.png', 'product/3_1.png', 'product/2_1.png'],
            code: 'SKU D5515AI2',
            name: 'MSI MPG Trident 2 ',
            category: 'MSI ALL-IN-ONE PCS',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3100,
            salePrice: 3099,
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
            img: ['product/3_1.png', 'product/1_1.png', 'product/2_1.png'],
            code: 'SKU D5515AI6',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 3 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3500,
            salePrice: 1399,
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
            id: '4',
            img: ['product/4_1.png', 'product/1_1.png', 'product/2_1.png'],
            code: 'SKU D5515AI0',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 0 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 2900,
            salePrice: 2899,
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
            id: '5',
            img: ['product/4_1.png', 'product/1_1.png', 'product/2_1.png'],
            code: 'SKU D5515AI5',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 5 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 2900,
            salePrice: 2899,
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
            id: '6',
            img: ['product/4_1.png', 'product/1_1.png', 'product/2_1.png'],
            code: 'SKU D5515AI6',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 6 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 2900,
            salePrice: 1899,
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

    get getAllProduct(): Array<IProduct> {
        return this.products;
    }
}

export const product = getModule(Product);

@Module({ dynamic: true, namespaced: true, store, name: 'carts' })
class Carts extends VuexModule {
    sumSubtotal = 0;
    numberProductinCart = 1;
    listCarts: Array<ICartItem> = [
        {
            id: '1',
            image: 'product/1_1.png',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            price: 1000,
            quantity: 1,
            subtotal: 1000,
        },
    ];

    customerInfo: ICustomerInfo = {
        customerCountry: '',
        customerState: '',
        customerZip: '',
        shipping: true,
    };

    get getAlllistCarts(): Array<ICartItem> {
        return this.listCarts;
    }

    get getSumSubtotal(): number {
        return this.sumSubtotal;
    }

    get getNumberProductinCart(): number {
        return this.numberProductinCart;
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
        this.numberProductinCart = 0;
    }

    @Mutation
    addToCart(productAdd: { id: string; num?: number }): void {
        const cartItem = this.listCarts.find((item) => item.id === productAdd.id);
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
        this.numberProductinCart = this.listCarts.length;
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

    @Mutation
    clearCartItem(id: string): void {
        const listItem = this.listCarts.filter((item) => item.id !== id);
        this.listCarts = listItem;
        this.numberProductinCart = this.listCarts.length;
    }

    @Mutation
    updatedCustomerInfo(info: ICustomerInfo) {
        this.customerInfo = info;
        console.log(this.customerInfo);
    }
}

export const carts = getModule(Carts);

@Module({ dynamic: true, namespaced: true, store, name: 'filters' })
class Filters extends VuexModule {
    listFiler: IListFilter = {
        category: {
            title: 'Category',
            listCategorys: [
                {
                    id: '1',
                    name: 'CUSTOM PCS',
                    quantity: 15,
                    selected: false,
                },
                {
                    id: '2',
                    name: 'MSI ALL-IN-ONE PCS',
                    quantity: 45,
                    selected: false,
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
                    max: 1000,
                    quantity: 19,
                    selected: false,
                },
                {
                    id: '2',
                    min: 1000,
                    max: 2000,
                    quantity: 21,
                    selected: false,
                },
                {
                    id: '3',
                    min: 2000,
                    max: 3000,
                    quantity: 9,
                    selected: false,
                },
                {
                    id: '4',
                    min: 3000,
                    max: 4000,
                    quantity: 6,
                    selected: false,
                },
                {
                    id: '5',
                    min: 4000,
                    max: 5000,
                    quantity: 3,
                    selected: false,
                },
                {
                    id: '6',
                    min: 5000,
                    max: 6000,
                    quantity: 1,
                    selected: false,
                },
                {
                    id: '7',
                    min: 6000,
                    max: 7000,
                    quantity: 1,
                    selected: false,
                },
                {
                    id: '8',
                    min: 7000,
                    max: -1,
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

    productFilter: Array<IProduct> = product.products;
    numberCatagorySelected = 0;
    numberPageSelect = 1;
    numberItemperPage = 3;
    listShowProduct: Array<IProduct> = [
        {
            id: '1',
            img: ['product/1_1.png', 'product/4_1.png', 'product/3_1.png'],
            code: 'SKU D5515AI3',
            name: 'MSI MPG Trident 1 ',
            category: 'HP/COMPAQ PCS',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3000,
            salePrice: 2999,
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
            img: ['product/2_1.png', 'product/3_1.png', 'product/2_1.png'],
            code: 'SKU D5515AI2',
            name: 'MSI MPG Trident 2 ',
            category: 'MSI ALL-IN-ONE PCS',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3100,
            salePrice: 3099,
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
            img: ['product/3_1.png', 'product/1_1.png', 'product/2_1.png'],
            code: 'SKU D5515AI6',
            category: 'CUSTOM PCS',
            name: 'MSI MPG Trident 3 ',
            description:
                'MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop',
            realPrice: 3500,
            salePrice: 1499,
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

    search = '';

    get getAllFilter(): IListFilter {
        return this.listFiler;
    }

    get getProductFilter(): Array<IProduct> {
        return this.productFilter;
    }

    get getNumberCatagorySelected(): number {
        return this.numberCatagorySelected;
    }

    get getListShowProducts(): Array<IProduct> {
        return this.listShowProduct;
    }

    get getNumberofProductFilter(): number {
        return this.productFilter.length;
    }

    get getNumberPageSelect(): number {
        return this.numberPageSelect;
    }

    @Mutation
    updateSearch(search: string): void {
        this.search = search;
    }

    @Mutation
    updateNumberCatagorySelected(): void {
        this.numberCatagorySelected =
            this.listFiler.filterName.listCategorys?.length ?? 0;
    }

    @Mutation
    clearCategory(id: string): void {
        if (this.listFiler.category.listCategorys) {
            for (const l of this.listFiler.category.listCategorys) {
                if (l.id === id) {
                    l.selected = false;
                }
            }
        }
    }

    @Mutation
    clearAllCategory(): void {
        if (this.listFiler.category.listCategorys) {
            for (const l of this.listFiler.category.listCategorys) {
                l.selected = false;
            }
        }
        if (this.listFiler.price.listPrices) {
            for (const l of this.listFiler.price.listPrices) {
                l.selected = false;
            }
        }
        this.listFiler.filterName.listCategorys = [];
        this.listFiler.filterName.listPrices = [];
    }

    @Mutation
    updateNumFiler(): void {
        if (
            this.listFiler.filterName.listCategorys &&
            this.listFiler.filterName.listPrices
        ) {
            this.listFiler.filterName.num =
                this.listFiler.filterName.listCategorys.length +
                this.listFiler.filterName.listPrices.length;
        }
    }

    @Mutation
    addCategory(id: string): void {
        if (this.listFiler.category.listCategorys) {
            for (const l of this.listFiler.category.listCategorys) {
                if (l.id === id) {
                    l.selected = !l.selected;
                }
            }
        }
    }

    @Mutation
    addPrice(id: string): void {
        if (this.listFiler.price.listPrices) {
            for (const l of this.listFiler.price.listPrices) {
                if (l.id === id) {
                    l.selected = true;
                }
            }
        }
    }

    @Mutation
    updateproductFilter(): void {
        if (
            !this.listFiler.filterName.listCategorys?.length &&
            !this.listFiler.filterName.listPrices?.length
        ) {
            this.productFilter = product.products;
        } else {
            let listProduct = product.products;
            if (
                this.listFiler.filterName.listCategorys &&
                this.listFiler.filterName.listCategorys?.length
            ) {
                const tempProducts = listProduct.filter(
                    (item) =>
                        this.listFiler.filterName.listCategorys?.find(
                            (lP) => lP.name === item.category,
                        ) !== undefined,
                );
                listProduct = tempProducts;
            }
            if (
                this.listFiler.filterName.listPrices &&
                this.listFiler.filterName.listPrices?.length
            ) {
                const tempProducts = listProduct.filter(
                    (item) =>
                        this.listFiler.filterName.listPrices?.find(
                            (lP) =>
                                lP.min <= item.realPrice &&
                                (lP.max >= item.realPrice || lP.max),
                        ) !== undefined,
                );
                listProduct = tempProducts;
            }
            this.productFilter = listProduct;
        }
        if (this.search !== '') {
            const regx = RegExp(this.search, 'i');
            this.productFilter = this.productFilter.filter(
                (item) => item.code.search(regx) !== -1 || item.name.search(regx) !== -1,
            );
        }
    }

    @Mutation
    updateFilter(): void {
        if (this.listFiler.category.listCategorys) {
            const f = this.listFiler.category.listCategorys.filter(
                (item) => item.selected === true,
            );
            this.listFiler.filterName.listCategorys = f;
        }
        if (this.listFiler.price.listPrices) {
            const g = this.listFiler.price.listPrices.filter(
                (item) => item.selected === true,
            );
            this.listFiler.filterName.listPrices = g;
        }
    }

    @Mutation
    SortProductFilter(cases: string): void {
        switch (cases) {
            case 'name':
                this.productFilter = this.productFilter.sort((a, b) => {
                    const typeA = a.name.toUpperCase();
                    const typeB = b.name.toUpperCase();
                    if (typeA === typeB) return 0;
                    else if (typeA > typeB) return 1;
                    else return -1;
                });
                break;
            case 'code':
                this.productFilter = this.productFilter.sort((a, b) => {
                    const typeA = a.code.toUpperCase();
                    const typeB = b.code.toUpperCase();
                    if (typeA === typeB) return 0;
                    else if (typeA > typeB) return 1;
                    else return -1;
                });
                break;
            case 'price':
                this.productFilter = this.productFilter.sort((a, b) => {
                    return a.salePrice - b.salePrice;
                });
        }
    }

    @Mutation
    updatePageSelectd(numberPage: number): void {
        this.numberPageSelect = numberPage;
    }

    @Mutation
    updateListShowProducts(): void {
        const tempProducts: Array<IProduct> = [];
        const firstItem = (this.numberPageSelect - 1) * this.numberItemperPage;
        for (let index = 0; index < this.numberItemperPage; index++) {
            if (this.productFilter[firstItem + index]) {
                tempProducts.push(this.productFilter[firstItem + index]);
            }
        }
        this.listShowProduct = tempProducts;
    }

    @Mutation
    updateNumberItemperPage(number: number): void {
        this.numberItemperPage = number;
    }
}

export const filters = getModule(Filters);

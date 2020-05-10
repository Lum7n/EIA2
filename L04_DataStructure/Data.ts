namespace L04_Cocktailbar {

    interface Item {
        name: string;
        price: number;
    }

    interface Data {
        [category: string]: Item[];
    }
}
import type { Item } from "../types/Item";
import { categories } from "../data/categories";

export const calculateBalance = (items: Item[]) => {
    let income = 0;
    let expense = 0;
    
    for(const item of items){
        if(categories[item.category].expense === false){
            income += item.value;
        } else {
            expense += item.value;
        }
    }

    return {
        income,
        expense,
        balance: income - expense
    }
}
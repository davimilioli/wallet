import type { Item } from "../types/Item";

type AddTransaction = {
    type: 'add';
    payload: {
        date: Date;
        category: string;
        title: string;
        value: number;
    }
}

export type TransactionsActions = AddTransaction;

export const transationReducer = (state: Item[], action: TransactionsActions ) => {
    switch(action.type) {
        case 'add':
            return [...state,
                {
                    id: state.length + 1,
                    date: action.payload.date,
                    category: action.payload.category,
                    title: action.payload.title,
                    value: action.payload.value
                }
            ]
        default:
            return state;
    }
}
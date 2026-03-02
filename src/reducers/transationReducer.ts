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

type RemoveTransaction = {
    type: 'remove';
    payload: {
        id: number;
    }
}

type EditTransaction = {
    type: 'edit',
    payload: {
        id: number;
        date: Date;
        category: string;
        title: string;
        value: number;
    }
}

export type TransactionsActions = AddTransaction | RemoveTransaction | EditTransaction;

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
            ];
        
        case 'remove':
            return state.filter((item) => item.id !== action.payload.id);

        case 'edit': 
            return state.map((item) => item.id === action.payload.id ?  
            {...action.payload} : item
        )
        default:
            return state;
    }
}
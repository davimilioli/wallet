import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import type { Item } from "../types/Item";
import { transationReducer, type TransactionsActions } from "../reducers/transationReducer";
import { items as initialItems } from "../data/items";

type TransactionContextType = {
    items: Item[];
    dispatch: Dispatch<TransactionsActions>
}

export const TransactionContext = createContext<TransactionContextType | null>(null);

export const TransactionProvider = ({children}: { children: ReactNode }) =>{
    const [items, dispatch] = useReducer(transationReducer, initialItems);
   
    return (
        <TransactionContext.Provider value={{items, dispatch}}>
            {children}
        </TransactionContext.Provider>
    )
}

export const useTransaction = () => useContext(TransactionContext);
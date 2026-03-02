import { useEffect, useState } from "react";
import { categories } from "../data/categories";
import { useTransaction } from "../contexts/TransactionContext";
import type { Item } from "../types/Item";
import { formatDateForInput, formatBrazilianToDate } from "../utils/dateFilter";

type Props = {
    onClose: () => void;
    itemToEdit?: Item | null;
}

const Modal = ({itemToEdit, onClose}: Props) => {
    const { dispatch } = useTransaction();
    const [dataInput, setDataInput] = useState<string>('');
    const [categoriaInput, setCategoriaInput] = useState<string>('');
    const [tituloInput, setTituloInput] = useState<string>('');
    const [valorInput, setValorInput] = useState<number>(0);
    const categoryKeys: string[] = Object.keys(categories);

    useEffect(() => {
        if(itemToEdit){
            setDataInput(formatDateForInput(itemToEdit.date));
            setCategoriaInput(itemToEdit.category);
            setTituloInput(itemToEdit.title);
            setValorInput(itemToEdit.value)
        } else {
            setDataInput('');
            setCategoriaInput('');
            setTituloInput('');
            setValorInput(0);
        }
    },[itemToEdit])

    const handleSubmit = () => {
        if(!itemToEdit){
            dispatch({
                type: 'add',
                payload: {
                    date: dataInput ? formatBrazilianToDate(dataInput) : new Date(),
                    category: categoriaInput || 'food',
                    title: tituloInput.trim() || 'sem título',
                    value: valorInput || 0
                }
            });

            clearInputs();
        } else {
          dispatch({
                type: 'edit',
                payload: {
                    id: itemToEdit.id,
                    date: formatBrazilianToDate(dataInput),
                    category: categoriaInput,
                    title: tituloInput,
                    value: valorInput

                }
            })
        }
        
        onClose();
    };

    const clearInputs = () => {
        setDataInput('');
        setCategoriaInput('');
        setTituloInput('');
        setValorInput(0);
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-2xl border border-gray-300 shadow-lg">
                
                <div className="border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Nova Transação
                    </h2>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Data
                        </label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={dataInput}
                            onChange={e => setDataInput(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Categoria
                        </label>
                        <select
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={categoriaInput}
                            onChange={e => setCategoriaInput(e.target.value)}
                        >
                            {categoryKeys.map((key, index) => 
                                <option key={index} value={key}>{categories[key].title}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Título
                        </label>
                        <input
                            type="text"
                            placeholder="Ex: Supermercado"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={tituloInput}
                            onChange={e => setTituloInput(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Valor
                        </label>
                        <input
                            type="number"
                            placeholder="0,00"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            value={String(valorInput)}
                            onChange={e => setValorInput(parseInt(e.target.value))}
                        />
                    </div>
                </div>

                <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                    <button 
                        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                        onClick={onClose}
                        >
                        Cancelar
                    </button>
                    <button 
                        className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
                        type="button"
                        onClick={handleSubmit}
                        >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
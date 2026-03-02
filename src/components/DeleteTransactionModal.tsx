import { useTransaction } from "../contexts/TransactionContext";
import { formatDate } from "../utils/dateFilter"; 
import { formatCurrency } from "../utils/formatCurrency";
import { categories } from "../data/categories";

type Props ={
    id: number;
    onClose: () => void;
}

const DeleteTransactionModal = ({ id, onClose }: Props) => {
    const {items, dispatch } = useTransaction();
    const item = items.find(item => item.id === id);

    const handleConfirmDelete = () => {
        dispatch({
            type: 'remove',
            payload: {
                id
            }
        })
    }

    if(!item) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-2xl border border-gray-300 shadow-lg">
                
                <div className="border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Tem certeza que deseja excluir?
                    </h2>
                </div>

                <div className="flex flex-col p-6 space-y-4">
                    <div className="flex gap-2">
                        <strong>ID:</strong> {item.id}
                    </div>
                    <div className="flex gap-2">
                        <strong>Data:</strong> { formatDate(item.date)}
                    </div>
                    <div className="flex gap-2">
                        <strong>Categoria:</strong> {categories[item.category].title}
                    </div>
                    <div className="flex gap-2">
                        <strong>Título:</strong> {item.title}
                    </div>
                    <div className="flex gap-2">
                        <strong>Valor:</strong> {formatCurrency(item.value)}
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
                        onClick={handleConfirmDelete}
                        >
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteTransactionModal
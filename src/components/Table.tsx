import { useTransaction } from "../contexts/TransactionContext";
import TableItem from "./TableItem";

const Table = () => {
    const transactionCtx = useTransaction();


    return (
        <div className="bg-white border border-gray-300 rounded-2xl shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Transações ({transactionCtx?.items.length})
                </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-gray-600">ID</th>
                    <th className="px-6 py-3 font-semibold text-gray-600">Data</th>
                    <th className="px-6 py-3 font-semibold text-gray-600">Categoria</th>
                    <th className="px-6 py-3 font-semibold text-gray-600">Título</th>
                    <th className="px-6 py-3 font-semibold text-gray-600 text-right">Valor</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {transactionCtx?.items.map((item) => 
                        <TableItem key={item.id} item={item}  /> 
                    )}
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default Table;
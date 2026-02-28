import { useTransaction } from "../contexts/TransactionContext";
import { calculateBalance } from "../utils/calculateBalance";
import { formatCurrency } from "../utils/formatCurrency";

const Summary = () => {
    const transactionCtx = useTransaction();
    if(transactionCtx === null) return;

    const balance = calculateBalance(transactionCtx.items);

    return (
        <>
            <div className="bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
                <p className="text-gray-500 text-sm">Saldo Atual</p>
                <h2 className="text-4xl font-bold text-gray-800 mt-2">
                    {formatCurrency(balance.balance)}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-300 rounded-2xl p-5 shadow-sm">
                    <p className="text-gray-500 text-sm">Entradas</p>
                    <h3 className="text-2xl font-semibold text-green-600 mt-1">
                        {formatCurrency(balance.income)}
                    </h3>
                </div>

                <div className="bg-white border border-gray-300 rounded-2xl p-5 shadow-sm">
                    <p className="text-gray-500 text-sm">Saídas</p>
                    <h3 className="text-2xl font-semibold text-red-600 mt-1">
                        {formatCurrency(balance.expense)}
                    </h3>
                </div>
            </div>
        </>
    );
}

export default Summary;
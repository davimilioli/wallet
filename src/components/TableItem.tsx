import type { Item } from "../types/Item";
import { formatDate } from "../utils/dateFilter";
import { categories } from "../data/categories";
import { formatCurrency } from "../utils/formatCurrency";

type Props = {
    item: Item
}

const TableItem = ({item}: Props) => {
    return (
        <tr className="hover:bg-gray-50 transition">
            <td className="px-6 py-4 text-gray-700">{item.id}</td>
            <td className="px-6 py-4 text-gray-500">{formatDate(item.date)}</td>
            <td className="px-6 py-4 text-gray-700">{categories[item.category].title}</td>
            <td className="px-6 py-4 text-gray-800 font-medium">{item.title}</td>
            <td className={`px-6 py-4 font-semibold text-right ${categories[item.category].expense ? 'text-red-600' : 'text-green-600'}`}>
                {formatCurrency(item.value)}
            </td>
        </tr>
    )
}

export default TableItem;
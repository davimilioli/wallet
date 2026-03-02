import { useState } from "react"
import Modal from "./components/Modal"
import Summary from "./components/Summary"
import Table from "./components/Table"
import { TransactionProvider } from "./contexts/TransactionContext"
import type { Item } from "./types/Item"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleOpenEdit = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setEditingItem(null);
    setIsModalOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <TransactionProvider>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Wallet
            </h1>

            <button 
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              onClick={() => setIsModalOpen(true)}
            >
              Nova Transação
            </button>
          </div>

          <Summary />
          <Table onEdit={handleOpenEdit}/>
          {isModalOpen &&
            <Modal
              itemToEdit={editingItem}
              onClose={handleCloseModal}
            />
          }

        </TransactionProvider>
      </div>
    </div>
  )
}

export default App;
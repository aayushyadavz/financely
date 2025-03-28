import React, { useState } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import AddIncome from '../components/Modals/AddIncome'
import AddExpense from '../components/Modals/AddExpense'

const Dashboard = () => {
    const [showIncomeModal, setShowIncomeModal] = useState(false)
    const [showExpenseModal, setShowExpenseModal] = useState(false)

    function handleIncomeModal() {
        setShowIncomeModal(true)
    }
    function handleExpenseModal() {
        setShowExpenseModal(true)
    }

    function handleCloseIncomeModal() {
        setShowIncomeModal(false)
    }
    function handleCloseExpenseModal() {
        setShowExpenseModal(false)
    }

    return (
        <div>
            <Header />
            <Cards
                handleIncomeModal={handleIncomeModal}
                handleExpenseModal={handleExpenseModal}
            />
            <AddIncome showIncomeModal={showIncomeModal} handleCloseIncomeModal={handleCloseIncomeModal} />
            <AddExpense showExpenseModal={showExpenseModal} handleCloseExpenseModal={handleCloseExpenseModal} />
        </div>
    )
}

export default Dashboard
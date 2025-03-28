import React, { useState } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import { Modal } from 'antd'

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
            <Modal
                visible={showIncomeModal}
                title="Add Income"
                onCancel={handleCloseIncomeModal}
            />
            <Modal
                visible={showExpenseModal}
                title="Add Expense"
                onCancel={handleCloseExpenseModal}
            />
        </div>
    )
}

export default Dashboard
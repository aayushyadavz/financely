import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import AddIncome from '../components/Modals/AddIncome'
import AddExpense from '../components/Modals/AddExpense'
import useGoogleFirestore from '../hooks/useGoogleFirestore'

const Dashboard = () => {
    const [showIncomeModal, setShowIncomeModal] = useState(false)
    const [showExpenseModal, setShowExpenseModal] = useState(false)
    const { loading, fetchTransactions, onFinish, transactions } = useGoogleFirestore()
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [totalBalance, setTotalBalance] = useState(0)

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

    useEffect(() => {
        fetchTransactions()
    }, [])

    useEffect(() => {
        calculateTotalBalance()
    }, [transactions])

    function calculateTotalBalance() {
        let income = 0
        let expense = 0
        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                income += transaction.amount
            } else {
                expense += transaction.amount
            }
        })
        setIncome(income)
        setExpense(expense)
        setTotalBalance(income - expense)
    }

    return (
        <div>
            <Header />

            {loading ? (<p> Loading...</p >) : (
                <>
                    <Cards
                        income={income}
                        expense={expense}
                        totalBalance={totalBalance}
                        handleIncomeModal={handleIncomeModal}
                        handleExpenseModal={handleExpenseModal}
                    />
                    <AddIncome
                        showIncomeModal={showIncomeModal}
                        handleCloseIncomeModal={handleCloseIncomeModal}
                        onFinish={onFinish}
                    />
                    <AddExpense
                        showExpenseModal={showExpenseModal}
                        handleCloseExpenseModal={handleCloseExpenseModal}
                        onFinish={onFinish}
                    />
                </>
            )
            }
        </div>

    )
}

export default Dashboard
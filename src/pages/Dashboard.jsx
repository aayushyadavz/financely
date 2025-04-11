import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import AddIncome from '../components/Modals/AddIncome'
import AddExpense from '../components/Modals/AddExpense'
import useGoogleFirestore from '../hooks/useGoogleFirestore'
import TableComponent from '../components/TableComponent'

const Dashboard = () => {
    const [showIncomeModal, setShowIncomeModal] = useState(false)
    const [showExpenseModal, setShowExpenseModal] = useState(false)
    const { loading,
        fetchTransactions,
        onFinish,
        transactions,
        calculateTotalBalance,
        income,
        expense,
        totalBalance,
        user,
        addTransactions
    } = useGoogleFirestore()


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
    }, [user])

    useEffect(() => {
        calculateTotalBalance()
    }, [transactions])

    const sortedTrannsactions = transactions.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

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
                    <TableComponent
                        transactions={transactions}
                        fetchTransactions={fetchTransactions}
                        addTransactions={addTransactions}
                    />
                </>
            )
            }
        </div>
    )
}

export default Dashboard
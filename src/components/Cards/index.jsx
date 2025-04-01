import React from 'react'
import "./styles.css"
import { Card, Row } from 'antd'
import Button from "../Button"

const Cards = ({ handleIncomeModal, handleExpenseModal, income, expense, totalBalance }) => {
    return (
        <Row className='my-row'>
            <Card className='my-card' >
                <h2>Current Balance</h2>
                <p>₹{totalBalance}</p>
                <Button blue={true} text={"Reset Balance"} />
            </Card>
            <Card className='my-card' >
                <h2>Total Income</h2>
                <p>₹{income}</p>
                <Button blue={true} text={"Add Income"} onClick={handleIncomeModal} />
            </Card>
            <Card className='my-card' >
                <h2>Total Expenses</h2>
                <p>₹{expense}</p>
                <Button blue={true} text={"Add Expense"} onClick={handleExpenseModal} />
            </Card>
        </Row>
    )
}

export default Cards
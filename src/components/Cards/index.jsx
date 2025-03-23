import React from 'react'
import "./styles.css"
import { Card, Row } from 'antd'
import Button from "../Button"

const Cards = () => {
    return (
        <Row className='my-row'>
            <Card className='my-card' >
                <h2>Current Balance</h2>
                <p>₹0</p>
                <Button blue={true} text={"Reset Balance"} />
            </Card>
            <Card className='my-card' >
                <h2>Total Income</h2>
                <p>₹0</p>
                <Button blue={true} text={"Reset Balance"} />
            </Card>
            <Card className='my-card' >
                <h2>Total Expenses</h2>
                <p>₹0</p>
                <Button blue={true} text={"Reset Balance"} />
            </Card>
        </Row>
    )
}

export default Cards
import React from 'react'
import './styles.css'
import { Radio, Select, Table } from 'antd';
import { useState } from 'react';

const TableComponent = ({ transactions }) => {
    const { Option } = Select
    const [search, setSearch] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    const [sortKey, setSortKey] = useState('')

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Tag',
            dataIndex: 'tag',
            key: 'tag',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
    ];

    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.name.toLowerCase().includes(search.toLowerCase()) && transaction.type.includes(typeFilter)
    })

    const sortedTrannsactions = filteredTransactions.sort((a, b) => {
        if (sortKey === 'date') {
            return new Date(b.date) - new Date(a.date)
        } else if (sortKey === 'amount') {
            return b.amount - a.amount
        }
        return 0
    })

    return (
        <>
            <div
                style={{
                    maxWidth: "100%",
                    padding: "0rem 2rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                        alignItems: "center",
                        marginBottom: "1rem",
                    }}
                >
                    <div className="input-flex">
                        <img src='search.svg' width="16" />
                        <input
                            value={search}
                            placeholder="Search by Name"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Select
                        className="select-input"
                        onChange={(value) => setTypeFilter(value)}
                        value={typeFilter}
                        placeholder="Filter"
                        allowClear
                    >
                        <Option value="">All</Option>
                        <Option value="income">Income</Option>
                        <Option value="expense">Expense</Option>
                    </Select>
                </div>

                <div className="my-table">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            marginBottom: "1rem",
                        }}
                    >
                        <h2>My Transactions</h2>

                        <Radio.Group
                            className="input-radio"
                            onChange={(e) => setSortKey(e.target.value)}
                            value={sortKey}
                        >
                            <Radio.Button value="">No Sort</Radio.Button>
                            <Radio.Button value="date">Sort by Date</Radio.Button>
                            <Radio.Button value="amount">Sort by Amount</Radio.Button>
                        </Radio.Group>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "1rem",
                                width: "400px",
                            }}
                        >
                            <button
                                className="btn"
                            // onClick={exportToCsv}
                            >
                                Export to CSV
                            </button>
                            <label for="file-csv" className="btn btn-blue">
                                Import from CSV
                            </label>
                            <input
                                // onChange={importFromCsv}
                                id="file-csv"
                                type="file"
                                accept=".csv"
                                required
                                style={{ display: "none" }}
                            />
                        </div>
                    </div>

                    <Table columns={columns} dataSource={sortedTrannsactions} />
                </div>
            </div>
            <p style={
                {
                    textAlign: "center",
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                }
            }>Made with ♥ by Ayush Yadav</p>
        </>
    )
}

export default TableComponent
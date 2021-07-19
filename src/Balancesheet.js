import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'



export default class Balancesheet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amount: "",
            type: "",
            remark: "",
            transactions: []
        }
    }
    saveTransaction = () => {        
        let { amount, type, remark, transactions } = this.state;
        let newTxn = {amount, type, remark, txnId:uuidv4()}
        transactions.push(newTxn)
        this.setState({transactions, amount: "", type: "", remark: "" })
    }

    getSummary = ()=>{
        let summary = {
            income:0,
            expense:0
        }

        this.state.transactions.forEach(txn=>{
            if(txn.type == "income"){
                summary.income += parseInt(txn.amount)
            }else{
                summary.expense += parseInt(txn.amount)
            }
        })

        return summary
    }

    deleteTxn = (txnId)=>{        
        let {transactions} = this.state
        transactions = transactions.filter(txn=>txn.txnId != txnId)
        this.setState({transactions})
    }

    render() {
        return (
            <div>
                <input
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={(e) => this.setState({ amount: e.target.value })}
                ></input>

                <select
                    value={this.state.type}
                    onChange={(e) => this.setState({ type: e.target.value })}>
                    <option value="">Select type</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>

                <input
                    type="text"
                    placeholder="Remark"
                    value={this.state.remark}
                    onChange={(e) => this.setState({ remark: e.target.value })}
                ></input>

                <button onClick={this.saveTransaction}>Save Transaction</button>

                {this.state.transactions.length > 0 ? <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Remark</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map(txn => {
                            return (<tr key={txn.txnId}>
                                <td>{txn.amount}</td>
                                <td>{txn.type}</td>
                                <td>{txn.remark}</td>
                                <td>
                                    <button onClick={()=>this.deleteTxn(txn.txnId)}>Delete</button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table> : <h1>No Transaction Available</h1>}
           
                <table width="30%" border="1">
                    <tr>
                        <th>Total Income</th>
                        <td>{this.getSummary().income}</td>
                    </tr>

                    <tr>
                        <th>Total Expense</th>
                        <td>{this.getSummary().expense}</td>
                    </tr>

                    <tr>
                        <th>Balance</th>
                        <td>{this.getSummary().income - this.getSummary().expense}</td>                    
                    </tr>

                </table>
           
            </div>
        )
    }
}

import React, { Component } from 'react';
import './stylesheet/Form.css';
import Expense from './Expense';
import localstorageFunctions from './LocalStorage';
// holds the basic data
const dataStr = [];
let newDataStr, newTotal;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      amount: '',
      to: '',
      note: '',
      date: '',
      total: 0,
    };
  }

  componentDidMount() {
    newDataStr = localstorageFunctions.getData('expense');
    newTotal = localstorageFunctions.getData('total');
    this.setState({
      data: newDataStr,
      total: newTotal,
    });
  }

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleTo = (e) => {
    this.setState({
      to: e.target.value,
    });
  };

  handleNote = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, to, note, date } = this.state;
    //appends new state
    dataStr.push({
      amount: parseInt(amount),
      to,
      note,
      date,
    });

    this.setState(
      {
        data: dataStr,
        amount: '',
        to: '',
        note: '',
        date: '',
      },
      localstorageFunctions.storeData('expense', dataStr),
    );
    this.getTotal();
  };

  getTotal = () => {
    let initialValue = 0;
    dataStr.forEach((i) => {
      initialValue += i.amount;
    });
    this.setState(
      {
        total: initialValue,
      },
      localStorage.setItem('total', initialValue),
    );
  };

  clearExp = () => {
    this.setState(
      {
        data: [],
        total: '',
      },
      localstorageFunctions.clearData('expense'),
      localStorage.removeItem('total'),
    );
  };

  render() {
    const expenseList = this.state.data
      ? this.state.data.map((exp, index) => (
          <Expense expense={exp} key={index} />
        ))
      : null;
    return (
      <div>
        <div className="card">
          <section>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label htmlFor="amount">Amount</label>
                <input
                  onChange={this.handleAmount}
                  value={this.state.amount}
                  type="number"
                  id="amount"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  value={this.state.to}
                  onChange={this.handleTo}
                  id="to"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="note">Note</label>
                <textarea
                  id="note"
                  onChange={this.handleNote}
                  cols="10"
                  rows="5"
                  required
                  value={this.state.note}
                ></textarea>
              </div>

              <div className="input-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  value={this.state.date}
                  onChange={this.handleDate}
                  id="date"
                  required
                />
              </div>

              <input type="submit" value="Add expense" />
            </form>
            <div className="functions">
              <button onClick={this.clearExp} className="clear">
                Clear Expense
              </button>
            </div>
          </section>
          <aside>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid grey',
              }}
            >
              <h3>Expenses</h3>
              <p className="total">Total Amount: #{this.state.total} </p>
            </div>
            {expenseList}
          </aside>
        </div>
      </div>
    );
  }
}

export default Form;

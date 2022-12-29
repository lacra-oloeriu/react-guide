import './ExpenseItem.css';

function ExpenseItem () {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurence';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
          <div>{expenseDate.toISOString()}</div>
          <div className="expense-item_description">
              <h2>{ expenseTitle}</h2>
              <div className ="expense-item_price">{ expenseAmount}</div>
          </div>
        </div>
    )
}

export default ExpenseItem;
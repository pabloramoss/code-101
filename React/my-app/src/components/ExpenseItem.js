import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <div className="item shadow">
          <div className="date shadow">{props.date}</div>
          <div className="item-name">{props.title}</div>
          <div className="price shadow">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;
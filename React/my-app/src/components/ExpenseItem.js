import "./ExpenseItem.css";
const clickHandler = ()=> {
  console.log('clicked!!');
}

function ExpenseItem(props) {
    return (
        <div className="item shadow">
          <div className="date shadow">{props.date}</div>
          <div className="item-name">{props.title}</div>
          <div className="price shadow">${props.amount}</div>
          <button onClick={clickHandler}>Change title</button>
        </div>
    );
}

export default ExpenseItem;
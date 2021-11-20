import "./ExpenseItem.css";
import { Link } from "react-router-dom";

// const clickHandler = ()=> {
//   console.log('clicked!!');
// }

function ExpenseItem(props) {
    return (
        <div className="item shadow">
          <img src="./images/mancuerna.jpg" className="itemImage"alt="imagen mancuerna"></img>
          <div className="date shadow">{props.date}</div>
          <div className="item-name">{props.title}</div>
          <div className="price shadow">${props.amount}</div>
          <Link to="">Entrá acá</Link>
          {/* <button onClick={clickHandler}>Change title</button> */}
        </div>
    );
}

export default ExpenseItem;
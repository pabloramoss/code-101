import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
const expenses = [
  {title: "Mancuerna 5kg", amount: 100, date: 28},
  {title: "Mancuerna 10kg", amount: 200, date: 29},
  {title: "Mancuerna 15kg", amount: 300, date: 30},
  {title: "Mancuerna 20kg", amount: 400, date: 31},
]

  return (
    <div className="hola">
      <main className="shadow">
        <h1>MANCUERNAS</h1>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
      </main>
    </div>
  );
}

export default App;

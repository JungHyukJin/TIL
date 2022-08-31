import Expenses from './components/Expenses/Expenses.js';

function App() {
  const expenses = [
    {
      id: "1",
      title: "desk",
      amount: "100",
      date: new Date(2021, 8, 31),
    },
    {
      id: "2",
      title: "chair",
      amount: "200",
      date: new Date(2022, 11, 1),
    },
    {
      id: "3",
      title: "computer",
      amount: "300",
      date: new Date(2022, 9, 12),
    },
  ];

  return (
    <div>
      <h2>hihihi</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

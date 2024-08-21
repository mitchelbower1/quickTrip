import { useMemo, useState } from "react";

export default function App() {
  return (
    <div className="main-app">
      <TitleBar />
      <SetBudgetForm />
    </div>
  );
}

function TitleBar() {
  return (
    <div className="header">
      <h1>Create a budget for your trip!</h1>
    </div>
  );
}

function SetBudgetForm() {
  const [budget, setBudget] = useState("");
  const [haveSpent, setHaveSpent] = useState("");
  const [remainder, setRemainder] = useState("");

  // function handleSetbudget() {
  //   setBudget(())
  // }

  const handleSetRemainder = (e) => {
    e.preventDefault();
    if (!budget) return;
    setRemainder(budget - haveSpent);
  };

  const updateRemainder = () => {};

  return (
    <div className="set-budget-form">
      <form className="form">
        <label>Set budget</label>
        <input
          className={haveSpent > budget ? "negative" : ""}
          type="text"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <button onClick={handleSetRemainder}>Set</button>
        <label>How much have you spent?</label>
        <input
          type="text"
          value={haveSpent}
          onChange={(e) => setHaveSpent(Number(e.target.value))}
        />
        <button>Update</button>
        <label>remainder</label>
        <input
          type="text"
          disabled
          value={remainder}
          className={haveSpent > budget ? "negative" : "green"}
        />
      </form>
    </div>
  );
}
